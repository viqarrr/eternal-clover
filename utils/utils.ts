import { urlFor } from "@/sanity/lib/image";
import { ImageUrl } from "@/types/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const scrollToElement = (id: string) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const formatImage = (img: SanityImageSource, width: number, height:number): ImageUrl => {
  return {
    full: urlFor(img).width(width).height(height).dpr(2).quality(80).url(),
    blur: urlFor(img).height(height).quality(20).url(),
  };
};