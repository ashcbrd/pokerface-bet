type ButtonVariants = "primary" | "secondary" | "outline";
type ButtonType = "submit" | "reset";

const Button = ({
  variant,
  className,
  children,
  type,
  onClick,
}: {
  variant?: ButtonVariants;
  className?: string;
  children: React.ReactNode;
  type?: ButtonType;
  onClick?: () => void;
}) => {
  const buttonVariants = (variant?: ButtonVariants) => {
    switch (variant) {
      case "primary":
        return "bg-primary-100 text-white transition-all";
      case "secondary":
        return "bg-primary-200 text-white transition-all";
      case "outline":
        return "border border-primary-100 bg-none";
      default:
        return "bg-black text-white";
    }
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${buttonVariants(
        variant
      )} ${className} px-6 py-2 rounded-full`}
    >
      {children}
    </button>
  );
};

export default Button;
