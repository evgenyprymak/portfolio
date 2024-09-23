// Import the TextSplitter class for handling text splitting.
import { TextSplitter } from '../js/textSplitter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class BlurScrollEffect {
  constructor(textElement, isClickable = false) {
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error('Invalid text element provided.');
    }

    this.textElement = textElement;
    this.isClickable = isClickable;

    this.initializeEffect();
  }

  initializeEffect() {
    const textResizeCallback = () => this.scroll();
    this.splitter = new TextSplitter(this.textElement, {
      resizeCallback: textResizeCallback,
      splitTypeTypes: 'words, chars'
    });

    if (this.isClickable) {
      this.setupClickAnimation(); // Настройка анимации клика
    } else {
      this.setupScrollAnimation(); // Настройка анимации прокрутки
    }
  }

  setupScrollAnimation() {
    const chars = this.splitter.getChars();
    gsap.set(chars, { autoAlpha: 0 }); // Скрываем текст изначально

    gsap.fromTo(chars, {
      scaleY: 0.1,
      scaleX: 1.2,
      filter: 'blur(20px) brightness(10%)',
      willChange: 'filter, transform'
    }, {
      ease: 'none',
      scaleY: 1,
      scaleX: 1,
      filter: 'blur(0px) brightness(100%)',
      stagger: 0.01,
      scrollTrigger: {
        trigger: this.textElement,
        start: 'top bottom-=15%',
        end: 'bottom center+=15%',
        scrub: true,
        onEnter: () => gsap.to(chars, { autoAlpha: 1 }), // Показываем текст при входе в триггер
      },
    });
  }

  setupClickAnimation() {
    const chars = this.splitter.getChars();
    
    this.textElement.addEventListener('click', () => {
      gsap.fromTo(chars, {
        scaleY: 0.1,
        scaleX: 1.2,
        filter: 'blur(20px) brightness(10%)',
        willChange: 'filter, transform'
      }, {
        ease: 'none',
        scaleY: 1,
        scaleX: 1,
        filter: 'blur(0px) brightness(100%)',
        stagger: 0.01,
      });
    });
  }
}