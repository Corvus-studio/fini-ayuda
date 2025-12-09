import React from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  color?: 'pink' | 'purple' | 'cyan' | 'yellow' | 'red' | 'lime' | 'orange' | 'multicolor';
}

export default function VideoPlayer({ src, poster, color = 'pink' }: VideoPlayerProps) {
  const colorClasses = {
    pink: 'border-fini-pink shadow-[8px_8px_0px_#FF0099]',
    purple: 'border-fini-purple shadow-[8px_8px_0px_#9D00FF]',
    cyan: 'border-fini-cyan shadow-[8px_8px_0px_#00FFFF]',
    yellow: 'border-fini-yellow shadow-[8px_8px_0px_#FFEA00]',
    red: 'border-fini-red shadow-[8px_8px_0px_#FF0000]',
    lime: 'border-fini-lime shadow-[8px_8px_0px_#CCFF00]',
    orange: 'border-fini-orange shadow-[8px_8px_0px_#FF5500]',
    multicolor: 'border-transparent bg-gradient-to-r from-fini-red via-fini-yellow to-fini-cyan p-1 shadow-[8px_8px_0px_rgba(0,0,0,1)]',
  };

  const isMulticolor = color === 'multicolor';

  return (
    <div className={`relative w-full aspect-video rounded-3xl overflow-hidden ${!isMulticolor ? 'border-4' : ''} ${colorClasses[color]} bg-black transition-all duration-300 hover:scale-[1.02]`}>
      <div className={`w-full h-full ${isMulticolor ? 'rounded-[20px] overflow-hidden' : ''}`}>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
