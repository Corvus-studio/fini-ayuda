import React from 'react';
import VideoPlayer from './VideoPlayer';

const videos = [
    {
        id: 1,
        title: "TIENDA FINI",
        src: "/videos/Generando_video_de_tienda_FINI.mp4",
        poster: "/placeholder-1.jpg",
        color: 'pink' as const,
        featured: true
    },
    {
        id: 2,
        title: "Jungle World",
        src: "/videos/Generación_de_Video_Tienda_FINI.mp4",
        poster: "/placeholder-2.jpg",
        color: 'lime' as const
    },
    {
        id: 3,
        title: "Rainbow World",
        src: "/videos/Generación_de_Video_de_Tienda.mp4",
        poster: "/placeholder-3.jpg",
        color: 'multicolor' as const
    },
    {
        id: 4,
        title: "Cloud World",
        src: "/videos/Generación_de_Video_de_Tienda (1).mp4",
        poster: "/placeholder-3.jpg",
        color: 'cyan' as const
    }
];

export default function VideoGallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-4">
            {videos.map((video) => (
                <div
                    key={video.id}
                    className={`flex flex-col gap-4 group ${video.featured ? 'md:col-span-2 lg:col-span-3 mb-12' : ''} animate-fade-in-up`}
                    style={{ animationDelay: `${video.id * 150}ms` }}
                >
                    <div className={`transform transition-transform duration-300 group-active:scale-95 ${video.featured ? 'group-hover:scale-[1.02]' : 'group-hover:rotate-1 group-hover:scale-110 group-hover:rotate-3 group-hover:animate-wiggle'}`}>
                        <div className="relative rounded-lg overflow-hidden border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] group-hover:animate-pulse-border">
                            <VideoPlayer src={video.src} poster={video.poster} color={video.color} />
                        </div>
                    </div>
                    <div className="text-center relative">
                        <h3 className={`${video.featured ? 'text-5xl md:text-7xl' : 'text-3xl'} font-black tracking-tighter uppercase 
              ${video.color === 'cyan' ? 'text-fini-cyan' : ''}
              ${video.color === 'pink' ? 'text-fini-pink' : ''}
              ${video.color === 'lime' ? 'text-fini-lime' : ''}
              ${video.color === 'multicolor' ? 'text-transparent bg-clip-text bg-gradient-to-r from-fini-red via-fini-yellow to-fini-cyan' : ''}
              drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]
              stroke-black stroke-2
              animate-pop-in
            `}>
                            {video.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
