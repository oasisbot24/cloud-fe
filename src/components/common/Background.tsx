import Image from "next/image";

interface BackgroundLayoutProps {
  children: React.ReactNode;
}


export default function Background({ children }: BackgroundLayoutProps) {
    return (
        <main className="w-full h-screen ">
          <div className="flex flex-col bg-[#F3F3F3]">
            {children}
          </div>
          <div className="fixed bottom-0 w-full bg-[#F3F3F3]">
            <Image
              src="/main/hero-copy-bg.png"
              alt="hero-copy-bg"
              width={0}
              height={0}
              sizes="100vw"
              style={{width:'100%', height:'30%'}}
            />
          </div>
        </main>
    )

}