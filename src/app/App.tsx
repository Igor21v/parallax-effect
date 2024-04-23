import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
// @ts-ignore
import ScrollSmoother from "../assets/libs/gsap/ScrollSmoother.min.js";
import "./App.css";
import { Vertical } from "../pages/Vertical/Vertical";

function App() {
  window.addEventListener("scroll", (e) => {
    document.documentElement.style.setProperty(
      "--scrollTop",
      `${window.scrollY}px`
    );
  });
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollSmoother.create({
      wrapper: ".wrapper",
      content: ".content",
    });
  });
  return <Vertical />;
}

export default App;
