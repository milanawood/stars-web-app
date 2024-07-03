const Hero = () => {
    return (
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video className="min-w-full min-h-full absolute object-cover" src="./images/promo-video-1.mp4" autoPlay muted loop></video>
        </div>
        <div className="video-content space-y-2">
          <h1 className="font-light text-6xl">Full Hero Video</h1>
          <h3 className="font-light text-3xl">with TailwindCSS</h3>
        </div>
      </section>
    );
  };
  
  export default Hero;