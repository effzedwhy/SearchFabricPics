import React from "react";
import classes from "./Images.module.css";

const getFromImages = [
  "anchor",
  "boat_navy1",
  "boom_pow",
  "butterfly_navy1",
  "butterfly_pink_white",
];

const image = [];

export const Images = ({ userInput }) => {
  console.log(userInput);

  const getImages = getFromImages.filter((img) => img === userInput);

  console.log(getImages);
  const fullImage = "/images/" + getImages + ".jpg";

  image.push(fullImage);
  console.log(fullImage);

  return (
    <div>
      <img className={classes.img} src={fullImage} alt="imgs"></img>
    </div>
  );
};

export default Images;
