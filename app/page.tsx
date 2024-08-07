'use client'
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import LoadableComponent from './components/LoadableComponent';


const OPTIONS: EmblaOptionsType = { 
  loop: true,
  skipSnaps: false,
};

const SLIDES = [
  { _type: "home.comingSoon", _key: "1" },
  { _type: "home.marqueeSlide", _key: "2" },
  { _type: "home.quest", _key: "3", doubleWide: true },
  { _type: "home.verticalSlide", _key: "4" },
  { _type: "home.burger", _key: "5", doubleWide: true },
  { _type: "home.verticalSlide", _key: "6" },
  { _type: "home.news", _key: "7" },
  { _type: "home.newsletter", _key: "8" },
  { _type: "home.verticalSlide", _key: "9" },
  { _type: "home.videoSection", _key: "10" },
  { _type: "home.manifest", _key: "11" },
];

const REPEATED_SLIDES = [...SLIDES, ...SLIDES.map(slide => ({ ...slide, _key: `${slide._key}-2` })), ...SLIDES.map(slide => ({ ...slide, _key: `${slide._key}-3` }))];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <LoadableComponent components={REPEATED_SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Home;
