const SideSeparator = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-max w-full relative">
      <div className="relative z-10 px-4 mx-auto w-max bg-dark-100">
        {children}
      </div>
      <div className="absolute top-0 bottom-0 m-auto h-[.5px] w-full bg-zinc-600 z-0" />
    </div>
  );
};

export default SideSeparator;
