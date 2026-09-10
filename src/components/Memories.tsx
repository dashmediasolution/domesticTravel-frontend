import { Button } from "./ui/button"
import Image from "next/image"

export default function Memories() {
    return (
       <section className="w-full h-[446px] flex justify-center items-center">
  <div
    className="
      relative
      overflow-hidden
      h-[446px]
      w-[94%]
      flex
      bg-cover
      bg-center
      bg-no-repeat
      rounded-3xl
    "
    style={{
      backgroundImage: "url('/images/memoryBackground.png')",
    }}
  >
                <div className="absolute inset-y-0 left-0 w-[55%] bg-linear-to-r from-black/75 via-black/25 to-transparent" />

                <div className="relative z-10 flex gap-4 flex-col font-mono text-white w-[50%] m-20">
                    <p className="text-[4rem] font-bold">
                        Memories for Life
                    </p>

                    <p className="text-[2rem] leading-10">
                        Capture beautiful moments and cherish them forever
                    </p>

                    <Button className="bg-white text-lg mt-2 text-primary max-w-fit rounded-full hover:text-white px-5 py-6">
                        Explore Gallery
                    </Button>
                </div>
                <div className="relative z-10 h-100 w-[50%] flex justify-center items-center">
                    <Image
                        src="/images/memories.png"
                        alt="Wander India travel map"
                        fill
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                        className="object-contain cursor-pointer"
                    />
                </div>
            </div>
        </section>
    )
}