
import PageHero from "./components/PageHero";
import ImageGallery from './components/ImageGallery';
import Menu from "./Menu";
import { ImageNames2 } from "./components/ImageNamesOldWorks";
import Footer from "./components/Footer";


const ProjectDetailsProcedural = () => {
  return (
    <div className="container-fluid px-0">
      <Menu
        productDesign
      />
      <PageHero
        title={<span>Old Works</span>}
        description={<span>A selection of projects from the early stages of my design career, including UX/UI design, web design, and game design. These projects laid the foundation for my expertise in creating engaging, user-friendly experiences across various platforms.</span>}
        wrapperclassName="container-fluid justify-items-center"
        headerwrapper='justify-content-center'
        imageMobile="/portfolio/assets/project_old.jpg"
        imageDesktop="/portfolio/assets/project_old.jpg"
        color='var(--txt-light-1)'
        colorDescription='var(--txt-light-3)'
        alignment='center'
      />
      <div className='container-xxl mb-80'>
        <div className='pt-160'>
          <ImageGallery
            source={ImageNames2}
            basePath="assets/oldworks/"
            aspectRatio="10 / 13"
          />
        </div>
        <Footer />
      </div>
    </div>

  );
};

export default ProjectDetailsProcedural;
