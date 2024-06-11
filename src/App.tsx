import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Laptop from "./svg/components/Laptop";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function App() {
  const [count, setCount] = useState(0);
  useGSAP(() => {
    gsap
      .timeline()
      .from("#laptopBase", {
        scaleY: 0,
        transformOrigin: "bottom",
        stagger: {
          each: 0.5,
          from: "end",
        },
      })
      .from("#laptopScreen", {
        scaleY: 0,
        transformOrigin: "bottom",
      })
      .from("#laptopKey", {
        scaleY: 0,
        transformOrigin: "bottom",
        stagger: {
          each: 0.1,
          from: "random",
        },
      })
      .from("#laptopPowerLight", {
        opacity: 0,
      })
      .to("#laptopScreen", {
        fill: "#00B2FF",
      })
      .from("#laptopText", {
        scaleX: 0,
        transformOrigin: "left",
        stagger: {
          each: 0.1,
          from: "start",
        },
      })
      .from("#laptopBrowser", {
        scaleY: 0,
        transformOrigin: "bottom",
      })
      .from(
        [
          "#laptopBrowserHeader",
          "#laptopBrowserHeaderTextInput",
          "#laptopBrowserHeaderButton",
        ],
        {
          scaleY: 0,
          transformOrigin: "bottom",
          stagger: {
            each: 0.1,
            from: "start",
          },
        }
      )
      .from("#laptopBrowserContent", {
        scaleX: 0,
        transformOrigin: "left",
        stagger: 0.2,
      });
  });
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Laptop
        laptopColor="white"
        laptopScreenColor="black"
        laptopKeysColor="black"
        laptopBrowserColor1="#1A1A1A"
        laptopTextColor1="blue"
        laptopTextColor2="white"
        laptopTextColor3="gray"
        laptopBrowserColor2="white"
        laptopBrowserImageColor="green"
        laptopPowerLightColor="blue"
      />
    </>
  );
}

export default App;
