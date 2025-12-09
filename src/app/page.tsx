import VideoGallery from "@/components/VideoGallery";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-outfit)] overflow-x-hidden bg-fini-bg bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      {/* Header / Hero Section */}
      <header className="relative bg-fini-pink border-b-8 border-black text-white py-24 px-4 text-center overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-fini-yellow border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-full animate-bounce-slow"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-fini-cyan border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none rotate-12 translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-fini-lime border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-full animate-pulse"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] transform -rotate-2">
            <span className="text-white inline-block hover:scale-110 transition-transform duration-300 stroke-black stroke-2">NUEVA</span>
            <span className="text-fini-yellow inline-block hover:scale-110 transition-transform duration-300 ml-4 stroke-black stroke-2">TIENDA FINI</span>
          </h1>
          <p className="text-2xl md:text-4xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto bg-fini-purple p-6 border-4 border-black transform rotate-1 shadow-[8px_8px_0px_rgba(0,0,0,1)] uppercase">
            bienvenido al mundo FINI
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <span className="inline-block py-3 px-8 bg-fini-lime text-black font-black text-xl tracking-wider mb-8 uppercase border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transform -rotate-3 hover:rotate-0 transition-transform hover:scale-110 cursor-pointer">
            ✨ NUEVA EXPERIENCIA ✨
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-fini-purple mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase">
            ¡DESCUBRE LOS MUNDOS FINI!
          </h2>
          <p className="text-2xl text-black max-w-2xl mx-auto font-bold bg-white border-4 border-black p-4 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            Viaja a través de nuestras galaxias de sabor. ¡Cada video te llevará a una nueva dimensión de diversión y dulzura! 🚀✨
          </p>
        </div>

        <VideoGallery />
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-fini-pink/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-fini-purple font-bold text-xl mb-2">Fini Golosinas</p>
          <p className="text-gray-500">© {new Date().getFullYear()} Todos los derechos reservados. Hecho con 🍭</p>
        </div>
      </footer>
    </div>
  );
}
