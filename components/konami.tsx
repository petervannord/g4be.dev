"use client";

import { useEffect, useState } from "react";

export function KonamiEasterEgg() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sequence = [
      "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
      "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
      "b","a"
    ];
    let position = 0;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === sequence[position]) {
        position++;
        if (position === sequence.length) {
          setActive(true);
          setTimeout(() => setActive(false), 5000); // auto reset
          position = 0;
        }
      } else {
        position = 0;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return active ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <h1
        className="text-green-400 text-4xl md:text-6xl animate-bounce"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        🔥 SECRET MODE ACTIVATED 🔥
      </h1>
    </div>
  ) : null;
}
