import Image from "next/image";

export default function BackgroundWithOverlay() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <Image
        src="/layout/background.jpg"
        alt="Background"
        priority
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
    </div>
  );
}