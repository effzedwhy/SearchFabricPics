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
let getImages = "";

export const Images = ({ userInput }) => {
  if (userInput !== "") {
    getImages = getFromImages.filter((img) => img === userInput);
  }

  const fullImage = "/images/" + getImages + ".jpg";

  image.push(fullImage);

  return (
    <div className={classes.container}>
      <img className={classes.img} src={fullImage} alt="imgs"></img>
    </div>
  );
};

export default Images;
