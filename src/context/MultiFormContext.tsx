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

  const fallbackRef = React.useRef<MultiFormState | null>(null);

  if (!ctx) {
    if (!fallbackRef.current) {
      let img: string | undefined = undefined;
      let cover: string | undefined = undefined;
      fallbackRef.current = {
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
    return fallbackRef.current;
  }
  return ctx;
}
