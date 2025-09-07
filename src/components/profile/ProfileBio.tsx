"use client";
import Link from "next/link";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Socials from "../campaigns/Socials";

// import { useGetProfile } from "../hooks/useGetProfile";
// import { useAccount } from "../hooks/useAccount";

export default function ProfileBio() {
  // Uncomment and use real hooks when available
  // const { profile, status } = useGetProfile();
  // const { address } = useAccount();
  // if (status === "pending")
  //   return !address ? (
  //     <p className="text-white font-bold">Please connect your wallet</p>
  //   ) : (
  //     <p className="text-white font-bold">loading...</p>
  //   );

  // Dummy profile data for UI/demo purposes
  const profile = {
    displayName: "John Doe",
    tgLink: "https://t.me/johndoe",
    xLink: "https://x.com/johndoe",
    lnLink: "https://www.linkedin.com/in/johndoe",
    bio: "Passionate builder and community organizer. I support transparent, verifiable funding for public good.",
  };

  return (
    <div className="w-full max-w-[900px] mx-auto">
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-3 mt-5 w-full">
        <div className="flex flex-col items-center md:items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-[#111] font-medium text-2xl">
              {profile?.displayName || "Anon"}
            </h1>

            <div className="hidden md:inline-flex items-center gap-2 text-sm border border-[#383838] rounded-md font-semibold cursor-pointer px-3 py-1 text-[#00b875]">
              <Image
                src={"/layout/checkmark.svg"}
                alt="checkmark"
                width={18}
                height={18}
              />
              Get Verification Badge
            </div>
          </div>

          <Socials />
          {/* verification pill shown under name on small screens */}
          <div className="mt-3 md:hidden">
            <div className="inline-flex items-center gap-2 text-sm border border-[#383838] rounded-md font-semibold cursor-pointer px-3 py-1 text-blue-600">
              <Image
                src={"/layout/checkmark.svg"}
                alt="checkmark"
                width={18}
                height={18}
              />
              Get Verification Badge
            </div>
          </div>
        </div>
      </div>

      <p className="text-primary-text text-sm font-normal mt-4 text-center mx-auto w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]">
        {profile?.bio || "Edit your profile"}
      </p>
    </div>
  );
}
