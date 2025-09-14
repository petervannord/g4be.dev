"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [blocks, setBlocks] = useState<{ left: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random falling blocks for background
    const newBlocks = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100, // position left %
      delay: Math.random() * 5,  // stagger animations
    }));
    setBlocks(newBlocks);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-gray-200 text-center overflow-hidden p-6">
      {/* Falling pixel blocks */}
      {blocks.map((block, i) => (
        <div
          key={i}
          className="absolute top-[-50px] w-6 h-6 bg-green-400 opacity-70 animate-fall"
          style={{
            left: `${block.left}%`,
            animationDelay: `${block.delay}s`,
          }}
        />
      ))}

      {/* Title */}
      <h1
        className="text-red-500 text-4xl md:text-6xl mb-6 drop-shadow-[2px_2px_0_#000]"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        404: You’ve escaped!
      </h1>

      {/* Subtitle */}
      <p
        className="text-lg md:text-xl mb-10"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        Looks like this page took a coffee break ☕ <br /> Don’t worry, you can
        go back safely.
      </p>

      {/* Retry Button */}
      <Link
        href="/"
        className="bg-green-400 border-4 border-black px-6 py-4 text-black shadow-[4px_4px_0_#000] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        ▶ Continue
      </Link>

      {/* Styling for font + animations */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

        @keyframes fall {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        .animate-fall {
          animation: fall 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
