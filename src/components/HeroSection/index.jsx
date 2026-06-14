import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Search } from "lucide-react";
import { useAudience } from "@/lib/AudienceContext";

const communities = [
  "Downtown Dubai",
  "Dubai Marina",
  "Palm Jumeirah",
  "Business Bay",
  "Dubai Hills Estate",
];

const HERO_CONTENT = {
  investor: {
    headline: ["Own a Piece of", "The World's Most", "Investable City"],
    sub: "Tax-free returns. Golden Visa eligibility. World-class infrastructure.",
    tabs: [
      { id: "buy", label: "Buy" },
      { id: "off-plan", label: "Off-Plan" },
      { id: "rent", label: "Rent" },
    ],
    searchPlaceholder: "Search by community, area or property type...",
  },
  seller: {
    headline: ["Get the Best Price", "For Your", "Dubai Property"],
    sub: "1,200+ active buyers. 145,000 global RE/MAX agents. Zero guesswork.",
    tabs: null,
    searchPlaceholder: null,
  },
  agent: {
    headline: ["Build the Real Estate", "Career You", "Deserve"],
    sub: "Global brand. Proven systems. Competitive splits. Start selling from day one.",
    tabs: null,
    searchPlaceholder: null,
  },
};

const DEFAULT = HERO_CONTENT.investor;
const YOUTUBE_VIDEO_ID = "xOqgW9LZR44";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
};

function AnimatedCounter({ value, duration = 2, delay = 0 }) {
  const [displayValue, setDisplayValue] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/(\d+)/g);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const start = 0;
    const end = parseInt(match[match.length - 1], 10);
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * (end - start) + start);

      if (value.includes("–")) {
        const lowerBound = Math.min(currentCount, parseInt(match[0], 10));
        setDisplayValue(`${lowerBound}–${currentCount}%`);
      } else {
        setDisplayValue(value.replace(match[match.length - 1], currentCount));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [value, isInView, duration, delay]);

  return (
    <span
      ref={ref}
      className="relative inline-block whitespace-nowrap text-amber-500"
    >
      <span className="invisible block" aria-hidden="true">
        {value}
      </span>
      <span className="absolute left-0 top-0 tabular-nums w-full text-left">
        {displayValue || value}
      </span>
    </span>
  );
}

export default function HeroSection() {
  const navigate = useNavigate();
  const { audience } = useAudience();
  const [activeTab, setActiveTab] = useState("buy");
  const [query, setQuery] = useState("");

  const content = HERO_CONTENT[audience] || DEFAULT;

  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`,
      );
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  useEffect(() => {
    let mounted = true;

    const createPlayer = () => {
      if (!iframeRef.current || !window.YT) return;
      try {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 0,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            modestbranding: 1,
            rel: 0,
          },
          events: {
            onReady: (e) => {
              if (!mounted) return;
              setPlayerReady(true);
              try {
                e.target.playVideo();
              } catch (e) {}
            },
            onStateChange: (e) => {
              if (!mounted) return;
              setIsPlaying(e.data === window.YT.PlayerState.PLAYING);
            },
          },
        });
      } catch (err) {}
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = () => {
        if (mounted) createPlayer();
      };
    }

    return () => {
      mounted = false;
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
      }
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("community", query);
    const tabMap = {
      buy: "ready-residential",
      rent: "rental-residential",
      "off-plan": "off-plan",
    };
    params.set("tab", tabMap[activeTab] || "ready-residential");
    navigate(`/properties?${params.toString()}`);
  };

  const handleSellerCTA = () =>
    document
      .getElementById("seller-valuation")
      ?.scrollIntoView({ behavior: "smooth" });
  const handleAgentCTA = () =>
    document
      .getElementById("agent-apply")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      style={{ height: "calc(var(--vh, 1vh) * 96)" }}
      className="bg-white p-3 sm:p-4 lg:p-5 flex flex-col box-border overflow-hidden"
    >
      <section className="relative flex-1 rounded-2xl overflow-hidden flex flex-col justify-center min-h-0 bg-zinc-900">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover scale-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="relative z-10 px-6 sm:px-12 lg:px-16 w-full max-w-[90rem] mx-auto py-4 md:py-8 my-auto overflow-y-auto lg:overflow-visible max-h-full">
          {/* ADJUSTED: Shifted split to lg:grid-cols-2 (6-6 split) to make columns structurally identical */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left Column */}
            <div className="w-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={audience || "default"}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
                >
                  <motion.h1
                    variants={itemVariants}
                    className="font-display font-bold leading-[1.1] mb-5 tracking-tight drop-shadow-md text-3xl sm:text-5xl xl:text-6xl"
                  >
                    <span className="block text-white">
                      {content.headline[0]}
                    </span>
                    <span className="block text-white">
                      {content.headline[1]}
                    </span>
                    <span className="block text-amber-500 font-medium">
                      {content.headline[2]}
                    </span>
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="text-white/80 font-body text-xs sm:text-base leading-relaxed mb-6 max-w-md drop-shadow-sm"
                  >
                    {content.sub}
                  </motion.p>

                  {content.tabs && (
                    <motion.div
                      variants={itemVariants}
                      className="w-full max-w-lg"
                    >
                      <div className="flex gap-1 mb-0">
                        {content.tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 text-[10px] sm:text-[11px] font-heading font-bold tracking-wider uppercase rounded-t-md transition-all ${
                              activeTab === tab.id
                                ? "bg-white text-black"
                                : "bg-black/50 text-white hover:bg-black/70 backdrop-blur-md border border-white/10"
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                      <form
                        onSubmit={handleSearch}
                        className="bg-white/95 backdrop-blur-sm rounded-b-xl rounded-tr-xl shadow-2xl p-1.5 flex items-center gap-2"
                      >
                        <div className="flex-1 flex items-center gap-2 px-1.5">
                          <Search className="w-4 h-4 text-gray-400 shrink-0" />
                          <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={content.searchPlaceholder}
                            className="w-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none font-body py-1"
                          />
                        </div>
                        <button
                          type="submit"
                          className="bg-amber-500 hover:bg-amber-600 text-white font-heading font-bold text-[10px] sm:text-[11px] tracking-wider uppercase px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors shrink-0 shadow-md"
                        >
                          Search
                        </button>
                      </form>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                        <span className="text-white/60 text-[10px] sm:text-[11px] font-body font-medium">
                          Popular:
                        </span>
                        {communities.map((c) => {
                          const tabMap = {
                            buy: "ready-residential",
                            rent: "rental-residential",
                            "off-plan": "off-plan",
                          };
                          return (
                            <button
                              key={c}
                              onClick={() =>
                                navigate(
                                  `/properties?tab=${tabMap[activeTab] || "ready-residential"}&community=${c}`,
                                )
                              }
                              className="text-[10px] sm:text-[11px] text-white/80 hover:text-amber-400 transition-colors font-body hover:underline underline-offset-2 drop-shadow-sm font-medium"
                            >
                              {c}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {audience === "seller" && (
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-col sm:flex-row gap-2.5"
                    >
                      <button
                        onClick={handleSellerCTA}
                        className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white font-heading font-bold text-xs sm:text-sm px-5 py-3.5 rounded-lg hover:bg-amber-600 transition-all shadow-lg"
                      >
                        Get Free Valuation{" "}
                        <span className="text-xs sm:text-sm">→</span>
                      </button>
                      <button
                        onClick={() => navigate("/landlords")}
                        className="inline-flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md text-white border border-white/20 font-heading font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-lg hover:bg-black/60 transition-all"
                      >
                        How It Works
                      </button>
                    </motion.div>
                  )}

                  {audience === "agent" && (
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-col sm:flex-row gap-2.5"
                    >
                      <button
                        onClick={handleAgentCTA}
                        className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white font-heading font-bold text-xs sm:text-sm px-5 py-3.5 rounded-lg hover:bg-amber-600 transition-all shadow-lg"
                      >
                        Apply to Join{" "}
                        <span className="text-xs sm:text-sm">→</span>
                      </button>
                      <button
                        onClick={() => navigate("/join")}
                        className="inline-flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md text-white border border-white/20 font-heading font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-lg hover:bg-black/60 transition-all"
                      >
                        View Partner Tiers
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Video Panel */}
            {/* ADJUSTED: Wrapped video layout in max-w-[88%] to cleanly decrease overall player frame sizing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
              className="relative hidden lg:block w-full max-w-[95%] mx-auto"
            >
              <div className="relative block rounded-2xl p-[2px] bg-gradient-to-br from-amber-500/20 via-white/5 to-transparent shadow-2xl overflow-hidden">
                <div
                  style={{ paddingBottom: "56.25%" }}
                  className="relative rounded-2xl overflow-hidden bg-zinc-950 shadow-inner"
                >
                  <div
                    id="hero-youtube-player"
                    ref={iframeRef}
                    className="absolute top-0 left-0 w-full h-full grayscale-[15%] opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS ZONE ── */}
      <div className="bg-transparent shrink-0 pt-3 lg:pt-5 px-2 lg:px-6">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 items-start divide-y-0 md:divide-x divide-black/5">
            {[
              { label: "Total Dubai real estate transactions in 2025", value: "AED 917B+" },
              { label: "Average tax-free rental yield in Dubai", value: "6-9%" },
              { label: "Capital gains tax on UAE property", value: "0%" },
              { label: "RE/MAX agents worldwide", value: "150,000+" },
            ].map((s, idx) => (
              <div
                key={s.label}
                className={`flex flex-col justify-between h-full ${idx > 0 ? "md:pl-6" : ""}`}
              >
                <span className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight block overflow-visible mb-0.5 text-amber-500">
                  {s.value}
                </span>
                <span className="text-gray-500 font-body text-[11px] sm:text-xs leading-tight font-medium block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}