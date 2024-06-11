import { FC } from "react";

type LaptopProps = {
  laptopColor: string;
  laptopScreenColor: string;
  laptopKeysColor: string;
  laptopTextColor1: string;
  laptopTextColor2: string;
  laptopTextColor3: string;
  laptopBrowserColor1: string;
  laptopBrowserColor2: string;
  laptopBrowserImageColor: string;
  laptopPowerLightColor: string;
};
const Laptop: FC<LaptopProps> = ({
  laptopColor,
  laptopScreenColor,
  laptopKeysColor,
  laptopTextColor1,
  laptopTextColor2,
  laptopTextColor3,
  laptopBrowserColor1,
  laptopBrowserColor2,
  laptopBrowserImageColor,
  laptopPowerLightColor,
}) => {
  return (
    <svg
      width="303"
      height="212"
      viewBox="0 0 303 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 10C26 4.47715 30.4772 0 36 0H268C273.523 0 278 4.47715 278 10V140C278 145.523 273.523 150 268 150H36C30.4772 150 26 145.523 26 140V10Z"
        fill={laptopColor}
        id="laptopBase"
      />
      <rect
        x="36.7963"
        y="9.81079"
        width="232.429"
        height="128.053"
        rx="7.5"
        fill={laptopScreenColor}
        stroke={laptopScreenColor}
        stroke-width="5"
        id="laptopScreen"
      />
      <path
        d="M17.6454 165.309C22.9562 155.853 32.9571 150 43.8023 150H261.163C272.691 150 283.2 156.606 288.197 166.995L301.331 194.298C302.101 195.897 302.5 197.649 302.5 199.423C302.5 205.953 297.206 211.247 290.676 211.247H11.5089C5.15271 211.247 0 206.094 0 199.738C0 197.764 0.50771 195.823 1.47434 194.102L17.6454 165.309Z"
        fill={laptopColor}
        id="laptopBase"
      />
      <path
        d="M54.4277 155.28H75.2912L72.729 161.88H50.4014L54.4277 155.28Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M48.8154 164.652H71.387L68.8248 171.251H44.7891L48.8154 164.652Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M79.4396 155.148H103.719L102.621 162.144H76.9994L79.4396 155.148Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M107.136 155.148H130.195V162.144H106.281L107.136 155.148Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M134.222 155.412H160.575L161.063 162.012H134.222V155.412Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M165.334 155.412H192.664L193.396 162.012H165.578L165.334 155.412Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M197.3 155.412H225.118L226.582 161.88H198.276L197.3 155.412Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M229.876 155.412H256.84L260.013 161.88H231.584L229.876 155.412Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M231.95 164.652H261.233L264.649 171.515H234.025L231.95 164.652Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M198.52 164.652H227.07L228.656 171.383H199.496L198.52 164.652Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M165.822 164.652H193.762L194.494 171.515H166.188L165.822 164.652Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M134.344 164.652H161.063L161.673 171.515H134.466L134.344 164.652Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M104.861 174.115H194.82L196.997 190.076H102.684L104.861 174.115Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M105.671 164.652H130.073V171.647H104.817L105.671 164.652Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <path
        d="M76.2673 164.652H101.889L100.669 171.251H73.8271L76.2673 164.652Z"
        fill={laptopKeysColor}
        fill-opacity="0.5"
        id="laptopKey"
      />
      <rect
        x="131.903"
        y="199.235"
        width="42.9471"
        height="3.16794"
        fill={laptopPowerLightColor}
        id="laptopPowerLight"
      />
      <rect
        x="55.2592"
        y="33.7859"
        width="66.0697"
        height="6.71612"
        rx="3.35806"
        fill={laptopTextColor1}
        id="laptopText"
      />
      <rect
        x="70.7789"
        y="52.0159"
        width="66.0697"
        height="6.71612"
        rx="3.35806"
        fill={laptopTextColor2}
        id="laptopText"
      />
      <rect
        x="55.2592"
        y="70.2451"
        width="66.0697"
        height="6.71612"
        rx="3.35806"
        fill={laptopTextColor1}
        id="laptopText"
      />
      <rect
        x="70.7789"
        y="90.873"
        width="66.0697"
        height="6.71612"
        rx="3.35806"
        fill={laptopTextColor2}
        id="laptopText"
      />
      <rect
        x="55.2592"
        y="111.501"
        width="66.0697"
        height="6.71612"
        rx="3.35806"
        fill={laptopTextColor1}
        id="laptopText"
      />
      <rect
        x="55.2592"
        y="33.7859"
        width="66.0697"
        height="6.71612"
        rx="3.35806"
        fill={laptopTextColor1}
        id="laptopText"
      />
      <rect
        x="70.7789"
        y="52.0159"
        width="66.0697"
        height="6.71612"
        rx="3.35806"
        fill={laptopTextColor2}
        id="laptopText"
      />
      <rect
        x="55.2592"
        y="70.2451"
        width="66.0697"
        height="6.71612"
        rx="3.35806"
        fill={laptopTextColor1}
        id="laptopText"
      />
      <rect
        x="70.7789"
        y="90.873"
        width="66.0697"
        height="6.71612"
        rx="3.35806"
        fill={laptopTextColor2}
        id="laptopText"
      />
      <rect
        x="55.2592"
        y="111.501"
        width="66.0697"
        height="6.71612"
        rx="3.35806"
        fill={laptopTextColor1}
        id="laptopText"
      />
      <rect
        x="161.237"
        y="17.4756"
        width="95.3355"
        height="88.7487"
        fill={laptopBrowserColor1}
        id="laptopBrowser"
      />
      <rect
        x="182.078"
        y="37.1443"
        width="31.0395"
        height="30.2225"
        fill={laptopBrowserImageColor}
        id="laptopBrowserContent"
      />
      <rect
        x="182.078"
        y="71.2046"
        width="55.4276"
        height="4.79723"
        fill={laptopTextColor3}
        id="laptopBrowserContent"
        
      />
      <rect
        x="216.221"
        y="37.1443"
        width="21.2842"
        height="3.35806"
        fill={laptopTextColor3}
        id="laptopBrowserContent"
      />
      <rect
        x="216.221"
        y="42.9006"
        width="21.2842"
        height="3.35806"
        fill={laptopTextColor3}
        id="laptopBrowserContent"
      />
      <rect
        x="216.221"
        y="48.6575"
        width="21.2842"
        height="3.35806"
        fill={laptopTextColor3}
        id="laptopBrowserContent"
      />
      <rect
        x="216.221"
        y="53.9348"
        width="21.2842"
        height="3.35806"
        fill={laptopTextColor3}
        id="laptopBrowserContent"
      />
      <rect
        x="216.221"
        y="59.2114"
        width="21.2842"
        height="3.35806"
        fill={laptopTextColor3}
        id="laptopBrowserContent"
      />
      <rect
        x="216.221"
        y="64.0088"
        width="21.2842"
        height="3.35806"
        fill={laptopTextColor3}
        id="laptopBrowserContent"
      />
      <rect
        x="182.078"
        y="78.4004"
        width="55.4276"
        height="4.79723"
        fill={laptopTextColor3}
        id="laptopBrowserContent"
      />
      <rect
        x="182.078"
        y="86.5557"
        width="55.4276"
        height="4.3175"
        fill={laptopTextColor3}
        id="laptopBrowserContent"
      />
      <rect
        x="161.237"
        y="16.5161"
        width="95.3355"
        height="10.5539"
        fill={laptopBrowserColor2}
        id="laptopBrowserHeader"
      />
      <rect
        x="163.454"
        y="21.7932"
        width="91.3447"
        height="2.39861"
        fill={laptopBrowserColor1}
        id="laptopBrowserHeaderTextInput"
      />
      <ellipse
        cx="253.468"
        cy="18.9148"
        rx="1.33026"
        ry="1.43917"
        fill="#FF0000"
        id="laptopBrowserHeaderButton"
      />
      <ellipse
        cx="249.478"
        cy="18.9148"
        rx="1.33026"
        ry="1.43917"
        fill="#FFF500"
        id="laptopBrowserHeaderButton"
      />
      <ellipse
        cx="245.487"
        cy="18.9148"
        rx="1.33026"
        ry="1.43917"
        fill="#0085FF"
        id="laptopBrowserHeaderButton"
      />
    </svg>
  );
};

export default Laptop;