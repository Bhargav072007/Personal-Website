const AFFILIATIONS = [
  { name: "The Arogí Foundation", logo: "/assets/base44/7a114f6b7_Arogi.png" },
  { name: "AviationAI", logo: "/assets/base44/5d8e8a4ad_AviationAI.png" },
  { name: "CloudAngles", logo: "/assets/base44/b434a1150_cloudangles-11.png" },
  { name: "Learn With Bhargav", logo: "/assets/base44/c292545a0_LearnWithBhargav.png" },
  { name: "Omega Chi Sigma", logo: "/assets/base44/f15f981d2_OmegaChiSigma.png" },
  { name: "Penn State", logo: "/assets/base44/b0e3ee36b_Penn-State-University-Logo-2015-present.png" },
  { name: "SmartEvent", logo: "/assets/base44/fc281c144_SmartEVent.png" },
];
const ALL = [...AFFILIATIONS, ...AFFILIATIONS];

export default function AffiliationsStrip() {
  return (
    <section className="py-12 overflow-hidden border-y border-border bg-muted">
      <p className="text-center text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
        Affiliations & Ventures
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div
          className="flex gap-24 animate-scroll"
          style={{
            width: "max-content",
            animation: "scroll-x 28s linear infinite",
          }}
        >
          {ALL.map((aff, i) => (
            <div
              key={i}
              className="flex items-center whitespace-nowrap cursor-default select-none hover:scale-105 transition-transform duration-200"
            >
              <img src={aff.logo} alt={aff.name} className="h-32 w-auto max-w-[320px] object-contain" />
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