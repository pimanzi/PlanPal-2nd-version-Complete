export interface Window {
  matchMedia: (query: string) => {
    matches: boolean;
    addListener: (
      listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void
    ) => void;
    removeListener: (
      listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void
    ) => void;
  };
}
