declare module 'js/BlurScrollEffect' {
  export class BlurScrollEffect {
    constructor(textElement: HTMLElement, isClickable?: boolean);
    initializeEffect(): void;
    setupScrollAnimation(): void;
    setupClickAnimation(): void;
  }
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}