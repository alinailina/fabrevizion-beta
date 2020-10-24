import React from "react";
import Skeleton from "react-loading-skeleton";

// Styles
import styles from "./index.module.scss";

const SkeletonComponent = () => {
  return (
    <div className={styles.posts}>
      {Array(6)
        .fill()
        .map((post, index) => (
          <div className={styles.post} key={index}>
            <Skeleton height={300} />
          </div>
        ))}
    </div>
  );
};

export default SkeletonComponent;
