import { IconName } from "@/utils/utils";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "@sanity/types";

// Reusable base types
export type ButtonType = { text: string; url: string }
export type Slug = { current: string };
export type ImageUrl = { full: string; blur: string };
export type SanityImage = SanityImageSource;
export type PortableText = PortableTextBlock[];

export interface BaseContent {
  _id: string;
  title: string;
  slug: Slug;
}

export interface SectionBase {
  title: string;
  heading: string;
  subheading?: string;
  description?: string;
  descriptionBlock?: PortableText;
}

export interface PageBase {
  title: string;
  heading: string;
  description?: string;
}

// Enums
export type GameReleasePlatform = "playstore" | "appstore" | "itch";

// Game types
export interface GameSection extends BaseContent {
  thumbnail: SanityImage;
  platform: string[];
}

export interface Game extends BaseContent {
  thumbnail: SanityImage;
  platform: string;
  releasedOn: GameReleasePlatform[];
  playstoreLink?: string;
  appstoreLink?: string;
  itchioLink?: string;
  description: PortableText;
  screenshots: SanityImage[];
}

// Blog types
export interface BlogSection extends BaseContent {
  subtitle: string;
  image: SanityImage;
}

export interface Blog extends BlogSection {
  body: PortableText;
  publishedAt: Date;
}

// Sevice type
export interface Service extends BaseContent {
  icon: SanityImage;
  description: string;
}

// Team type
export interface Team extends BaseContent {
  name: string;
  position: string;
  photo: SanityImage;
  instagramUrl: string;
}

// Contact type
export interface Contact extends BaseContent {
  label: string;
  description: string;
  linkText: string;
  url: string;
}
