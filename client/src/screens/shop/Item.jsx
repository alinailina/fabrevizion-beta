import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";

const Item = ({ item }) => {
  const { title, images } = item.fields;

  const img = images[0].fields.file.url;
  //const img2 = images[1].fields.file.url;

  return (
    <div>
      <Link>
        <img src={img} alt="shopping-item" />
      </Link>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Item;
