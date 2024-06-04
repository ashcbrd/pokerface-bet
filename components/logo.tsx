/* eslint-disable @next/next/no-img-element */

type SizeVariants = "sm" | "md" | "lg" | "xl";

const sizeVariant = (variant?: string) => {
  switch (variant) {
    case "sm":
      return "max-w-[260px]";
    case "md":
      return "max-w-[320px]";
    case "lg":
      return "max-w-[400px]";
    case "xl":
      return "max-w-[500px]";
    default:
      return "max-w-[400px]";
  }
};

const Logo = ({ size }: { size?: SizeVariants }) => {
  return (
    <img
      src="/logo.png"
      alt="Pokerface Bets logo"
      className={`${sizeVariant(size)} object-contain m-auto relative`}
    />
  );
};

export default Logo;
