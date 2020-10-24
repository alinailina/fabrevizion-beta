import React, { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { title, images } = item.fields;

  const img1 = images[0].fields.file.url;
  const img2 = images[1].fields.file.url;
  const [img, setImg] = useState(img1);

  return (
    <div>
      <Link to={{ pathname: `/item/${title}`, state: { item: item } }}>
        <img
          src={img}
          onMouseEnter={() => {
            setImg(img2);
          }}
          onMouseOut={() => {
            setImg(img1);
          }}
          alt="shopping-item"
        />
      </Link>
      <div>
        <p>{title}</p>
        <p>12345 руб.</p>
      </div>
    </div>
  );
};

export default Item;
