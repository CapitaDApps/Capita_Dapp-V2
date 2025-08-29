import Link from "next/link";

export default function HelpCenter() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-[rgba(255,255,255,0.02)]  rounded-2xl p-8 text-center">
        <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#003def] to-[#001f7a] flex items-center justify-center">
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

        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Ramp Cash — Coming Soon
        </h1>
        <p className="text-sm text-secondary-text mb-6">
          We&apos;re building a simple, secure way to ramp cash into the
          platform. Stay tuned — we&apos;ll be launching this feature soon.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-block px-4 py-2 rounded-md bg-white text-black text-sm font-medium"
          >
            Back to Home
          </Link>
          <button
            type="button"
            className="inline-block px-4 py-2 rounded-md border border-white/20 text-white text-sm hover:bg-white/5"
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
