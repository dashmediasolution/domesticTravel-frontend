import { Button } from "./ui/button";
import Image from "next/image";

export default function Memories() {
    return (
        <section className="flex w-full justify-center px-2 py-4 sm:px-0 sm:py-6">
            <div
                className="
                    relative
                    flex
                    min-h-[520px]
                    w-[94%]
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    bg-cover
                    bg-center
                    bg-no-repeat
                    sm:min-h-[500px]
                    sm:rounded-3xl
                    lg:h-[446px]
                    lg:min-h-0
                    lg:flex-row
                "
                style={{
                    backgroundImage: "url('/images/memoryBackground.png')",
                }}
            >
                {/* Dark Overlay */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-black/75
                        via-black/30
                        to-black/5
                        lg:from-black/75
                        lg:via-black/25
                        lg:to-transparent
                    "
                />

                {/* Content */}
                <div
                    className="
                        relative
                        z-10
                        flex
                        w-full
                        flex-col
                        items-start
                        px-6
                        pb-4
                        pt-10
                        text-white
                        sm:px-10
                        sm:pt-12
                        lg:w-[50%]
                        lg:justify-center
                        lg:px-0
                        lg:py-0
                        lg:pl-12
                        xl:pl-20
                    "
                >
                    <p
                        className="
                            font-mono
                            text-[2.5rem]
                            font-bold
                            leading-none
                            sm:text-[3.5rem]
                            lg:text-[4rem]
                        "
                    >
                        Memories for Life
                    </p>

                    <p
                        className="
                            mt-4
                            max-w-[420px]
                            font-mono
                            text-lg
                            leading-7
                            sm:text-2xl
                            sm:leading-9
                            lg:mt-5
                            lg:text-[2rem]
                            lg:leading-10
                        "
                    >
                        Capture beautiful moments and cherish them forever
                    </p>

                    {/* <Button
                        className="
                            mt-5
                            max-w-fit
                            rounded-full
                            bg-white
                            px-5
                            py-5
                            text-sm
                            text-primary
                            hover:bg-primary
                            hover:text-white
                            sm:mt-6
                            sm:px-6
                            sm:py-6
                            sm:text-base
                        "
                    >
                        Explore Gallery
                    </Button> */}
                </div>

                {/* Image */}
                <div
                    className="
                        relative
                        z-10
                        h-[240px]
                        w-full
                        shrink-0
                        sm:h-[280px]
                        lg:h-full
                        lg:w-[50%]
                    "
                >
                    <Image
                        src="/images/memories.png"
                        alt="Wander India travel map"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        className="
                            cursor-pointer
                            object-contain
                            px-4
                            sm:px-8
                            lg:px-0
                        "
                    />
                </div>
            </div>
        </section>
    );
}