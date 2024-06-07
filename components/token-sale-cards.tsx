import { formatAmountCommas } from "@/lib/utils";
import Button from "./button";
import Card from "./card";

interface IPresaleTokens {
  phase: number;
  price: number;
  total: number;
  perStageMin: number;
  totalRaiseMin: number;
}

const TokenSaleCards = (props: IPresaleTokens) => {
  return (
    <Card className="pt-12 pb-6 px-6 flex flex-col gap-y-6 items-center italic w-[300px] tablet:min-w-[400px]">
      <h3 className="font-bold text-primary-200 text-2xl">
        PRESALE PHASE {props.phase}
      </h3>
      <div className="w-full">
        <div className="flex justify-between w-full border-b border-zinc-600 py-2 pl-3">
          <p className="text-sm">Price starts from (USDT):</p>
          <p className="w-32 text-sm">{formatAmountCommas(props.price)}</p>
        </div>
        <div className="flex justify-between w-full border-b border-zinc-600 py-2 pl-3">
          <p className="text-sm">Total for sale:</p>
          <p className="w-32 text-sm">{formatAmountCommas(props.total)}</p>
        </div>
        <div className="flex justify-between w-full border-b border-zinc-600 py-2 pl-3">
          <p className="text-sm">Per Stage min. (USDT)</p>
          <p className="w-32 text-sm">
            {formatAmountCommas(props.perStageMin)}
          </p>
        </div>
        <div className="flex justify-between w-full border-b border-zinc-600 py-2 pl-3">
          <p className="text-sm">Total Raise min. (USDT)</p>
          <p className="w-32 text-sm">
            {formatAmountCommas(props.totalRaiseMin)}
          </p>
        </div>
      </div>
      <Button variant="primary" className="py-3 px-8 italic hover:bg-[#b2511c]">
        BUY $PF
      </Button>
    </Card>
  );
};

export default TokenSaleCards;
