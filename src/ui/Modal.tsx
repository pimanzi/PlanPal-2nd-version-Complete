import useDetectOutsideClick from "@/hooks/useDetectOutsideClick";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

interface ModalInterface {
  showModal: string;
  close: () => void;
  open: React.Dispatch<React.SetStateAction<string>>;
}
const ModalContext = createContext<ModalInterface | undefined>(undefined);

export default function Modal({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState<string>("");

  function close(): void {
    setShowModal("");
  }
  const open = setShowModal;

  return (
    <ModalContext.Provider value={{ showModal, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opens,
}: {
  children: React.ReactNode;
  opens: string;
}) {
  const { open } = useContext(ModalContext)!;
  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({
  children,
  opensName,
}: {
  children: React.ReactNode;
  opensName: string;
}) {
  const { showModal, close } = useContext(ModalContext)!;
  const ref = useDetectOutsideClick(close, true);

  if (showModal !== opensName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        ref={ref}
        className="relative w-full max-w-lg -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-8 shadow-lg transition-all"
      >
        <button
          onClick={close}
          className="absolute right-4 top-3 rounded-sm p-2 hover:bg-gray-200"
        >
          <HiXMark className="h-6 w-6 text-gray-500" />
        </button>
        <div>{cloneElement(children, { onClose: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Window = Window;
Modal.Open = Open;
