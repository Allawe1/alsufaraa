import { Divider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";

import images from "./data";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div>
      <Typography className={classes.mainHeader}>Welcome to Gallery</Typography>
      <Divider variant="inset" className={classes.smallDivider} />
      <div className="container mx-auto px-auto ">
        <div className=" row ">
          {filteredImages.map((image) => (
            <div className="col-lg-4 col-md-6 col-sm-6 ">
              <div key={image.id} className={classes.imageCard}>
                <img
                  className={classes.image}
                  src={`/images/${image.imageName}`}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Gallery;
