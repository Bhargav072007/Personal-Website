const AFFILIATIONS = [
  { name: "The Arogí Foundation", logo: "/assets/base44/7a114f6b7_Arogi.png" },
  { name: "AviationAI", logo: "/assets/base44/5d8e8a4ad_AviationAI.png" },
  { name: "CloudAngles", logo: "/assets/base44/b434a1150_cloudangles-11.png" },
  { name: "Learn With Bhargav", logo: "/assets/base44/c292545a0_LearnWithBhargav.png" },
  { name: "Omega Chi Sigma", logo: "/assets/base44/f15f981d2_OmegaChiSigma.png", logoDark: "/assets/base44/OmegaChiSigma-DarkMode.png" },
  { name: "Penn State", logo: "/assets/base44/b0e3ee36b_Penn-State-University-Logo-2015-present.png", logoDark: "/assets/base44/PennState-DarkMode.png" },
  { name: "SmartEvent", logo: "/assets/base44/fc281c144_SmartEVent.png" },
];
const LOOP = [...AFFILIATIONS, ...AFFILIATIONS];
const ALL = [...LOOP, ...LOOP];

export default function AffiliationsStrip() {
  return (
    <section className="affiliations-strip py-12 overflow-hidden border-y border-border">
      <p className="text-center text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
        Affiliations & Ventures
      </p>
      <div className="relative">
        <div
          className="flex gap-10 sm:gap-16 lg:gap-24 will-change-transform"
          style={{
            width: "max-content",
            animation: "scroll-x 36s linear infinite",
          }}
        >
          {ALL.map((aff, i) => (
            <div
              key={i}
              className="flex w-40 sm:w-48 md:w-56 items-center justify-center whitespace-nowrap cursor-default select-none hover:scale-105 transition-transform duration-200"
            >
              {aff.logoDark ? (
                <>
                  <img
                    src={aff.logo}
                    alt={aff.name}
                    className="h-20 sm:h-24 md:h-32 w-full object-contain dark:hidden"
                  />
                  <img
                    src={aff.logoDark}
                    alt={aff.name}
                    className="hidden h-20 sm:h-24 md:h-32 w-full object-contain dark:block"
                  />
                </>
              ) : (
                <img src={aff.logo} alt={aff.name} className="h-20 sm:h-24 md:h-32 w-full object-contain" />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
