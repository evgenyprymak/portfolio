import { TextSplitter } from './textSplitter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const SectionOverlay = () => {
    useEffect(() => {
      let getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);
  
      const sections = gsap.utils.toArray("section");
  
      sections.forEach((section, i) => {
        section.bg = section.querySelector(".bg");
  
        // Assign random background images
        section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;
  
        gsap.fromTo(
          section.bg,
          {
            backgroundPosition: () => (i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px")
          },
          {
            backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: () => (i ? "top bottom" : "top top"),
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true // Makes it responsive
            }
          }
        );
      });
  
      // Cleanup ScrollTriggers on component unmount
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);

    return (
        <div>
          <section>
            <div className="bg"></div>
            <h1>Section 1</h1>
          </section>
          <section>
            <div className="bg"></div>
            <h1>Section 2</h1>
          </section>
          <section>
            <div className="bg"></div>
            <h1>Section 3</h1>
          </section>
        </div>
      );
    };

    export default SectionOverlay;
