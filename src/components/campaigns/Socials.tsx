import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Socials() {
  return (
    <div className="flex flex-row justify-between items-center gap-16 md:gap-12 px-4 pr-80">
      <div>
        <hr className="h-96 bg-[#666666]/30 border-0 my-4" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-sidebar-content pb-10">
          Socials
        </h2>
        <ul className="flex flex-col gap-4 text-sidebar-content">
          <li>
            <a href="#" className="flex items-center gap-2">
              <FaFacebookF className="text-xl" />
              <span>@xusername</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <FaInstagram className="text-xl" />
              <span>@xusername</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <FaXTwitter className="text-xl" />
              <span>@xusername</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Socials;
