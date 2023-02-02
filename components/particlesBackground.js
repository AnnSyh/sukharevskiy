import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const particlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("particlesInit = ", engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // const stats = new Stats();
  // stats.setMode(0);
  // stats.domElement.style.position = "absolute";
  // stats.domElement.style.left = "0px";
  // stats.domElement.style.top = "0px";

  // document.body.appendChild(stats.domElement);
  // count_particles = document.querySelector(".js-count-particles");
  // update = function () {
  //   stats.begin();
  //   stats.end();
  //   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
  //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  //   }
  //   requestAnimationFrame(update);
  // };
  // requestAnimationFrame(update);

  return (
    <>
      <Particles
        sx={{ position: "absolute", border: "1px solid blue" }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: "#fff",
          // },
          fullScreen: { enable: false },
          fpsLimit: 200,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
              },
              onhover: {
                enable: true,
                mode: "grab",
                parallax: { enable: false, force: 60, smooth: 10 },
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#00b398",
            },
            links: {
              color: "#00b398",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              maxSpeed: 1,
              // bounce: false,
            },
            // number: {
            //   density: {
            //     enable: true,
            //     area: 1080,
            //   },
            //   value: 350,
            //   limit: 0,
            // },
            // opacity: {
            //   anim: { enable: false, opacity_min: 0.1, speed: 1, sync: true },
            //   random: false,
            //   value: 0.5,
            // },
            // shape: {
            //   type: "circle",
            // },
            // size: {
            //   value: { min: 1, max: 5 },
            // },
          },
        }}
      />
    </>
  );
};

export default particlesBackground;
