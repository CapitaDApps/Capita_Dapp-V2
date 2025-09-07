import Image from "next/image";
import { Button } from "../ui/button";
import Socials from "./Socials";
import { FaExclamationTriangle } from "react-icons/fa";

function PopupProfile() {
  return (
    <div>
      <span className="flex justify-end absolute top-4 right-4 cursor-pointer">
        <FaExclamationTriangle className="md:text-xl text-lg text-red-500 mx-auto mb-4" />
      </span>
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <Image
            src="/layout/avatarboy.svg"
            alt="avatar"
            width={80}
            height={80}
            className="mx-auto border-none w-16 h-16 md:w-20 md:h-20 shadow-sm rounded-full"
          />

          <div className="text-center flex flex-row gap-x-2 items-center justify-center mt-4">
            <h3 className="text-2xl font-bold">John Doe</h3>
            <Button
              style={{
                background:
                  "linear-gradient(270.05deg, #003def 68.33%, #001f7a 114.25%)",
              }}
              className="w-15 h-5 text-background items-center text-xs rounded-2xl font-bold"
            >
              Follow
            </Button>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-x-2 items-center justify-center">
            <Image
              src="/layout/chart.png"
              alt="verified"
              width={80}
              height={80}
            />
            <div className="text-sidebar-content text-center font-medium md:text-sm text-xs gap-2 flex flex-col">
              <p className="pt-2">12.5k Supporters</p>
              <p className="pb-2">Trust Score: 3.2/5</p>
            </div>
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
}
export default PopupProfile;
