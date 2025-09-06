import Image from "next/image";
import { Button } from "../ui/button";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

function PopupProfile() {
  return (
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
        <div className="flex flex-row gap-x-2 items-center justify-center">
          <Image
            src="/layout/chart.png"
            alt="verified"
            width={80}
            height={80}
          />
          <div className="text-sidebar-content text-center font-medium">
            <p>12.5k Supporters</p>
            <p>Trust Score: 3.2/5</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center justify-center mt-4 text-sidebar-content text-xl cursor-pointer">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaXTwitter />
          </span>
          <span>
            <FaPlus />
          </span>
        </div>
      </div>
    </div>
  );
}
export default PopupProfile;
