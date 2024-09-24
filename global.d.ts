declare module 'js/BlurScrollEffect' {
  export class BlurScrollEffect {
    constructor(textElement: HTMLElement, isClickable?: boolean);
    initializeEffect(): void;
    setupScrollAnimation(): void;
    setupClickAnimation(): void;
  }
}