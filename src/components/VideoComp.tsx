// @ts-ignore

import React, { useRef, useEffect, useState } from 'react';
import '../css/VideoComp.css'; // импортируйте CSS, если нужно

interface VideoCompProps {
    videoSrc: string; // Путь к видео
    targetRef: React.RefObject<HTMLElement>; // Реф элемента, до которого нужно скроллить
    bgColor?: string;
  }
  
  const VideoComp: React.FC<VideoCompProps> = ({ videoSrc, targetRef, bgColor='#2A2A2A' }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    // const [isLoading, setIsLoading] = useState(true);
  
    // const handleLoad = () => {
    //   setIsLoading(false);
    // };
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Проверяем, если это не мобильное устройство
                        if (!/Mobi|Android/i.test(navigator.userAgent)) {
                            // Если видео стало видимым, начинаем воспроизведение
                            videoRef.current?.play();
                        }
                    } else {
                        // При прокрутке вверх, ставим на паузу
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0.5 } // Срабатывает, когда 50% элемента в пределах видимости
        );
  
      if (targetRef.current) {
        observer.observe(targetRef.current); // Наблюдаем за переданным элементом
      }
  
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current); // Остановить наблюдение при размонтировании
        }
      };
    }, [targetRef]);
  
    return (
      <div className="video-container" style={{ backgroundColor: bgColor}}>
        {/* {isLoading && <div className="loader">Loading...</div>} */}
        <video
          ref={videoRef}
          src={videoSrc}
        //   onLoadedData={handleLoad}
          controls
        //   className={isLoading ? 'hidden' : ''}
        />
      </div>
    );
  };
  
  export default VideoComp;