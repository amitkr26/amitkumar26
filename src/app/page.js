import Image from "next/image";
import bg from "../../public/background/home-background.png";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen flex flex-col items-center justify-center">
        <Navigation />
        <div className="text-center mt-20">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-accent mb-4">
            Amit Kumar
          </h1>
          <p className="font-light text-foreground text-lg sm:text-xl">
            Semiconductor & Electronics Engineer
          </p>
          <p className="font-light text-muted text-sm mt-4 max-w-2xl mx-auto px-4">
            M.Sc. Electronics | Thin Film Technology | Spintronics | VLSI | Embedded Systems
          </p>
        </div>
      </div>
    </main>
  );
}
