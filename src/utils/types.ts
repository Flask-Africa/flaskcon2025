import { StaticImageData } from "next/image";

export type SpeakerIT = {
  image: StaticImageData;
  name: string;
  talk?: string;
};
