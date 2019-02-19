import React from "react";
import BackgroudImage from "gatsby-background-image";
export default function BackgroundSection({
  img,
  styleClass,
  title,
  children
}) {
  return (
    <BackgroudImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroudImage>
  );
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background"
};
