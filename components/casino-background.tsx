const CasinoBackground = () => {
  return (
    <div className="fixed w-screen h-screen z-0 top-0 left-0">
      <div className="absolute z-10 h-full w-full bg-black/70 top-0 left-0" />
      <img className="z-0 relative" src="/casino-set.jpg" alt="casino set" />
    </div>
  );
};

export default CasinoBackground;
