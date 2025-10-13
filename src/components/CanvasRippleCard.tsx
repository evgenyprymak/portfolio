import React, { useEffect, useId, useRef } from 'react';
import '../css/CanvasRippleCard.css';

type CanvasRippleCardProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  pointerOrigin?: boolean;
  backgroundImageUrl?: string;
  width?: string;
  height?: string;
};

const CanvasRippleCard: React.FC<CanvasRippleCardProps> = ({
  children,
  ariaLabel,
  className,
  pointerOrigin = true, // default true to trigger ripple at mouse
  // Use Vite base URL so assets in `public/assets/...` resolve correctly in dev and after build
  // Default set to an existing image under public/assets/quasar/
  backgroundImageUrl = `${import.meta.env.BASE_URL}assets/moonfolio/moonfolio_5.jpg`,

}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const feImageRef = useRef<SVGFEImageElement | null>(null);
  const filterId = useId();
  const isProcessingRef = useRef<boolean>(false);
  const lastTriggerTimeRef = useRef<number>(0);
  const webglCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const snapshot2DRef = useRef<HTMLCanvasElement | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const glProgramRef = useRef<WebGLProgram | null>(null);
  const glTextureRef = useRef<WebGLTexture | null>(null);
  const glUniformsRef = useRef<{ [k: string]: WebGLUniformLocation | null }>({});
  const rafRef = useRef<number | null>(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const animationStateRef = useRef<{
    startTime: number | null;
    originX: number;
    originY: number;
    targetOriginX: number;
    targetOriginY: number;
    isAnimating: boolean;
    durationMs: number;
  }>({ startTime: null, originX: 0, originY: 0, targetOriginX: 0, targetOriginY: 0, isAnimating: false, durationMs: 3000 });

  const fadeOutState = useRef<{ startTime: number | null }>({ startTime: null });
  const fadeOutDuration = 100;

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);
    }
    const wgl = webglCanvasRef.current;
    if (wgl) {
      wgl.width = Math.floor(rect.width * dpr);
      wgl.height = Math.floor(rect.height * dpr);
      wgl.style.width = `${rect.width}px`;
      wgl.style.height = `${rect.height}px`;
      const gl = glRef.current;
      if (gl) gl.viewport(0, 0, wgl.width, wgl.height);
    }
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const drawFrame = (timestamp: number) => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const state = animationStateRef.current;
    if (state.startTime === null) state.startTime = timestamp;
    const elapsed = timestamp - state.startTime;
    const t = Math.min(elapsed / state.durationMs, 1);

    const followDuration = 0.3;
    if (t < followDuration) {
      const followT = t / followDuration;
      const followEase = (x: number) => 1 - Math.pow(1 - x, 3);
      const followAmount = followEase(followT);
      state.originX = state.originX + (state.targetOriginX - state.originX) * followAmount;
      state.originY = state.originY + (state.targetOriginY - state.originY) * followAmount;
    }

    const rect = wrapper.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.globalCompositeOperation = 'screen';

    const maxRadius = Math.hypot(rect.width, rect.height) * 0.55;
    const ease = (x: number) => 1 - Math.pow(1 - x, 3);
    const radius = 12 + ease(t) * maxRadius;

    const glowGradient = ctx.createRadialGradient(state.originX, state.originY, 0, state.originX, state.originY, Math.max(40, radius * 0.3));
    glowGradient.addColorStop(0, 'rgba(255,255,255,0.00)');
    glowGradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(state.originX, state.originY, Math.max(40, radius * 0.3), 0, Math.PI * 2);
    ctx.fill();

    renderWebGLDisplacement(state.originX, state.originY, radius, t);

    if (t < 1 && state.isAnimating) {
      rafRef.current = requestAnimationFrame(drawFrame);
    } else {
      rafRef.current = requestAnimationFrame(fadeOutFrame);
    }
  };

  const fadeOutFrame = (timestamp: number) => {
    if (!fadeOutState.current.startTime) fadeOutState.current.startTime = timestamp;
    const elapsed = timestamp - fadeOutState.current.startTime;
    const t = Math.min(elapsed / fadeOutDuration, 1);
    const opacity = 1 - t;

    if (overlayRef.current) {
      overlayRef.current.style.opacity = opacity.toString();
    }
    const wgl = webglCanvasRef.current;
    if (wgl) {
      wgl.style.opacity = opacity.toString();
    }

    if (t < 1) {
      rafRef.current = requestAnimationFrame(fadeOutFrame);
    } else {
      fadeOutState.current.startTime = null;
      isProcessingRef.current = false;
      animationStateRef.current.isAnimating = false;
      animationStateRef.current.startTime = null;
      if (overlayRef.current) {
        overlayRef.current.style.clipPath = 'none';
        (overlayRef.current.style as any).webkitClipPath = 'none';
        overlayRef.current.style.backdropFilter = 'none';
        (overlayRef.current.style as any).webkitBackdropFilter = 'none';
      }
      wrapperRef.current?.classList.remove('crc-anim');
      const contentEl = wrapperRef.current?.querySelector('.canvas-ripple-content') as HTMLElement | null;
      if (contentEl) contentEl.style.opacity = '1';
  // leave opacity at the value reached by the animation (should be 0)
  // avoid forcing immediate style changes here so the CSS transition can complete
    }
  };

  const buildSnapshot2D = async (width: number, height: number): Promise<HTMLCanvasElement> => {
    if (!snapshot2DRef.current) snapshot2DRef.current = document.createElement('canvas');
    const snap = snapshot2DRef.current;
    snap.width = width;
    snap.height = height;
    const ctx = snap.getContext('2d');
    if (!ctx) return snap;

    if (backgroundImageUrl) {
      await new Promise<void>((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const iw = img.naturalWidth || img.width;
          const ih = img.naturalHeight || img.height;
          const scale = Math.max(width / iw, height / ih);
          const dw = Math.ceil(iw * scale);
          const dh = Math.ceil(ih * scale);
          const dx = Math.floor((width - dw) / 2);
          const dy = Math.floor((height - dh) / 2);
          ctx.drawImage(img, dx, dy, dw, dh);
          resolve();
        };
        img.onerror = () => resolve();
        img.src = backgroundImageUrl!;
      });
    } else {
      ctx.fillStyle = '#111318';
      ctx.fillRect(0, 0, width, height);
    }

    return snap;
  };

  const initWebGLIfNeeded = () => {
    if (glRef.current && glProgramRef.current) return;
    const canvas = webglCanvasRef.current;
    if (!canvas) return;
    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;
    glRef.current = gl;

    const vsSrc = `
      attribute vec2 a_pos;
      varying vec2 v_uv;
      void main() {
        v_uv = 0.5 * (a_pos + 1.0);
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `;
    const fsSrc = `
      precision highp float;
      varying vec2 v_uv;
      uniform sampler2D u_tex;
      uniform vec2 u_center;
      uniform float u_radius;
      uniform vec2 u_resolution;
      uniform float u_strength;
      uniform float u_fade;
      void main() {
        vec2 uv = v_uv;
        vec2 px = uv * u_resolution;
        float d = distance(px, u_center);
        float wave = 0.0;
        if (d < u_radius) {
          float normalizedDist = d / u_radius;
          wave = (1.0 - normalizedDist) * sin(normalizedDist * 3.14159);
        }
        vec2 centerToPx = px - u_center;
        vec2 dir = length(centerToPx) > 0.0 ? normalize(centerToPx) : vec2(0.0);
        float displacement = wave * u_strength * u_fade;
        vec2 displaced = uv + dir * displacement / u_resolution;
        vec4 color = texture2D(u_tex, displaced);
        float glow = wave * 0.3 * u_fade;
        color.rgb += glow * vec3(0.0, 1.0, 1.0);
        gl_FragColor = color;
      }
    `;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const vs = compile(gl.VERTEX_SHADER, vsSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);
    glProgramRef.current = program;

    const buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    const quad = new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    glUniformsRef.current = {
      u_center: gl.getUniformLocation(program, 'u_center'),
      u_radius: gl.getUniformLocation(program, 'u_radius'),
      u_resolution: gl.getUniformLocation(program, 'u_resolution'),
      u_strength: gl.getUniformLocation(program, 'u_strength'),
      u_fade: gl.getUniformLocation(program, 'u_fade'),
    };

    const tex = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    glTextureRef.current = tex;
  };

  const uploadSnapshotToTexture = (snap: HTMLCanvasElement) => {
    const gl = glRef.current;
    const tex = glTextureRef.current;
    if (!gl || !tex) return;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, snap);
  };

  const renderWebGLDisplacement = (cx: number, cy: number, radius: number, t: number) => {
    const gl = glRef.current;
    const program = glProgramRef.current;
    const canvas = webglCanvasRef.current;
    const wrapper = wrapperRef.current;
    if (!gl || !program || !canvas || !wrapper) return;
    gl.useProgram(program);
    const rect = wrapper.getBoundingClientRect();
    gl.viewport(0, 0, canvas.width, canvas.height);
    const u = glUniformsRef.current;
    gl.uniform2f(u.u_resolution, rect.width, rect.height);

    const flippedY = rect.height - cy;
    gl.uniform2f(u.u_center, cx, flippedY);

    gl.uniform1f(u.u_radius, radius);
    gl.uniform1f(u.u_strength, Math.max(0.0, 1.0 - t) * 25.0);
    const fade = Math.max(0.0, 1.0 - t);
    if (u.u_fade) gl.uniform1f(u.u_fade, fade);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };

  const startRippleAtPosition = (x: number, y: number) => {
    if (prefersReducedMotion) return;

    const now = performance.now();
    if (isProcessingRef.current) return;
    if (now - lastTriggerTimeRef.current < 100) return;

    const state = animationStateRef.current;
    if (state.isAnimating) return;

    isProcessingRef.current = true;
    lastTriggerTimeRef.current = now;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();

    state.originX = x - rect.left;
    state.originY = y - rect.top;
    state.targetOriginX = x - rect.left;
    state.targetOriginY = y - rect.top;
    state.isAnimating = true;
    state.startTime = null;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(drawFrame);

    const wgl = webglCanvasRef.current;
    initWebGLIfNeeded();
    const gl = glRef.current;
    if (wgl && gl) {
      const dpr = Math.max(window.devicePixelRatio || 1, 1);
      const width = Math.floor(rect.width * dpr);
      const height = Math.floor(rect.height * dpr);
      buildSnapshot2D(width, height).then((snap) => {
        uploadSnapshotToTexture(snap);
        wrapperRef.current?.classList.add('crc-anim');
        const contentEl = wrapperRef.current?.querySelector('.canvas-ripple-content') as HTMLElement | null;
        if (contentEl) contentEl.style.opacity = '1';
        wgl.style.opacity = '1';
      });
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`canvas-ripple-card ${className ?? ''}`.trim()}
      role="group"
      aria-label={ariaLabel}
      // style={{
      //   '--card-width': width,
      //   '--card-height': height,
      // } as React.CSSProperties}
      onMouseEnter={(e) => startRippleAtPosition(e.clientX, e.clientY)}
      onMouseMove={(e) => {
        if (!pointerOrigin) return;
        const state = animationStateRef.current;
        const rect = wrapperRef.current?.getBoundingClientRect();
        if (!rect) return;

        if (!state.isAnimating && !isProcessingRef.current) {
          state.originX = e.clientX - rect.left;
          state.originY = e.clientY - rect.top;
        } else if (state.isAnimating) {
          state.targetOriginX = e.clientX - rect.left;
          state.targetOriginY = e.clientY - rect.top;
        }
      }}
    >
      {backgroundImageUrl && (
        <div
          className="canvas-ripple-bg"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          aria-hidden="true"
        />
      )}
      <div ref={overlayRef} className="canvas-ripple-overlay" aria-hidden="true" />
      <canvas ref={canvasRef} className="canvas-ripple-layer" />
      <canvas ref={webglCanvasRef} className="canvas-ripple-webgl" style={{ opacity: 0 }} />
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox">
          <feImage ref={feImageRef as any} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="heightmap" />
          <feDisplacementMap in="SourceGraphic" in2="heightmap" xChannelSelector="R" yChannelSelector="G" scale="30" />
        </filter>
      </svg>
      <div className="canvas-ripple-content">
        {/* {title && <div className="canvas-ripple-title">{title}</div>}
        {subtitle && <div className="canvas-ripple-subtitle">{subtitle}</div>} */}
        {children && <div className="canvas-ripple-body">{children}</div>}
      </div>
    </div>
  );
};

export default CanvasRippleCard;
