import React from "react";
import Header from "./Header";
import '../css/PageHero.css';


interface PageHero {
  wrapperclassName?: string;
  className?: string;
  alignment?: "left" | "center";
  color?: string;
  colorDescription?: string;
}

const PageHero: React.FC<PageHero> = ({ wrapperclassName}) => {
  return (
    <section>
      <div className={`page-hero-wrapper ${wrapperclassName}`}>
        <div className="page-hero-content">
          <Header
            wrapperclassName="header position-relative z-3"
            alignment='left'
            size="large"
            title={<span>Quasar. <br /> The ticketing platform.</span>}
            color='var(--txt-light-1)'
            colorDescription='var(--txt-light-3)'
            description={<span>The Quasar project aimed to create the best fan experience in the ticketing world. It supported various event states, including Demand Aggregation, Pre-Registration, On Sale, Exchange, and P2P exchanges. Each flow had unique and shared features, posing a design challenge in creating a scalable product while delivering a great user experience. The product was highly adopted by clients to boost their sales and enhance fan experiences. Well-known clients included BottleRock Napa Valley Festival, Coachella, Burning Man, and Lost Paradise, among many others.</span>}
          />
          </div>
        <div className="page-hero-shade">
          <img
            className="page-hero-image"
            src="/portfolio/assets/quasar/project_hero_quasar.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default PageHero;
