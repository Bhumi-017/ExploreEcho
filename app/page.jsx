import Image from "next/image";
import home_bird from '@/public/img/pic.png'

export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
        <p className="special-word text-s">Embrace every journey, cherish every wingbeat.</p>
        <h1 className="pb-5">
         Discover Nature's <span className="special-word">Hidden</span><br /> Treasures
        </h1>

        <p>Embark on a journey through vibrant landscapes, bustling cities, and hidden gems with our new travel blog website. Discover captivating tales, insider tips, and breathtaking photos that will inspire your next adventure. Whether you're a seasoned globetrotter or a curious explorer, join us as we explore the world's wonders and unravel the beauty of travel. Welcome aboard!</p>
      </div>

      <div className="hidden md:block basis-2/3">
        <Image 
          src={home_bird}
          alt="Home bird"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
}
