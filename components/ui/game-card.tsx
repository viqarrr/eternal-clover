import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, Heart } from "lucide-react";
import Link from "next/link";

interface GameCardProps {
  url: string,
}

const GameCard = ({ url }: GameCardProps) => {
  return (
    <>
      <div className="w-[500px] relative mt-4 h-[300px] overflow-hidden group mx-auto dark:bg-black  bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col">
        <div className="w-full h-full ">
          <Image
            src={
              "https://images.unsplash.com/photo-1583071299210-c6c113f4ac91?q=80&w=800&auto=format&fit=crop"
            }
            alt="shoes"
            width={600}
            height={600}
            className="h-full w-full  scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
          />
        </div>
        <article className="p-8 w-full h-full overflow-hidden z-10  absolute top-0 flex flex-col justify-end rounded-md bg-primary opacity-0 group-hover:opacity-100  transition-all duration-300">
          <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2">
            <h1 className="md:text-2xl font-semibold">Game Name</h1>
            <p className="sm:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              consectetur ducimus vel nemo deserunt possimus inventore ipsum
              nostrum. Sapiente, facilis?
            </p>
            <Link href={url}>
              <button className="p-2 flex items-center rounded-md text-white bg-secondary">
                Learn More <ChevronRight className="size-4" />
              </button>
            </Link>
          </div>
        </article>
        <article className="p-2 w-full h-[20%] flex flex-col justify-end  overflow-hidden  absolute bottom-0 rounded-b-md bg-gradient-to-t from-primary  opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300">
          <h1 className="md:text-2xl font-semibold">Game Name</h1>
          <p className="sm:text-base text-sm">Android</p>
        </article>
      </div>
    </>
  );
};

export default GameCard;
