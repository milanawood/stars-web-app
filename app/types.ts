
export interface ImageAlt {
    url: string;
    _type: string;
    _key: string | null;
    alt: string;
    caption: string | null;
    lqip: string | null;
    dimensions: string | null;
  }
  
  export interface HeroVideo {
    index: number;
    image: ImageAlt;
    mobileImage: ImageAlt;
    _key: string;
    _type: string;
    desktopVideo: string;
    mobileVideo: string;
  }
  
  export interface Poster {
    _key: string;
    _type: string;
    backgroundColor: string;
    image: ImageAlt;
    doubleWide: boolean | null;
    footerText: string | null;
    stickers: {
      items: Sticker[];
    };
  }
  
  export interface Sticker {
    _key: string;
    image: ImageAlt;
    animation: string | null;
    editMode: boolean;
    breakpoints: Breakpoint[];
  }
  
  export interface Breakpoint {
    _type: string;
    width: string;
    right: string;
    _key: string;
    top: string;
    media?: string;
  }
  
  export interface ResponsiveImageProps {
    imgProps: {
      imgClassName: string;
    };
    alt: string;
    className: string;
    sources: Source[];
    src: {
      url: string;
      w: number;
    };
    lqip: string;
    _key: string;
    _type: string;
  }
  
  export interface Source {
    media: string;
    url: string;
  }
  
  export interface HomeComponentsProps {
    components: (Poster | ResponsiveImageProps | HeroVideo)[];
  }
  