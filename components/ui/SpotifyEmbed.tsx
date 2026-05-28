interface SpotifyEmbedProps {
  url: string;
}

/**
 * Embeds a Spotify show or episode player.
 * Accepts any spotify URL like:
 *   https://open.spotify.com/show/4BJXIn0hC4uIsG38NxSiV1
 *   https://open.spotify.com/episode/{episodeId}
 * Converts it to the /embed/ variant and renders the iframe.
 */
export function SpotifyEmbed({ url }: SpotifyEmbedProps) {
  const embedUrl = url.includes("/embed/")
    ? url
    : url.replace("open.spotify.com/", "open.spotify.com/embed/");

  // Show widgets get a taller player (visible track list); episodes use compact height.
  const height = embedUrl.includes("/show/") ? 352 : 232;

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-zinc-200 dark:border-white/[0.08]">
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify player"
      />
    </div>
  );
}
