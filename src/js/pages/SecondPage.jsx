import { useEffect, useState } from "react";
import ViteLogo from "../../assets/vite.svg";
import ReactLogo from "/react.svg";
import CenterVertical from "../layouts/CenterVertical";
import ImageLink from "../components/ImageLink";
import Text from "../components/Text";
import Button from "../components/Button";

function App() {
  useEffect(() => {
    document.title = "Second Page of React Boilerplate";
    document.querySelector('link[rel="icon"]').href = "/src/assets/vite.svg";
  }, []);

  const imageLink = [
    {
      href: "https://vitejs.dev",
      src: ViteLogo,
      alt: "Vite logo",
      className: "hover:drop-shadow-[0_0_2em_#646cffaa]",
    },
    {
      href: "https://react.dev",
      src: ReactLogo,
      alt: "React logo",
      className:
        "motion-safe:animate-[spin_20s_linear_infinite] hover:drop-shadow-[0_0_2em_#61dafbaa]",
    },
  ];
  const [count, setCount] = useState(0);

  return (
    <CenterVertical className="p-[2rem] bg-[#242424]">
      <div className="flex flex-row">
        {imageLink.map((item, index) => (
          <ImageLink key={index} {...item} />
        ))}
      </div>

      <Text className="text-[3.2em] leading-[1.1] text-white">
        Vite + React Boilerplate
      </Text>

      <div className="p-[2em] space-y-[1em]">
        <Button onClick={() => setCount((count) => count + 1)} count={count}>
          Count {count}
        </Button>

        <Text className="text-white">
          Vite + React + Javascript + SWC + Tailwind CSS + Storybook
        </Text>
      </div>

      <Text className="text-[#888]">
        Click on the Vite and React logos to learn more
      </Text>
    </CenterVertical>
  );
}

export default App;
