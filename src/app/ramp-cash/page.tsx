import Link from "next/link";

export default function HelpCenter() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-[rgba(255,255,255,0.02)]  rounded-2xl p-8 text-center">
        <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-[linear-gradient(270.05deg,#003def_68.33%,#001f7a_114.25%)] flex items-center justify-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2v6"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16v6"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12h16"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-sidebar-content mb-2">
          Ramp Cash — Coming Soon
        </h1>
        <p className="text-sm text-sidebar-content mb-6">
          We&apos;re building a simple, secure way to ramp cash into the
          platform. Stay tuned — we&apos;ll be launching this feature soon.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            style={{
              background:
                "linear-gradient(270.05deg, #003def 68.33%, #001f7a 114.25%)",
            }}
            className="inline-block px-4 py-2 rounded-md bg-primary hover:bg-primary/80 text-background text-sm font-medium"
          >
            Back to Home
          </Link>
          <button
            type="button"
            className="inline-block px-4 py-2 rounded-md border border-[#003def] text-[#003def] text-sm hover:bg-white/5"
            disabled
            aria-disabled
          >
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
}
