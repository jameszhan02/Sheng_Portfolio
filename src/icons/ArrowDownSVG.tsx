import type { SVGProps } from "react";
const ArrowDownSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5v14"></path>
    <path d="m19 12-7 7-7-7"></path>
  </svg>
);
export default ArrowDownSVG;
