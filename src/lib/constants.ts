import { TbMoneybag } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuCrown } from "react-icons/lu";
import { z } from "zod";

export const menuItems = [
  {
    title: "Explore Campaigns",
    icon: CiSearch,
    route: "/explore-campaigns",
    slug: "explore-campaigns",
  },
  {
    title: "My Donations",
    icon: TbMoneybag,
    route: "/my-donations",
    slug: "donations",
  },
  {
    title: "Profile",
    icon: CgProfile,
    route: "/profile",
    slug: "profile",
  },
  {
    title: "Notifications",
    icon: IoMdNotificationsOutline,
    route: "/notifications",
    slug: "notifications",
  },
  {
    title: "Premium",
    icon: LuCrown,
    route: "/premium",
    slug: "premium",
  },
  {
    title: "RampCash",
    icon: TbMoneybag,
    route: "/ramp-cash",
    slug: "ramp-cash",
  },
];

// export const filters = [
//   {
//     id: 1,
//     title: "All Campaigns",
//     svg: "/campaign/menu.png",
//     slug: "all-campaigns",
//   },
// ];

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

export const CampaignFormSchema = z.object({
  cover: z
    .instanceof(File, { message: "Please upload a cover image." })
    .refine((file) => file.size < 5 * 1024 * 1024, {
      message: "Cover must be smaller than 5MB.",
    }),

  avatar: z
    .instanceof(File, { message: "Please upload an avatar image." })
    .refine((file) => ["image/png", "image/jpeg"].includes(file.type), {
      message: "Only PNG or JPG images are allowed.",
    }),
  campaignName: z
    .string({ message: "Campaign name is required" })
    .min(2, { message: "Campaign must be at least 2 characters." }),
  fundingTarget: z
    .string({ message: "Funding target is required" })
    .min(2, { message: "" }),

  bio: z
    .string({ message: "Bio is required" })
    .min(100, { message: "Bio must be at least 100 characters." }),

  creator: z
    .string({ message: "Please select a creator type" })
    .min(1, "Please select a creator type"),
  chain: z
    .string({ message: "Please select a chain" })
    .min(1, "Please select a chain"),

  category: z
    .string({ message: "Please select campaign category" })
    .min(1, "Please select campaign category"),

  startDate: z
    .string({ message: "Start date is required" })
    .min(1, "Start date is required"),

  endDate: z
    .string({ message: "End date is required" })
    .min(1, "End date is required"),
  tokens: z
    .array(z.string(), {
      message: "Please select a token.",
    })
    .min(1, { message: "Please select at least one token." })
    .max(5, { message: "You can select up to 5 tokens only." }),
});
export const EditProfileFormSchema = z.object({
  displayName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bio: z.string().min(20, {
    message: "bio must be at least 20 characters.",
  }),
  email: z.string().email(),
  xLink: z.string().optional(),
  lnLink: z.string().optional(),
});
