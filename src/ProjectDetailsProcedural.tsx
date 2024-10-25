
import PageHero from "./components/PageHero";
import ImageGallery from './components/ImageGallery';
import Menu from "./Menu";
import Footer from "./components/Footer";

const ProjectDetailsProcedural = () => {
  return (
    <div className="container-fluid px-0">
      <Menu />
      <PageHero
        title={<span>Procedural Art</span>}
        description={<span>One day, I stumbled upon an article about procedural design and the possibilities of SideFX Houdini. I was fascinated by the way it allows you to create unique and cool designs through a single pipeline with controllers—its potential seems endless. I dove into learning Houdini (which isn’t the easiest tool, by the way!), and decided to start with procedural SubD modeling. That’s been quite a challenge, but I love pushing myself to learn new software and tackle complex stuff.</span>}
        wrapperclassName="container-fluid justify-items-center"
        headerwrapper='justify-content-center'
        imageMobile="/portfolio/assets/procedural/project_hero_procedural_960w.jpg"
        imageDesktop="/portfolio/assets/procedural/project_hero_procedural_2560w.jpg"
        color='var(--txt-light-1)'
        colorDescription='var(--txt-light-3)'
        alignment='center'
      />
      <div className='container-xxl mb-80'>
        <div className='pt-160'><ImageGallery /></div>
        <Footer />
      </div>

    </div>

  );
};

export default ProjectDetailsProcedural;
