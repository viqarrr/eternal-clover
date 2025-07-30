"use client"

import { GooglePlayButton } from "react-mobile-app-button";

const Game = () => {
  return (
    <>
      <div className="relative w-full h-svh rounded-2xl overflow-hidden">
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
          alt="Game banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_top,theme(colors.background),rgba(0,0,0,0))]"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center px-6 text-white">
          <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">Game Title</h1>
          <div className="mt-8 flex gap-2">
            <GooglePlayButton url="#" theme="dark" height={60} width={200}/>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="prose dark:prose-invert mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold">Game Overview</h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            autem ullam soluta delectus dolorem quaerat! Nemo distinctio, velit
            a reiciendis maiores quas voluptates, deserunt natus, dolores
            consectetur alias dolorum provident. Dolore repudiandae praesentium
            consequatur, dignissimos magni, fuga quia soluta officiis, illo
            eligendi ipsam asperiores eveniet autem a hic pariatur provident?
            Magnam totam id perferendis voluptatibus eum nemo consequatur non
            animi impedit deserunt iste at nulla provident, quibusdam,
            consectetur, explicabo quae? Ex impedit ipsum sequi molestias libero
            saepe rerum nesciunt magni quae incidunt reprehenderit nam delectus
            laboriosam facere mollitia, possimus beatae similique doloribus
            nobis a. Quos temporibus animi totam nihil dolorem!
          </p>
          <p className="text-muted-foreground mt-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            autem ullam soluta delectus dolorem quaerat! Nemo distinctio, velit
            a reiciendis maiores quas voluptates, deserunt natus, dolores
            consectetur alias dolorum provident. Dolore repudiandae praesentium
            consequatur, dignissimos magni, fuga quia soluta officiis, illo
            eligendi ipsam asperiores eveniet autem a hic pariatur provident?
            Magnam totam id perferendis voluptatibus eum nemo consequatur non
            animi impedit deserunt iste at nulla provident, quibusdam,
            consectetur, explicabo quae? Ex impedit ipsum sequi molestias libero
            saepe rerum nesciunt magni quae incidunt reprehenderit nam delectus
            laboriosam facere mollitia, possimus beatae similique doloribus
            nobis a. Quos temporibus animi totam nihil dolorem!
          </p>
          <p className="text-muted-foreground mt-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            autem ullam soluta delectus dolorem quaerat! Nemo distinctio, velit
            a reiciendis maiores quas voluptates, deserunt natus, dolores
            consectetur alias dolorum provident. Dolore repudiandae praesentium
            consequatur, dignissimos magni, fuga quia soluta officiis, illo
            eligendi ipsam asperiores eveniet autem a hic pariatur provident?
            Magnam totam id perferendis voluptatibus eum nemo consequatur non
            animi impedit deserunt iste at nulla provident, quibusdam,
            consectetur, explicabo quae? Ex impedit ipsum sequi molestias libero
            saepe rerum nesciunt magni quae incidunt reprehenderit nam delectus
            laboriosam facere mollitia, possimus beatae similique doloribus
            nobis a. Quos temporibus animi totam nihil dolorem!
          </p>
        </div>
      </div>
    </>
  );
};

export default Game;
