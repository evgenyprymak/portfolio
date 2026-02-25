
import { Canvas, RootState, ThreeEvent, useFrame } from "@react-three/fiber";
import { Environment, Loader, Text, useGLTF, useTexture } from "@react-three/drei";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DoubleSide, Group, Mesh, MeshPhysicalMaterial, Object3D, Texture } from "three";
import { ImageNames } from "./ImageNamesProcedural";

import "../css/3DgalleryProcedural.css";

const ENABLE_HELMET_MODEL = false;
const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
const HEADER_TITLE_FONT = withBase("fonts/ObjectSans/PPObjectSans-Bold.ttf");
const HEADER_TEXT_FONT = withBase("fonts/ObjectSans/PPObjectSans-Regular.ttf");
const SIDEFX_LOGO = withBase("assets/logos/product_logo=sidefx.svg");

function gcd(a: number, b: number) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

type TextureSizeLike = {
  width?: number;
  height?: number;
  naturalWidth?: number;
  naturalHeight?: number;
  videoWidth?: number;
  videoHeight?: number;
};

type RubensSceneProps = {
  centerTitle?: string;
  centerDescription?: string;
};

function HelmetModel({ tubeAngleRef }: { tubeAngleRef: React.MutableRefObject<number> }) {
  const helmet = useGLTF(withBase("models/rubens.glb"));

  const scene = useMemo(() => helmet.scene.clone(true), [helmet.scene]);
  const modelRef = useRef<Group>(null);
  const baseRotation = useMemo(() => ({ x: Math.PI / 8, y: Math.PI / 2 }), []);
  const glassMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: "#2b0961",
        metalness: 0.2,
        roughness: 0.3,
        envMapIntensity: 0.1,
        clearcoat: 0.3,
        clearcoatRoughness: 0.4,
      }),
    [],
  );

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const scale = isMobile ? 0.042 : 0.05;

    scene.traverse((object: Object3D) => {
      if (object instanceof Mesh) {
        object.scale.set(scale, scale, scale);
        object.material = glassMaterial;
        object.material.needsUpdate = true;
      }
    });

    return () => {
      glassMaterial.dispose();
    };
  }, [scene, glassMaterial]);

  useFrame(() => {
    const obj = modelRef.current;
    if (!obj) return;
    obj.rotation.x = baseRotation.x;
    obj.rotation.y = baseRotation.y - tubeAngleRef.current;
  });

  return (
    <group ref={modelRef} rotation={[baseRotation.x, baseRotation.y, 0]}>
      <primitive object={scene} position={[0.2, 0, -0.1]} />
    </group>
  );
}

function ImageTube({
  scrollTargetRef,
  spinVelocityRef,
  naturalDirRef,
  tubeAngleRef,
  onImageHover,
  onImageClick,
}: {
  scrollTargetRef: React.MutableRefObject<number>;
  spinVelocityRef: React.MutableRefObject<number>;
  naturalDirRef: React.MutableRefObject<number>;
  tubeAngleRef: React.MutableRefObject<number>;
  onImageHover: (projectName: string | null, texture: Texture | null, imageUrl: string | null) => void;
  onImageClick: (projectName: string, imageUrl: string, textureIndex: number) => void;
}) {
  const groupRef = useRef<Group>(null);
  const rowGroupRefs = useRef<Array<Group | null>>([]);
  const scrollCurrent = useRef(0);
  const angle = useRef(0);
  const isHovering = useRef(false);
  const speedMultiplier = useRef(1);

  const setCanvasCursor = useCallback((event: ThreeEvent<PointerEvent>, cursor: string) => {
    const canvas = event.nativeEvent.target as HTMLElement | null;
    if (canvas) canvas.style.cursor = cursor;
  }, []);

  const imageUrls = useMemo(
    () => ImageNames.map((name) => withBase(`assets/procedural/${name}`)),
    [],
  );

  const projectNames = useMemo(
    () => ImageNames.map((name, index) => `PROCEDURAL ${index + 1} · ${name}`),
    [],
  );

  const textures = useTexture(imageUrls);

  const handleHover = useCallback((projectName: string | null, textureIndex: number | null) => {
    isHovering.current = projectName !== null;
    const texture = textureIndex !== null ? textures[textureIndex] : null;
    const imageUrl = textureIndex !== null ? imageUrls[textureIndex] : null;
    onImageHover(projectName, texture, imageUrl);
  }, [imageUrls, onImageHover, textures]);

  const cols = 8;
  const rows = 5;
  const radius = 3;
  const tileW = 0.72;
  const tileH = 1;
  const ySpacing = 1.7;
  const repeatCount = 10;
  const totalRows = rows * repeatCount;
  const loopHeight = totalRows * ySpacing;
  const autoLiftSpeed = -0.12;

  const rowSpeed = useMemo(() => {
    const speeds: number[] = [];
    for (let r = 0; r < rows; r++) {
      const t = rows <= 1 ? 0 : r / (rows - 1);
      speeds.push(0.65 + t * 2);
    }
    return speeds;
  }, [rows]);

  const rowPositions = useMemo(() => {
    const out: Array<{ rowIndex: number; y: number; baseRow: number; rowOffset: number }> = [];
    for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
      const y = (rowIndex - (totalRows - 1) / 2) * ySpacing;
      const baseRow = rowIndex % rows;
      const rowOffset = baseRow % 2 === 0 ? 0 : 0.5;
      out.push({ rowIndex, y, baseRow, rowOffset });
    }
    return out;
  }, [rows, totalRows, ySpacing]);

  const textureStride = useMemo(() => {
    const length = imageUrls.length;
    if (length <= 1) return 1;

    let stride = Math.floor(length / 2) + 1;
    while (stride < length && gcd(stride, length) !== 1) {
      stride++;
    }

    return stride >= length ? 1 : stride;
  }, [imageUrls.length]);

  const getTextureAspect = useCallback((texture: Texture | undefined) => {
    if (!texture) return tileW / tileH;

    const image = texture.image as TextureSizeLike | undefined;
    const source = texture.source?.data as TextureSizeLike | undefined;

    const width =
      image?.naturalWidth ??
      image?.videoWidth ??
      image?.width ??
      source?.naturalWidth ??
      source?.videoWidth ??
      source?.width;

    const height =
      image?.naturalHeight ??
      image?.videoHeight ??
      image?.height ??
      source?.naturalHeight ??
      source?.videoHeight ??
      source?.height;

    if (!width || !height) return tileW / tileH;

    const aspect = width / height;
    if (!Number.isFinite(aspect) || aspect <= 0) return tileW / tileH;

    return Math.min(2.2, Math.max(0.45, aspect));
  }, [tileH, tileW]);

  useFrame((_state: unknown, dt: number) => {
    scrollTargetRef.current -= autoLiftSpeed * dt;
    scrollCurrent.current += (scrollTargetRef.current - scrollCurrent.current) * 0.12;

    if (scrollCurrent.current > loopHeight / 2) {
      scrollCurrent.current -= loopHeight;
      scrollTargetRef.current -= loopHeight;
    } else if (scrollCurrent.current < -loopHeight / 2) {
      scrollCurrent.current += loopHeight;
      scrollTargetRef.current += loopHeight;
    }

    const targetMultiplier = isHovering.current ? 0.05 : 1;
    speedMultiplier.current += (targetMultiplier - speedMultiplier.current) * 0.1;

    const damping = 0.92;
    spinVelocityRef.current *= Math.pow(damping, dt * 60);
    spinVelocityRef.current = Math.max(-2.0, Math.min(2.0, spinVelocityRef.current));

    const baseSpeed = naturalDirRef.current * 0.1 * speedMultiplier.current;
    angle.current += (baseSpeed + spinVelocityRef.current * speedMultiplier.current) * dt;
    tubeAngleRef.current = angle.current;

    const group = groupRef.current;
    if (!group) return;

    group.position.y = -scrollCurrent.current;

    for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
      const rowObj = rowGroupRefs.current[rowIndex];
      if (!rowObj) continue;
      const baseRow = rowIndex % rows;
      rowObj.rotation.y = angle.current * rowSpeed[baseRow];
    }
  });

  return (
    <group ref={groupRef}>
      {rowPositions.map(({ rowIndex, y, rowOffset }) => (
        <group
          key={rowIndex}
          position={[0, y, 0]}
          ref={(obj: Group | null) => {
            rowGroupRefs.current[rowIndex] = obj;
          }}
        >
          {Array.from({ length: cols }).map((_, col) => {
            const theta = ((col + rowOffset) / cols) * Math.PI * 2;
            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;
            const ry = -(theta + Math.PI / 2);
            const tileIndex = rowIndex * cols + col;
            const texIndex = (tileIndex * textureStride + rowIndex) % imageUrls.length;
            const texture = textures[texIndex];
            const aspect = getTextureAspect(texture);
            const planeW = tileH * aspect;

            return (
              <mesh
                key={col}
                position={[x, 0, z]}
                rotation={[0, ry, 0]}
                onPointerOver={(event) => {
                  event.stopPropagation();
                  setCanvasCursor(event, "pointer");
                  handleHover(projectNames[texIndex], texIndex);
                }}
                onPointerOut={(event) => {
                  event.stopPropagation();
                  setCanvasCursor(event, "auto");
                  handleHover(null, null);
                }}
                onClick={() => onImageClick(projectNames[texIndex], imageUrls[texIndex], texIndex)}
              >
                <planeGeometry args={[planeW, tileH]} />
                <meshBasicMaterial map={texture} toneMapped={false} side={DoubleSide} />
              </mesh>
            );
          })}
        </group>
      ))}
    </group>
  );
}

function CenterCopy3D({ title, description }: { title: string; description: string }) {
  const logoTexture = useTexture(SIDEFX_LOGO);

  const logoAspect = useMemo(() => {
    const image = logoTexture.image as { width?: number; height?: number } | undefined;
    const width = image?.width ?? 320;
    const height = image?.height ?? 100;
    const aspect = width / height;
    return Number.isFinite(aspect) && aspect > 0 ? aspect : 3.2;
  }, [logoTexture]);

  const logoWidth = 0.85;
  const logoHeight = logoWidth / logoAspect;

  return (
    <group position={[0, 0, 0]}>
      <mesh position={[0, 0.36, 0]}>
        <planeGeometry args={[logoWidth, logoHeight]} />
        <meshBasicMaterial map={logoTexture} transparent toneMapped={false} />
      </mesh>

      <Text
        font={HEADER_TITLE_FONT}
        position={[0, -0.02, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
        textAlign="center"
      >
        {title}
      </Text>
      <Text
        font={HEADER_TEXT_FONT}
        position={[0, -0.35, 0]}
        fontSize={0.08}
        color="#ebebeb"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
        lineHeight={1.35}
        textAlign="center"
      >
        {description}
      </Text>
    </group>
  );
}

export function RubensScene({
  centerTitle = "Procedural Art",
  centerDescription = "Procedural and generative art created in Houdini — each model starts from four points and evolves through SubD modeling, procedural generation, and transformations.",
}: RubensSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tubeScrollTarget = useRef(0);
  const tubeSpinVelocity = useRef(0);
  const tubeNaturalDir = useRef(1);
  const tubeAngle = useRef(0);
  const [hoveredImageUrl, setHoveredImageUrl] = useState<string | null>(null);
  const [previousImageUrl, setPreviousImageUrl] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<{
    name: string;
    imageUrl: string;
    index: number;
  } | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const closeOverlayTimeoutRef = useRef<number | null>(null);

  const onWheel = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
    tubeScrollTarget.current += event.deltaY * 0.002;
    tubeSpinVelocity.current += event.deltaY * 0.004;

    if (event.deltaY < 0) tubeNaturalDir.current = -1;
    else if (event.deltaY > 0) tubeNaturalDir.current = 1;
  }, []);

  const handleImageHover = useCallback(
    (_projectName: string | null, _texture: Texture | null, imageUrl: string | null) => {
      if (imageUrl !== hoveredImageUrl) {
        setPreviousImageUrl(hoveredImageUrl);
        setHoveredImageUrl(imageUrl);
      }
    },
    [hoveredImageUrl],
  );

  const handleImageClick = useCallback(
    (projectName: string, imageUrl: string, textureIndex: number) => {
      setSelectedProject({ name: projectName, imageUrl, index: textureIndex });

      requestAnimationFrame(() => {
        setShowOverlay(true);
      });
    },
    [],
  );

  const handleCloseProject = useCallback(() => {
    setShowOverlay(false);

    if (closeOverlayTimeoutRef.current != null) window.clearTimeout(closeOverlayTimeoutRef.current);
    closeOverlayTimeoutRef.current = window.setTimeout(() => {
      setSelectedProject(null);
    }, 1200);
  }, []);

  useEffect(() => {
    if (hoveredImageUrl && previousImageUrl) {
      const timer = setTimeout(() => {
        setPreviousImageUrl(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hoveredImageUrl, previousImageUrl]);

  useEffect(() => {
    return () => {
      if (closeOverlayTimeoutRef.current != null) window.clearTimeout(closeOverlayTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className="sceneRoot"
      ref={containerRef}
      onWheel={onWheel}
    >

      {previousImageUrl && (
        <div
          className="background-image-blur background-image-previous"
          style={{ backgroundImage: `url(${previousImageUrl})` }}
        />
      )}
      {hoveredImageUrl && (
        <div
          className="background-image-blur background-image-current"
          style={{ backgroundImage: `url(${hoveredImageUrl})` }}
        />
      )}

      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        dpr={[1, 2]}
        frameloop="always"
        onCreated={(state: RootState) => {
          state.camera.lookAt(0, 0, 0);
          state.gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          <Environment preset="studio" blur={10.5} />

          <CenterCopy3D title={centerTitle} description={centerDescription} />

          <ImageTube
            scrollTargetRef={tubeScrollTarget}
            spinVelocityRef={tubeSpinVelocity}
            naturalDirRef={tubeNaturalDir}
            tubeAngleRef={tubeAngle}
            onImageHover={handleImageHover}
            onImageClick={handleImageClick}
          />

          {ENABLE_HELMET_MODEL && <HelmetModel tubeAngleRef={tubeAngle} />}
        </Suspense>
      </Canvas>

      {selectedProject && (
        <div
          className={`project-single-view ${showOverlay ? "visible" : "hidden"}`}
          style={{ backgroundImage: `url(${selectedProject.imageUrl})`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          onClick={handleCloseProject}
        >

          <div className="project-content">
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.name}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div style={{position:'absolute', bottom: '40px', }}>
            <div className="dialog-close-btn" onClick={handleCloseProject}>Close</div>
          </div>
        </div>
      )}
      <div className="whiteEdgeGradient" aria-hidden="true" />
      <Loader />
    </div>
  );
}

if (ENABLE_HELMET_MODEL) {
  useGLTF.preload(withBase("models/rubens.glb"));
}