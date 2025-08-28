"use client";
import React from "react";

type MultiFormState = {
  profileImg?: string;
  profileCoverImg?: string;
  setProfileImg: (v?: string) => void;
  setProfileCoverImg: (v?: string) => void;
};

const MultiFormContext = React.createContext<MultiFormState | undefined>(
  undefined
);

export function MultiStepProvider({ children }: { children: React.ReactNode }) {
  const [profileImg, setProfileImgState] = React.useState<string | undefined>(
    undefined
  );
  const [profileCoverImg, setProfileCoverImgState] = React.useState<
    string | undefined
  >(undefined);

  const setProfileImg = (v?: string) => setProfileImgState(v);
  const setProfileCoverImg = (v?: string) => setProfileCoverImgState(v);

  return (
    <MultiFormContext.Provider
      value={{ profileImg, profileCoverImg, setProfileImg, setProfileCoverImg }}
    >
      {children}
    </MultiFormContext.Provider>
  );
}

export function useMultiStep() {
  const ctx = React.useContext(MultiFormContext);
  if (!ctx) {
    // fallback lightweight implementation so components work without provider
    const fallback = React.useRef<MultiFormState | null>(null);
    if (!fallback.current) {
      let img: string | undefined = undefined;
      let cover: string | undefined = undefined;
      fallback.current = {
        profileImg: img,
        profileCoverImg: cover,
        setProfileImg: (v?: string) => {
          img = v;
        },
        setProfileCoverImg: (v?: string) => {
          cover = v;
        },
      };
    }
    return fallback.current;
  }
  return ctx;
}
