import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
// @ts-ignore
import ScrollSmoother from "../assets/libs/gsap/ScrollSmoother.min.js";
import "./App.css";

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
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <header className="main-header">
            <div className="layers">
              <div className="layer__header">
                <div className="layers__caption">Welcome to Parallax</div>
                <div className="layers__title">Fairy Forest</div>
              </div>
              <div className="layer layers__base"></div>
              <div className="layer layers__middle"></div>
              <div className="layer layers__front"></div>
            </div>
          </header>

          <article className="main-article">
            <div className="main-article__content">
              <h2 className="main-article__header">To be continued</h2>
              <p className="main-article__paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                error provident dignissimos facere. Repellendus tempore autem
                qui! Quia magnam tempora esse id necessitatibus corrupti
                mollitia expedita sapiente cum rerum, ut dicta laboriosam!
              </p>
            </div>
            <div className="copy">Igor Bondarenko</div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
