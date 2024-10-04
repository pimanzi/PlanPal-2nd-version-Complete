interface GridInterface {
  children: React.ReactNode;
}
function Grid({ children }: GridInterface) {
  return (
    <div>
      <ul className="grid auto-rows-min grid-cols-4 gap-4">{children}</ul>
    </div>
  );
}

export default Grid;
