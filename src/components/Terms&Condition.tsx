"use client";
import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function TermsAndConditions() {
  const [click, setClick] = useState(false);
  const router = useRouter();
  function handleSubmit() {
    router.push("/review");
  }
  return (
    <div className="space-y-3 pb-24">
      <p className="text-xs font-normal text-center lg:text-left text-primary-text">
        You&apos;re about to create a campaign. Kindly take time to read through
        the terms & Conditions
      </p>
      <div className="bg-gradient-to-b from-blue-300 to-white  p-3.5 lg:p-6 rounded-3xl text-xs text-sidebar-content leading-[20px] shadow-2xl">
        <p>
          <strong>ChainFundMe Terms of Usage</strong>
        </p>
        <br />

        <p>
          <strong>1. Introduction</strong>
        </p>
        <p>
          Welcome to ChainFundMe, a decentralized crowdfunding platform built on
          blockchain technology. By accessing or using our platform, you agree
          to be bound by these Terms of Usage. If you do not agree, please do
          not use our platform.
        </p>
        <br />

        <p>
          <strong>2. Eligibility</strong>
        </p>
        <p>
          You must be at least 16 years old to create a campaign on ChainFundMe.
          By creating a campaign, you represent and warrant that you meet this
          age requirement.
        </p>
        <br />

        <p>
          <strong>3. Compliance with Laws</strong>
        </p>
        <p>
          You are responsible for ensuring that your use of ChainFundMe complies
          with all applicable laws, regulations, and rules in your jurisdiction.
          If the use of cryptocurrency or crowdfunding is prohibited or
          restricted in your location, you are not permitted to use ChainFundMe.
        </p>
        <br />

        <p>
          <strong>4. Use of Platform</strong>
        </p>
        <p>By using ChainFundMe, you acknowledge and agree that:</p>
        <ul>
          <li>
            You are solely responsible for the integrity and accuracy of your
            campaign, including any descriptions, images, and other content.
          </li>
          <li>
            ChainFundMe is not a partner, agent, or representative of yours, and
            we do not endorse or guarantee the success of your campaign.
          </li>
          <li>
            You will comply with all applicable laws and regulations when
            creating and managing your campaign.
          </li>
          <li>
            You will not use ChainFundMe for any unlawful, fraudulent, or
            malicious purposes.
          </li>
        </ul>
        <br />

        <p>
          <strong>5. Liability and Responsibility</strong>
        </p>
        <p>By using ChainFundMe, you acknowledge and agree that:</p>
        <ul>
          <li>
            You are fully responsible for any consequences arising from your use
            of the platform, including any losses, damages, or liabilities.
          </li>
          <li>
            ChainFundMe is not liable for any losses, damages, or liabilities
            arising from your use of the platform, including any issues with
            your campaign or transactions.
          </li>
          <li>
            You will indemnify, defend, and hold harmless ChainFundMe, its
            developers, and its affiliates from any claims, demands, or
            liabilities arising from your use of the platform.
          </li>
        </ul>
        <br />

        <p>
          <strong>6. Fees</strong>
        </p>
        <p>
          ChainFundMe charges a fee of 5% on every donation made through our
          platform. This fee will be deducted automatically from each donation.
        </p>
        <br />

        <p>
          <strong>7. Intellectual Property</strong>
        </p>
        <p>
          You retain ownership of any intellectual property rights in your
          campaign content. By creating a campaign on ChainFundMe, you grant us
          a non-exclusive license to display and promote your campaign.
        </p>
        <br />

        <p>
          <strong>8. Termination</strong>
        </p>
        <p>
          ChainFundMe reserves the right to terminate or suspend your access to
          the platform at any time, without notice, if we determine that you
          have breached these Terms of Usage.
        </p>
        <br />

        <p>
          <strong>9. Changes to Terms</strong>
        </p>
        <p>
          ChainFundMe may update these Terms of Usage from time to time. Your
          continued use of the platform after any changes will be deemed
          acceptance of the updated Terms.
        </p>
        <br />

        <p>
          <strong>10. Acknowledgment</strong>
        </p>
        <p>
          By using ChainFundMe, you acknowledge that you have read, understand,
          and agree to be bound by these Terms of Usage. You understand that
          ChainFundMe is a decentralized platform, and you are responsible for
          your own actions and decisions when using the platform.
        </p>
        <br />

        <p>
          By using ChainFundMe, you agree to these Terms of Usage. If you do not
          agree, please do not use our platform.
        </p>
        <div className="flex items-center space-x-2 mt-3 ">
          <Checkbox id="terms" onClick={() => setClick(!click)} />
          <label htmlFor="terms" className="">
            I agree to all the terms and conditions above
          </label>
        </div>
      </div>
      <Button
        disabled={!click}
        onClick={handleSubmit}
        style={{
          background:
            "linear-gradient(270.05deg, #003DEF 68.33%, #001F7A 114.25%)",
        }}
        className="hover:bg-transparent text-white w-full"
      >
        Submit
      </Button>
    </div>
  );
}
