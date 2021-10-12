import React from 'react';
import ContentLoader from "react-content-loader"

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="134" cy="126" r="116" />
      <rect x="0" y="255" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="292" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="399" rx="6" ry="6" width="91" height="31" />
      <rect x="32" y="413" rx="0" ry="0" width="4" height="0" />
      <rect x="141" y="390" rx="25" ry="25" width="132" height="51" />
    </ContentLoader>
  );
};

export default LoadingBlock;