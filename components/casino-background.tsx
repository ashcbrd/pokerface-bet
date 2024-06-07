const CasinoBackground = ({ isGlobal = false }: { isGlobal?: boolean }) => {
  return (
    <div
      className={`${
        isGlobal
          ? "fixed w-screen h-screen hidden tablet:block"
          : "absolute h-full block tablet:hidden"
      } z-0 top-0 left-0`}
    >
      <div className="absolute z-10 h-full w-full bg-black/70 top-0 left-0" />
      <img
        className={`z-0 relative ${
          !isGlobal && "h-full w-auto object-cover left-0"
        }`}
        src="/casino-set.jpg"
        alt="casino set"
      />
    </div>
  );
};

export default CasinoBackground;
