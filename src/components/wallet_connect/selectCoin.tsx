import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tokens } from "@/services/contracts/tokensConfig";
import { Dispatch, SetStateAction } from "react";

function SelectCoin({
  selectedToken,
  setSelectedToken,
}: {
  selectedToken: string;
  setSelectedToken: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Select onValueChange={setSelectedToken} value={selectedToken}>
      <SelectTrigger className="text-xs w-fit px-2 rounded-xl border-[1px] border-gray-300 focus:ring-0 focus:border-gray-400  text-sidebar-content">
        <SelectValue placeholder="ETH" defaultValue={"eth"} />
      </SelectTrigger>

      <SelectContent className="bg-sidebar shadow-xl text-sidebar-content border-[1px] border-gray-300">
        {tokens.map((token) => (
          <SelectItem
            value={token.name}
            className="text-gray-700 hover:bg-gray-300 focus:bg-gray-300 hover:text-gray-800 focus:text-gray-700"
            key={token.name}
          >
            {token.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
export default SelectCoin;
