
import Menu from "./Menu";
import { RubensScene } from './components/3DgalleryProcedural';

const ProjectDetailsProcedural = () => {


  return (
    <div className="container-fluid px-0">
      <Menu proceduralArt />
      {/* <div ref={targetRefVid}>
        <VideoComp targetRef={targetRefVid} bgColor='#30254200' videoSrc="/portfolio/assets/procedural/video_1280x1920_1.mp4" />
      </div> */}
      <RubensScene
        centerTitle="Procedural Art"
        centerDescription="Procedural and generative art created in Houdini — each model starts from four points and evolves through SubD modeling, procedural generation, and transformations."
      />

      {/* <div className="container-xxl pt-160 px-4" style={{ position: 'absolute', bottom: 0, zIndex: 1, left:'50%', transform: 'translateX(-50%)' }}>
        <div style={{}}>
          <Footer showLinkedIn={false} showResume={false} showDivider={false} />
        </div>      
      </div> */}
    </div>

  );
};

export default ProjectDetailsProcedural;
