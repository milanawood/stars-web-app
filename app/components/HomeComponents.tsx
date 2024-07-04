import React from "react";
import Poster from "./Poster";
import ResponsiveImage from "./ResponsiveImage";
import HeroVideo from "./HeroVideo";
import { HomeComponentsProps } from "../types";

const componentsMap = {
  "home.poster": Poster,
  "responsive.image": ResponsiveImage,
  "home.gif": HeroVideo,
};

const HomeComponents: React.FC<HomeComponentsProps> = ({ components }) => {
  return (
    <div>
      {components.map((component, index) => {
        const Component = componentsMap[component._type];
        if (!Component) {
          return <div key={component._key}>Unknown component type: {component._type}</div>;
        }
        return <Component key={component._key} {...component} />;
      })}
    </div>
  );
};

export default HomeComponents;