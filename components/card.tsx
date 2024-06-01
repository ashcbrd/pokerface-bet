const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`p-4 rounded-2xl w-max h-max border-2 border-primary-100 bg-dark-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
