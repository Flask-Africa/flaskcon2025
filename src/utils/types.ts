import { StaticImageData } from "next/image";

export type Talk = {
  image: StaticImageData;
  name: string;
  talk: string;
};
