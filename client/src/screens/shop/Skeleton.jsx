import React from "react";
import Skeleton from "react-loading-skeleton";

// Styles
import styles from "./index.module.scss";

const SkeletonComponent = () => {
  return (
    <div className={styles.list}>
      {Array(6)
        .fill()
        .map((item, index) => (
          <div key={index}>
            <Skeleton height={400} />
          </div>
        ))}
      <i aria-hidden="true"></i>
      <i aria-hidden="true"></i>
    </div>
  );
};

export default SkeletonComponent;
