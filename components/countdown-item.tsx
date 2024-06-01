const CountdownItem = ({
  timeValue,
  timeLabel,
}: {
  timeValue: number;
  timeLabel: string;
}) => {
  return (
    <div className="bg-primary-200 rounded-full h-16 w-16 flex flex-col items-center justify-center">
      <p>{timeValue}</p>
      <small className="text-[10px]">{timeLabel}</small>
    </div>
  );
};

export default CountdownItem;
