'use client'
import React, { useEffect, useState, Fragment, ComponentType, useRef } from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import EmblaCarousel from './carousel/EmblaCarousel';
import Loader from './Loader';

interface ComponentProps {
  _type: string;
  _key: string;
  doubleWide?: boolean;
  marqueeSize?: string;
}

interface LoadableComponentProps {
  components: ComponentProps[];
  options?: any;
}

const loadableComponents: { [key: string]: ComponentType<any> } = {
  "home.comingSoon": dynamic(() => import('./carousel/carousel-slides/ComingSoon'), { loading: () => <Loader /> }),
  "home.marqueeSlide": dynamic(() => import('./carousel/carousel-slides/image-marquee-slide/MarqueeSlide'), { loading: () => <Loader /> }),
  "home.quest": dynamic(() => import('./carousel/Quest'), { loading: () => <Loader /> }),
  "home.verticalSlide": dynamic(() => import('./carousel/carousel-slides/vertical-marquee/VerticalSlide'), { loading: () => <Loader /> }),
  "home.burger": dynamic(() => import('./carousel/Burger'), { loading: () => <Loader /> }),
  "home.news": dynamic(() => import('./carousel/carousel-slides/News'), { loading: () => <Loader /> }),
  "home.newsletter": dynamic(() => import('./carousel/Newsletter'), { loading: () => <Loader /> }),
  "home.videoSection": dynamic(() => import('./carousel/carousel-slides/VideoSection'), { loading: () => <Loader /> }),
  "home.manifest": dynamic(() => import('./carousel/carousel-slides/Manifest'), { loading: () => <Loader /> }),
};

const LoadableComponent: React.FC<LoadableComponentProps> = ({ components, options }) => {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      const vh = 0.01 * window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--calc-height', `${vh - 60}px`);
      setHeight(`${vh}`);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('orientationchange', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('orientationchange', updateHeight);
    };
  }, []);

  const slides = components.map(component => ({
    content: React.createElement(loadableComponents[component._type]),
    className: classNames(
      {
        "w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]": component._type === "home.comingSoon" || component._type === "home.news" || component._type === "home.manifest",
        "w-[200vw] 800:w-auto 800:aspect-[calc(1805/1124)] relative": (component._type === "home.quest" || component._type === "home.burger") && component.doubleWide,
        "w-[100vw] 800:w-auto 800:aspect-[calc(1920/1080)] relative": component._type === "home.videoSection",
        "min-w-[100vw] w-screen 800:min-w-[560px] 1000:max-w-[700px]": component._type === "home.newsletter",
        "w-[76px]": component._type === "home.verticalSlide"
      }
    )
  }));

  return (
    <EmblaCarousel slides={slides} options={options} />
  );
};

export default LoadableComponent;
