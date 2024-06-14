import { FC } from "react";

const CeilingLight: FC<{
  className?: string;
  lightColor: string;
  stringColor: string;
}> = ({ className, lightColor, stringColor }) => {
  return (
    <svg
      width="781"
      height="1036"
      viewBox="0 0 781 736"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_49_2)">
        <circle cx="390.5" cy="341.5" r="104.5" fill={lightColor} />
      </g>
      <ellipse cx="390.5" cy="248" rx="25.5" ry="11" fill={stringColor} />
      <line
        x1="390.5"
        y1="249"
        x2="390.5"
        y2="-500"
        stroke={stringColor}
        stroke-width="3"
      />
      <defs>
        {lightColor !== "lightgray" && (
          <filter
            id="filter0_d_49_2"
            x="0"
            y="-45"
            width="781"
            height="781"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="36"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_49_2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="125" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.83 0 0 0 0 0.575 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_49_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_49_2"
              result="shape"
            />
          </filter>
        )}
      </defs>
    </svg>
  );
};

export default CeilingLight;
