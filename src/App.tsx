import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AnimePreview } from "./components/AnimePreview";
import { AnimeTitleText } from "./components/AnimeTitleText";
import { useMobileWarning } from "./hooks/useMobileWarning";
import { useMousePosition } from "./hooks/useMousePosition";
import { ANIME_TITLES } from "./lib/constant";
import { AnimeSceneEntry, data } from "./lib/data";
import "./App.css";
import { Toaster } from "sonner";

const Page = () => {
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const mousePosition = useMousePosition();
  useMobileWarning();

  return (
    <div className="relative flex w-screen flex-col items-center justify-center">
      <Toaster />
      <div className="flex flex-col items-center justify-center gap-4 text-nowrap text-5xl font-black uppercase text-zinc-300 *:cursor-default md:text-7xl">
        {ANIME_TITLES.map((title) => (
          <AnimeTitleText
            key={title.id}
            title={title}
            onHover={setHoveredText}
            onHoverEnd={() => setHoveredText(null)}
          />
        ))}
      </div>

      <AnimatePresence>
        {hoveredText &&
          data[hoveredText].map((item: AnimeSceneEntry, index: number) => (
            <AnimePreview
              key={index}
              hoveredText={hoveredText}
              item={item}
              index={index}
              mousePosition={mousePosition}
            />
          ))}
      </AnimatePresence>
      
      <a 
        href="https://github.com/Santiagorodriguezgalviz" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 flex items-center gap-2 rounded-full bg-zinc-800/80 px-5 py-3 text-sm font-medium text-zinc-200 shadow-lg backdrop-blur-sm transition-all hover:bg-zinc-700/90 hover:scale-105 hover:text-white border border-zinc-700/50 hover:border-zinc-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16" className="animate-pulse">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <span className="relative">
          Creado por <span className="font-bold text-white">dev Santiago</span>
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-400 to-transparent"></span>
        </span>
      </a>
    </div>
  );
};

export default Page;
