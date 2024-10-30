interface GridInterface {
  children: React.ReactNode;
}
function Grid({ children }: GridInterface) {
  return (
    <div>
      <ul className="grid auto-rows-min xsTablet:justify-between  justify-center sm:grid-cols-[repeat(2,minmax(0,400px))] xsTablet:grid-cols-[repeat(2,minmax(0,400px))] bgTablet:grid-cols-3 laptop:grid-cols-[repeat(4,minmax(300px,500px))] grid-cols-[repeat(1,1fr)] laptop:gap-6 gap-4 bgTablet:gap-6 smTablet:grid-cols-[repeat(2,minmax(0,450px))]">
        {children}
      </ul>
    </div>
  );
}

export default Grid;
