import SupportersData from "@/lib/supportersData";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import PopupProfile from "./PopupProfile";

function Supporters() {
  type Supporter = {
    id: number;
    name: string;
    amount: number;
    donation: string;
    avatar: string;
  };

  return (
    <div>
      <h2 className="text-sm font-bold text-sidebar-content pb-3">
        Top Supporters
      </h2>
      <ul>
        {SupportersData.map((supporter: Supporter) => (
          <li key={supporter.id}>
            <div className="flex items-center pt-4 gap-x-2">
              <div className="shrink-0">
                <Popover>
                  <PopoverTrigger>
                    <Image
                      src={supporter.avatar}
                      alt={supporter.name + "avatar"}
                      width={36}
                      className="cursor-pointer"
                      height={36}
                    />
                  </PopoverTrigger>
                  <PopoverContent
                    side="top"
                    align="center"
                    className="border border-disabled-text/20 bg-background rounded-xl text-sm shadow-md text-sidebar-content p-6 md:w-[300px] w-[250px] mt-2 ml-6"
                  >
                    <PopupProfile />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-sm">{supporter.name}</span>
                </div>
                <div className="flex flex-row">
                  <span className="text-xs font-black text-sidebar-content pr-1">
                    ${supporter.amount}
                  </span>
                  <span className="text-xs font-medium">
                    {supporter.donation}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="pt-6">
        <Button
          className="text-xs text-sidebar-content rounded-4xl border border-disabled-text/30 px-4 py-2 hover:bg-transparent hover:text-sidebar-content cursor-pointer"
          variant={"outline"}
        >
          see all
        </Button>
      </div>
    </div>
  );
}

export default Supporters;
