"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./youtube-embed.module.css";

// Click-to-play facade. YouTube's player script (~700 KB) loads only when
// someone presses play, not on page load.
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.frame}>
      {playing ? (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1`}
          title={title}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className={styles.poster}
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(max-width: 932px) 100vw, 900px"
          />
          <svg className={styles.play} width="68" height="48" viewBox="0 0 68 48" aria-hidden="true">
            <path
              d="M66.5 7.7c-.8-2.9-3-5.2-5.9-6C55.3.2 34 .2 34 .2S12.7.2 7.4 1.6c-2.9.8-5.1 3.1-5.9 6C.1 13 .1 24 .1 24s0 11 1.4 16.3c.8 2.9 3 5.2 5.9 6C12.7 47.8 34 47.8 34 47.8s21.3 0 26.6-1.5c2.9-.8 5.1-3.1 5.9-6C67.9 35 67.9 24 67.9 24s0-11-1.4-16.3z"
              fill="#f00"
            />
            <path d="M45 24 27 14v20z" fill="#fff" />
          </svg>
        </button>
      )}
    </div>
  );
}
