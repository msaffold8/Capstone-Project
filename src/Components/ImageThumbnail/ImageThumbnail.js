// Full size or Thumnail Image

import React from "react";
import "./ImageThumbnail.scss";

export const ImageThumbnail = (props) => {
  return (
    <div
      className={
        props.isThumbnail ? "ImageThumbnail--thumbnail" : "ImageThumbnail"
      }
    >
      <img
        className="ImageThumbnail__Image"
        src={props.src}
        alt={props.alt}
        style={props.style || {}}
      />
    </div>
  );
};
