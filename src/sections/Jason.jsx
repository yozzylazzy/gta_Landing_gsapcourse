import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Jason = () => {
  useGSAP(() => {
    gsap.set(".jason", { marginTop: "-80vh" });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".jason",
          start: "top 90%",
          end: "10% center",
          scrub: 2,
          markers: true,
        },
      })
      .to(".first-vd", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      });

    gsap.to(
      ".jason .img-box",
      {
        scrollTrigger: {
          trigger: ".jason",
          start: "top center",
          end: "80% center",
          scrub: 2,
          markers: true,
        },
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<" // start at the same time as previous animation
    );
  }, []);

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Jason Duval</h1>
        <h2>Jason wants an easy life, but things just keep getting harder.</h2>
        <p>
          Jason grew up around grifters and crooks. After a stint in the Army
          trying to shake off his troubled teens, he found himself in the Keys
          doing what he knows best, working for local drug runners. It might be
          time to try something new.
        </p>

        <div className="jason-2">
          <img src="/images/jason-2.webp" />
        </div>
      </div>

      {/* Parallax Section */}
      <div className="space-y-5 mt-90 img-box">
        <div className="jason-1">
          <img src="/images/jason-1.webp" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
