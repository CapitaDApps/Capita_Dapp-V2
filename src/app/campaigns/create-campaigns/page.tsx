"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUpload, { ImageValue } from "@/components/ImageUpload";
import FormFields from "@/components/FormField";

export default function CreateCampaignPage() {
  const [creatorOpen, setCreatorOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [creator, setCreator] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [selectedNetwork, setSelectedNetwork] = useState<string>("base");
  const [selectedToken, setSelectedToken] = useState<string | null>("ETH");
  const [name, setName] = useState("");
  const [cover, setCover] = useState<ImageValue>(null);
  const [avatar, setAvatar] = useState<ImageValue>(null);
  const [dissolve, setDissolve] = useState(false);
  const router = useRouter();

  function handleSubmitClick() {
    setDissolve(true);
    setTimeout(() => {
      router.push("/campaigns/premium/terms");
    }, 300);
  }

  return (
    <div className="min-h-screen bg-[#101821] py-12">
      <div className="max-w-10xl mx-auto px-6">
        <div className="flex justify-center">
          <div className="relative mx-auto w-full sm:w-[900px] p-6 sm:p-8">
            <div
              aria-hidden
              className="absolute -inset-3 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 30%, #0056CC2E 0%, #0056CC14 28%, transparent 60%)",
                filter: "blur(36px)",
                WebkitFilter: "blur(36px)",
                boxShadow:
                  "0 80px 160px rgba(2,6,12,0.7), 0 30px 80px rgba(0,86,204,0.16)",
                borderRadius: "28px",
              }}
            />

            {/* Card content (above the overlay) */}
            <div
              className={`relative z-10 bg-[#0b0f12] border border-[#666666] rounded-2xl p-8 ${
                dissolve ? "dissolve" : ""
              }`}
            >
              {/* glossy/shiny content overlay (subtle) */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.00) 30%, rgba(255,255,255,0.02) 60%, rgba(255,255,255,0) 100%)",
                  mixBlendMode: "overlay",
                  opacity: 0.9,
                }}
              />
              <button
                className="text-sm text-primary-text mb-4 bg-transparent"
                onClick={() => window.history.back()}
              >
                &lt; Back
              </button>
              <div className="space-y-6">
                {/* Cover image container */}

                <div className="relative">
                  <ImageUpload
                    value={cover}
                    onChange={(v) => setCover(v)}
                    variant="cover"
                  />
                </div>

                <div className="flex justify-center -mt-15 relative z-10">
                  <ImageUpload
                    value={avatar}
                    onChange={(v) => setAvatar(v)}
                    variant="avatar"
                  />
                </div>

                <FormFields
                  name={name}
                  onNameChange={setName}
                  creatorOpen={creatorOpen}
                  setCreatorOpen={setCreatorOpen}
                  categoryOpen={categoryOpen}
                  setCategoryOpen={setCategoryOpen}
                  creator={creator}
                  setCreator={setCreator}
                  category={category}
                  setCategory={setCategory}
                  selectedNetwork={selectedNetwork}
                  setSelectedNetwork={setSelectedNetwork}
                  selectedToken={selectedToken}
                  setSelectedToken={setSelectedToken}
                  handleSubmitClick={handleSubmitClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dissolve {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-6px);
          }
        }
        .dissolve {
          animation: dissolve 300ms ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
