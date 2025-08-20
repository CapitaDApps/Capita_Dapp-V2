import { TbMoneybag } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaBell, FaCrown, FaQuestionCircle, FaUser } from "react-icons/fa";

export const menuItems = [
  { title: "My Campaigns", icon: <TbMoneybag />, route: "/campaigns/my-campaigns" },
  {
    title: "Explore Campaigns",
    icon: <CiSearch />,
    route: "/campaigns/explore-campaigns",
  },
  { title: "Notifications", icon: <FaBell />, route: "/campaigns/notifications" },
  { title: "Premium", icon: <FaCrown />, route: "/campaigns/premium" },
  { title: "Profile", icon: <FaUser />, route: "/campaigns/profile" },
  { title: "Help Center", icon: <FaQuestionCircle />, route: "/campaigns/help-center" },
];
