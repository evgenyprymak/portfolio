import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import PageHero from "./components/PageHero";
import Task from "./components/Task";


const ProjectDetailsProcedural = () => {
  const items = [
    { id: 1, title: "Project 1", subtitle: "Subtitle 1" },
    { id: 2, title: "Project 2", subtitle: "Subtitle 2" },
    { id: 3, title: "Project 3", subtitle: "Subtitle 3" },
  ];

  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="container-fluid">


      <div className="container-xxl">

        <PageHero
          title={<span>Quasar. <br />The Ticketing Platform.</span>}
          description={<span>The Quasar project aimed to create the best fan experience in the ticketing world. It supported various event states, including Demand Aggregation, Pre-Registration, On Sale, Exchange, and P2P exchanges. Each flow had unique and shared features, posing a design challenge in creating a scalable product while delivering a great user experience. The product was highly adopted by clients to boost their sales and enhance fan experiences. Well-known clients included BottleRock Napa Valley Festival, Coachella, Burning Man, and Lost Paradise, among many others.</span>}
          wrapperclassName="container-fluid"
          imageMobile="/portfolio/assets/quasar/project_hero_quasar_960w.jpg"
          imageDesktop="/portfolio/assets/quasar/project_hero_quasar_2560w.jpg"
          color='var(--txt-light-1)'
          colorDescription='var(--txt-light-3)'
        />

        <div className='container-xxl px-4' style={{ height: 'auto' }} >
          <div className='row row-gap-10 pt-40'>
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor='#111111'
              title='Driving Conversion Growth via Checkout Optimization'
              description={<span>Our goal was to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a <strong>competitor analysis</strong>, and identified opportunities for improvement at some steps in User Flows. I created <strong>interactive prototypes</strong> in <strong>Protopie</strong> and <strong>Figma</strong>, tested them with users via <strong>Useberry</strong>, and after minor changes we processed to development. <strong>I worked closely with developers</strong> to launch the MVP quickly. The result was a smoother ticket purchase process with fewer forms and less personal information, leading to a <strong>38% increase in conversion</strong>. The feature gained <strong>significant interest from other clients</strong>, even before its global release.</span>}
              image='/portfolio/assets/quasar/quasar_fastcheckout_v3.jpg'
            />
          </div>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id.toString()}
              onClick={() => setSelectedId(item.id.toString())}
            >
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </motion.div>
          ))}
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            {items.map((item) =>
              item.id.toString() === selectedId ? (
                <div key={item.id}>
                  <motion.h5>{item.subtitle}</motion.h5>
                  <motion.h2>{item.title}</motion.h2>
                  <motion.button onClick={() => setSelectedId(null)}>
                    Close
                  </motion.button>
                </div>
              ) : null
            )}
          </motion.div>
        )}
      </AnimatePresence>

        </div>

      </div>

    </div>
  );
};

export default ProjectDetailsProcedural;
