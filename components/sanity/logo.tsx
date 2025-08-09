import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={"/logo-no-bg.svg"}
      alt={"Eternal Clover Studio"}
      width={0}
      height={0}
      sizes="100dvw"
      className="w-full h-full"
    />
  );
}
