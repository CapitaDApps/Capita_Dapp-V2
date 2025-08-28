import Image from "next/image";

export default function Premium() {
  return (
    <div className="min-h-screen bg-[#121212] mt-12">
      {/* Hero */}
      <section
        className="py-14"
        style={{
          background: "linear-gradient(180deg, #0C1219 0%, #293B51 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Upgrade to Premium
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            Access powerful features, priority visibility, and unlimited
            campaign slots—built for serious changemakers.
          </p>
        </div>
      </section>

      <main className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mx-auto w-full sm:w-[443px] py-6">
            <div className="relative">
              <div
                className="absolute left-1/2 top-0 -translate-x-1/2 rounded-2xl pointer-events-none w-full sm:w-[443px] sm:h-[450px]"
                aria-hidden="true"
                style={{
                  boxShadow: "0 20px 60px rgba(24,39,52,0.6)",
                  borderRadius: "18px",
                }}
              />

              <div className="relative z-10 bg-[#1E1E1E] border border-zinc-800 rounded-2xl px-4 py-6 sm:px-6 sm:py-8 w-full sm:w-[443px] sm:h-[450px] flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
                      Get Verified
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-[#0b2b4a] rounded-full">
                        <Image
                          src={"/layout/checkmark.svg"}
                          alt="checkmark"
                          width={20}
                          height={20}
                        />
                      </span>
                    </h2>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-3xl md:text-4xl font-extrabold text-white">
                        $30
                      </span>
                      <span className="text-sm text-slate-400 mt-1">
                        /annum
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 text-white">
                        ✓
                      </span>
                      <span>Establish trust with potential backers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 text-white">
                        ✓
                      </span>
                      <span>Increases campaign visibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 text-white">
                        ✓
                      </span>
                      <span>Demonstrates transparency and accountability.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 text-white">
                        ✓
                      </span>
                      <span>Grants access to exclusive features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 text-white">
                        ✓
                      </span>
                      <span>Attracts higher funding amounts</span>
                    </li>
                  </ul>
                  <div className="py-2">
                    <button
                      className="w-full bg-[#0b66ff] hover:bg-[#095be6] text-white rounded-full py-1 text-base font-semibold shadow-lg transition"
                      aria-label="Subscribe"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* subtle footer note aligned under the card */}
            <p className="mt-4 text-center text-sm text-slate-400">
              Cancel anytime. Payments handled securely.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
