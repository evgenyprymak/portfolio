
import ImageGallery from './components/ImageGallery';
import Menu from "./Menu";
import Footer from "./components/Footer";
import Header from "./components/Header";

const ProjectDetailsProcedural = () => {


  return (
    <div className="container-fluid px-0">
      <Menu proceduralArt />
      <Header
        wrapperclassName="container-xxl pt-160 px-4"
        className=""
        title={<span>Procedural Art</span>}
        description={<span>One day, I stumbled upon an article about procedural design and the possibilities of SideFX Houdini. I was fascinated by the way it allows you to create unique and cool designs through a single pipeline with controllers—its potential seems endless. I dove into learning Houdini (which isn’t the easiest tool, by the way!), and decided to start with procedural SubD modeling. That’s been quite a challenge, but I love pushing myself to learn new software and tackle complex stuff.</span>}
        logoUrl='/portfolio/assets/logos/product_logo=sidefx.svg'

      />
      {/* <div ref={targetRefVid}>
        <VideoComp targetRef={targetRefVid} bgColor='#30254200' videoSrc="/portfolio/assets/procedural/video_1280x1920_1.mp4" />
      </div> */}
      <div className='container-xxl mb-80 px-4'>
        <div className='pt-40'><ImageGallery /></div>
        <Footer />
      </div>

    </div>

  );
};

export default ProjectDetailsProcedural;
