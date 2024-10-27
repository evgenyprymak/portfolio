// @ts-ignore
import React, { useEffect, useRef } from 'react';

import Metric2 from './components/Metric2';
import Header from './components/Header';
import Divider from './components/Divider';
import PageHero from './components/PageHero';

import './css/ProjectDetails.css';
import Menu from './Menu';
import Footer from './components/Footer';
import Metric1 from './components/Metric1';

import lottie from 'lottie-web';
import VideoComp from './components/VideoComp';


const ProjectDetailsDashboard = () => {
  // Создаем массивы рефов для анимаций и целевых элементов
  const lottieRefs = Array.from({ length: 30 }, () => useRef<HTMLDivElement | null>(null));
  const targetRefs = Array.from({ length: 30 }, () => useRef<HTMLDivElement | null>(null));

  const targetRefVid1 = useRef<HTMLDivElement | null>(null);
  const targetRefVid2 = useRef<HTMLDivElement | null>(null);
  const targetRefVid3 = useRef<HTMLDivElement | null>(null);
  const targetRefVid4 = useRef<HTMLDivElement | null>(null);


  // Путь к файлам анимаций
  const animationPaths = [
    '/portfolio/assets/animation/anim_logo.json',
    '/portfolio/assets/animation/icon0.json',
    '/portfolio/assets/animation/icon1.json',
    '/portfolio/assets/animation/icon2.json',
    '/portfolio/assets/animation/icon3.json',
    '/portfolio/assets/animation/icon4.json',
    '/portfolio/assets/animation/icon5.json',
    '/portfolio/assets/animation/icon6.json',
    '/portfolio/assets/animation/icon7.json',
    '/portfolio/assets/animation/icon8.json',
    '/portfolio/assets/animation/icon9.json',
    '/portfolio/assets/animation/icon10.json',
    '/portfolio/assets/animation/icon11.json',
    '/portfolio/assets/animation/icon12.json',
    '/portfolio/assets/animation/icon13.json',
    '/portfolio/assets/animation/icon14.json',
    '/portfolio/assets/animation/icon15.json',
    '/portfolio/assets/animation/biases-1trade2.json',
    '/portfolio/assets/animation/biases-almost2.json',
    '/portfolio/assets/animation/Biases-AI-icon-5.json',
    '/portfolio/assets/animation/biases-report2.json',
  ];

  const loopSettings = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  const initializeAnimation = (lottieRef: React.RefObject<HTMLDivElement>, targetRef: React.RefObject<HTMLDivElement>, path: string, loop: boolean) => {
    const lottiePlayer = lottie.loadAnimation({
      container: lottieRef.current as Element,
      renderer: 'svg',
      loop, // Устанавливаем значение loop на основе переданного параметра
      autoplay: false,
      path,
    });

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lottiePlayer.play();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    if (targetRef.current) observer.observe(targetRef.current); // Начинаем наблюдение за элементом

    const handleClick = () => {
      lottiePlayer.stop(); // Останавливаем анимацию
      lottiePlayer.play(); // Запускаем анимацию по клику
    };

    if (lottieRef.current) lottieRef.current.addEventListener('click', handleClick); // Добавляем обработчик клика

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current); // Останавливаем наблюдение
      if (lottieRef.current) lottieRef.current.removeEventListener('click', handleClick); // Убираем обработчик клика
      lottiePlayer.destroy(); // Уничтожаем анимацию
    };
  };

  useEffect(() => {
    // Инициализируем анимации
    const cleanups = lottieRefs.map((lottieRef, index) =>
      initializeAnimation(lottieRef, targetRefs[index], animationPaths[index], loopSettings[index])
    );

    return () => {
      cleanups.forEach(cleanup => cleanup()); // Очищаем ресурсы при размонтировании
    };
  }, []);



  return (
    <div className="container-fluid px-0 justify-content-center">
      <Menu productDesign />
      <PageHero
        title={<span>Capital.com<br />Reinventing future of trading.</span>}
        description={<span>Capital.com is a CFD trading platform designed to be both intuitive for beginners and feature-rich for experienced traders. With a focus on accessibility and user-friendly design, it offers a seamless experience that makes trading straightforward for all users, regardless of their level of expertise.</span>}
        wrapperclassName="container-fluid"
        imageMobile="/portfolio/assets/capital/project_hero_capital_960w.jpg"
        imageDesktop="/portfolio/assets/capital/project_hero_capital_2560w.jpg"
        color='var(--txt-light-1)'
        colorDescription='var(--txt-light-3)'
      />
      <div className='container-xxl'>
        <div className='row row-gap-10'>
          <Metric1 className='col-6 col-lg-4 card-gap-10' above='' mainmetric='1M+' color='rgba(255,255,255,1)' below='Active users in 2019' />
          <Metric1 className='col-6 col-lg-4 card-gap-10' above='' mainmetric='$13B+' color='rgba(255,255,255,1)' below='Trading volume' />
          <Metric1 className='col-6 col-lg-4 card-gap-10' above='' mainmetric='50+' color='rgba(255,255,255,1)' below='Countries across the world' />
        </div>
      </div>

      <div className='container-fluid ephasized_section mt-40 pt-40'>
        <div className='container-xxl'>
          <div className='row row-gap-2'>
            <Metric2 className='col-6 col-lg-6 card-gap-2' above='My role' mainmetric='Product Designer' color='var(--txt-dark-2)' />
            <Metric2 className='col-6 col-lg-6 card-gap-2' above='Timeline' mainmetric='2016–2019' color='var(--txt-dark-2)' />
          </div>
          <Divider />
          <Header
            wrapperclassName="container-xxl py-4 px-0"
            size="medium"
            title="Context"
            color='var(--txt-dark-2)'
            colorDescription='var(--txt-dark-3)'
          />
          <div>
          </div>


          <div className='row pb-40' >
            <div className='col-12 col-lg-6 role-description'>
              After several years in the trading industry, beginning at IG—Europe's leading trading platform—I joined Capital.com to transform the trading experience. Starting as a product designer, I focused on making CFD (Contract for Difference) trading accessible globally through our web platform. Collaborating closely with a Product Manager and a front-end developer, we launched the platform within just six months. This launch was a significant milestone, quickly expanding access to trading for over 1 million users worldwide. Today, the platform has grown to more than 7 million users and continues to attract a global audience.            </div>
            <div className='col-12 col-lg-6 role-description'>
              In my role, I conducted in-depth competitor analysis, providing insights that shaped our user experience strategy and identified unique market differentiators. I also explored design possibilities by working with third-party services and leveraging their APIs, which allowed us to expand functionality and deliver a seamless trading experience. Additionally, I led and participated in user research, design presentations, and cross-functional collaboration, while establishing and pitching our design system and processes. By leveraging data, I worked iteratively to enhance the user experience, ensuring consistent design quality and making the platform more user-centric and impactful.            </div>
          </div>
          <div ref={targetRefs[0]} className='inline-image mb-40' id='capital-logo-lottie'>
            <div ref={lottieRefs[0]} style={{ height: '200px', cursor: 'pointer' }} />
          </div>
          <img className='inline-image mb-80' src='/portfolio/assets/capital/capital_1.jpg'></img>
        </div>
      </div>

      <div className='dark_section'>
        <div className='container-xxl px-2'>
          <Header
            wrapperclassName="pt-80"
            size="medium"
            title="Fetures"
            description={<span>During my time at Capital.com, I contributed to numerous features that enhance the trading experience and platform usability. My work included designing elements for branding, streamlining the registration process, and adapting account options for different regulatory requirements. I focused on making essential trading functions—such as portfolio management, instant and pending orders, reporting, and trading directly from charts—intuitive and accessible. I also developed clear call-to-action elements to guide users on where and how to start, making the platform welcoming for newcomers while offering robust tools for experienced traders.</span>}
            color='var(--txt-light-2)'
            colorDescription='var(--txt-light-3)'
          />

          <div>
            <Divider
              type='light'
            />
            <div><img className='inline-image mb-40' src='/portfolio/assets/capital/capital_3.jpg'></img></div>
            <div><img className='inline-image mb-40' src='/portfolio/assets/capital/capital_4.jpg'></img></div>

          </div>

          <div>
            <Divider
              type='light'
            />
            <Header
              wrapperclassName="pb-40"
              size="medium"
              title="FCA Registration"
              description={<span>While overseeing the design of the web platform, our team identified significant drops in conversion during the FCA registration process for both mobile and web users. To address this, I initiated design improvements using the Aesthetic-Usability Effect to transform the dull, transactional experience into a more engaging one. Working closely with the CEO, Product Manager, and development team, we expedited the rollout of these enhancements. The collaborative effort resulted in a notable boost in conversion rates, demonstrating the impact of a user-centered approach on regulatory processes.</span>}
              color='var(--txt-light-2)'
              colorDescription='var(--txt-light-3)'
            />
            <div><img className='inline-image mb-40' src='/portfolio/assets/capital/capital_8.jpg'></img></div>

            <div className='capital-fca mb-40'>
              <div ref={targetRefs[1]}>
                <div ref={lottieRefs[1]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[2]}>
                <div ref={lottieRefs[2]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[3]}>
                <div ref={lottieRefs[3]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[4]}>
                <div ref={lottieRefs[4]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[5]}>
                <div ref={lottieRefs[5]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[6]}>
                <div ref={lottieRefs[6]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
            </div>
            <div className='capital-fca mb-40'>
              <div ref={targetRefs[7]}>
                <div ref={lottieRefs[7]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[8]}>
                <div ref={lottieRefs[8]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[9]}>
                <div ref={lottieRefs[9]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[10]}>
                <div ref={lottieRefs[10]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[11]}>
                <div ref={lottieRefs[11]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[12]}>
                <div ref={lottieRefs[12]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[13]}>
                <div ref={lottieRefs[13]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[14]}>
                <div ref={lottieRefs[14]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[15]}>
                <div ref={lottieRefs[15]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[16]}>
                <div ref={lottieRefs[16]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
            </div>
          </div>


          <div>
            <Divider
              type='light'
            />
            <div className='row row-gap-10'>
              <div className='col-lg-6 col-sm-12 card-gap-10 mt-20' ref={targetRefVid1}><VideoComp targetRef={targetRefVid1} bgColor='#242424' videoSrc="/portfolio/video/capital-screen2screen.mp4" /></div>
              <div className='col-lg-6 col-sm-12 card-gap-10 mt-20' ref={targetRefVid2}><VideoComp targetRef={targetRefVid2} bgColor='#242424' videoSrc="/portfolio/video/capital-final.mp4" /></div>
            </div>
            <div className='row row-gap-10'>
              <div className='col-lg-6 col-sm-12 card-gap-10 mt-20' ><div className='inline-image-2-container' style={{ backgroundColor: "#242424" }}><img className='inline-image-2' src='/portfolio/assets/capital/capital_12.jpg'></img></div></div>
              <div className='col-lg-6 col-sm-12 card-gap-10 mt-20' ref={targetRefVid3}><VideoComp targetRef={targetRefVid3} bgColor='#242424' videoSrc="/portfolio/video/capital-complete.mp4" /></div>

            </div>
          </div>

          <div>
            <Divider
              type='light'
            />
            <Header
              wrapperclassName="pb-40"
              size="medium"
              title="Economic Calendar"
              description={<span>Understanding that the economic calendar can often be complex and overwhelming for users on trading platforms, we prioritized simplicity and clarity in its design. Our approach focused on making the calendar easily accessible and comprehensible for all users, regardless of their trading experience. By enhancing the user interface and streamlining information presentation, we aimed to empower traders with the essential economic data they need to make informed decisions.</span>}
              color='var(--txt-light-2)'
              colorDescription='var(--txt-light-3)'
            />
            <div><img className='inline-image mb-40' src='/portfolio/assets/capital/capital_10.jpg'></img></div>
            <div><img className='inline-image mb-40' src='/portfolio/assets/capital/capital_11.jpg'></img></div>
            <div className='row row-gap-10'>
              <div className='col-lg-6 col-sm-12 card-gap-10' ><div className='inline-image-2-container' style={{ backgroundColor: "#302542" }}><img className='inline-image-2' src='/portfolio/assets/capital/capital_9.png'></img></div></div>
              <div className='col-lg-6 col-sm-12 card-gap-10' ref={targetRefVid4}><VideoComp targetRef={targetRefVid4} bgColor='#302542' videoSrc="/portfolio/video/capital-events.mp4" /></div>
            </div>
          </div>

          <div>
            <Divider
              type='light'
            />
            <div><img className='inline-image mb-40' src='/portfolio/assets/capital/capital_5.jpg'></img></div>
          </div>

          <div>
            <Divider
              type='light' />
            <div><img className='inline-image mb-40' src='/portfolio/assets/capital/capital_13.jpg'></img></div>
            <div><img className='inline-image mb-40' src='/portfolio/assets/capital/capital_14.jpg'></img></div>
            <div><img className='inline-image mb-40' src='/portfolio/assets/capital/capital_15.jpg'></img></div>

          </div>
          <div>
            <Divider
              type='light' />
            <div><img className='inline-image mb-40' src='/portfolio/assets/capital/capital_16.jpg'></img></div>
            <div className='mb-40 capital-eq'>
            <div ref={targetRefs[19]}>
                <div ref={lottieRefs[19]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[17]}>
                <div ref={lottieRefs[17]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
              <div ref={targetRefs[18]}>
                <div ref={lottieRefs[18]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>

              <div ref={targetRefs[20]}>
                <div ref={lottieRefs[20]} style={{ height: '144px', cursor: 'pointer' }} />
              </div>
            </div>

          </div>

          <Footer />

        </div>
      </div>




    </div>
  );
};

export default ProjectDetailsDashboard;