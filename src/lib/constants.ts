import { TbMoneybag } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaBell, FaCrown, FaQuestionCircle, FaUser } from "react-icons/fa";
import { z } from "zod";

export const menuItems = [
  {
    title: "My Campaigns",
    icon: TbMoneybag,
    route: "/my-campaigns",
    slug: "campaigns",
  },
  {
    title: "Explore Campaigns",
    icon: CiSearch,
    route: "/explore-campaigns",
    slug: "explore-campaigns",
  },
  {
    title: "Notifications",
    icon: FaBell,
    route: "/notifications",
    slug: "notifications",
  },
  {
    title: "Premium",
    icon: FaCrown,
    route: "/premium",

    slug: "premium",
  },
  {
    title: "Profile",
    icon: FaUser,
    route: "/profile",

    slug: "profile",
  },
  {
    title: "Help Center",
    icon: FaQuestionCircle,
    route: "/help-center",
    slug: "help-center",
  },
];

export const filters = [
  {
    id: 1,
    title: "All Campaigns",
    svg: "/campaign/menu.png",
    slug: "all-campaigns",
  },
  {
    id: 2,
    title: "My Contributions",
    svg: "/campaign/money_bag.png",
    slug: "my-contributions",
  },
  {
    id: 3,
    title: "Favorites",
    svg: "/campaign/favourite.png",
    slug: "favorites",
  },
];

export const DateOnlySchema = z
  .object({
    startDate: z
      .string()
      .nonempty("Start date is required")
      .refine((s) => !Number.isNaN(Date.parse(s)), {
        message: "Start date is invalid",
      }),
    endDate: z
      .string()
      .nonempty("End date is required")
      .refine((s) => !Number.isNaN(Date.parse(s)), {
        message: "End date is invalid",
      }),
  })
  .refine(
    (d) => new Date(d.endDate).getTime() > new Date(d.startDate).getTime(),
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  );
