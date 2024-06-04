const GradientCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`overflow-hidden relative border-none  bg-[#000101] p-6 rounded-3xl after:content-[''] after:absolute after:z-0 after:h-[70%] after:w-[90%] after:bottom-0 after:left-0 after:bg-gradient-to-tr after:from-primary-100 after:via-transparent after:to-transparent ${className}`}
    >
      {children}
    </div>
  );
};

export default GradientCard;
