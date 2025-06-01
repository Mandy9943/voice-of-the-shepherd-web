"use client";

import { useCallback, useEffect, useRef } from "react";

interface ImageAsset {
  src: string;
  alt: string;
  baseWidth: number;
  baseHeight: number;
}

interface CanvasImage {
  img: HTMLImageElement;
  x: number; // Position (0 to 1, percentage of canvas width)
  y: number; // Position (0 to 1, percentage of canvas height)
  scale: number; // Scale factor
  opacity: number; // Opacity (0 to 1)
  baseWidth: number; // Original image width for aspect ratio
  baseHeight: number; // Original image height for aspect ratio
  rotation: number; // Rotation in degrees
}

const imageAssets: ImageAsset[] = [
  {
    src: "/stained-glass-religious-detail.png?query=ethereal+stained+glass+detail",
    alt: "Stained glass window",
    baseWidth: 400,
    baseHeight: 600,
  },
  {
    src: "/dove-light-spiritual.png?query=glowing+dove+spiritual+light",
    alt: "Dove symbol",
    baseWidth: 500,
    baseHeight: 500,
  },
  {
    src: "/serene-landscape-cross.png?query=serene+landscape+distant+cross+misty",
    alt: "Calm landscape with cross",
    baseWidth: 650,
    baseHeight: 450,
  },
  {
    src: "/hands-in-prayer.png?query=softly+lit+hands+in+prayer",
    alt: "Hands in prayer",
    baseWidth: 300,
    baseHeight: 400,
  },
  {
    src: "/ancient-religious-scroll.png?query=ancient+scroll+texture+soft+focus",
    alt: "Ancient scroll texture",
    baseWidth: 550,
    baseHeight: 350,
  },
  {
    src: "/abstract-spiritual-light.png",
    alt: "Ethereal light beams",
    baseWidth: 350,
    baseHeight: 500,
  },
  {
    src: "/celestial-sky-soft-clouds.png",
    alt: "Celestial sky",
    baseWidth: 500,
    baseHeight: 400,
  },
  {
    src: "/placeholder-osxcj.png",
    alt: "Illuminated scripture",
    baseWidth: 400,
    baseHeight: 600,
  },
];

export function ImageCollageCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<CanvasImage[]>([]);
  const animationFrameId = useRef<number | undefined>(undefined);
  const loadedImagesCount = useRef(0);
  // lastTimeRef and deltaTime are no longer needed for static images, but requestAnimationFrame loop is kept for resize handling.

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      imagesRef.current.forEach((imgObj) => {
        if (imgObj.img.complete && imgObj.img.naturalHeight !== 0) {
          // Images are static, so no position updates here based on velocity or time.

          const baseScaleDim =
            Math.min(canvas.width, canvas.height) * imgObj.scale;
          let drawWidth, drawHeight;
          const imgAR = imgObj.baseWidth / imgObj.baseHeight;
          if (imgAR > 1) {
            drawWidth = baseScaleDim;
            drawHeight = baseScaleDim / imgAR;
          } else {
            drawHeight = baseScaleDim;
            drawWidth = baseScaleDim * imgAR;
          }

          const xPos = imgObj.x * canvas.width;
          const yPos = imgObj.y * canvas.height;

          ctx.save();
          ctx.translate(xPos, yPos);
          ctx.rotate((imgObj.rotation * Math.PI) / 180);
          ctx.globalAlpha = imgObj.opacity;
          ctx.drawImage(
            imgObj.img,
            -drawWidth / 2,
            -drawHeight / 2,
            drawWidth,
            drawHeight
          );
          ctx.restore();
        }
      });
    },
    []
  );

  const animate = useCallback(() => {
    // Simplified animation loop: just draw.
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    if (loadedImagesCount.current === imageAssets.length) {
      draw(ctx, canvas);
    }
    animationFrameId.current = requestAnimationFrame(animate);
  }, [draw]);

  const setupCanvasAndImages = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    // Initialize images with random positions if not already done
    if (
      imagesRef.current.length === 0 &&
      loadedImagesCount.current === imageAssets.length
    ) {
      imageAssets.forEach((asset) => {
        const img = new Image();
        img.crossOrigin = "anonymous"; // Already set in useEffect, but good to be mindful
        img.src = asset.src;
        // Ensure image is loaded before pushing to imagesRef if it wasn't handled by the initial load logic
        // This part is mostly handled by the useEffect loading logic.
        // Here we just ensure that if imagesRef is empty but all assets are loaded, we populate it.
        // This scenario is less likely with the current useEffect structure but good for robustness.
        const existingImage = imagesRef.current.find(
          (i) => i.img.src === img.src
        );
        if (!existingImage) {
          // This check might be redundant if useEffect handles all loading
          // This logic is now primarily in useEffect's img.onload
        }
      });
    }

    // Redraw canvas
    if (loadedImagesCount.current === imageAssets.length) {
      draw(ctx, canvas);
    }

    // Start animation loop if not already started (primarily for resize handling now)
    if (
      !animationFrameId.current &&
      loadedImagesCount.current === imageAssets.length
    ) {
      animationFrameId.current = requestAnimationFrame(animate);
    }
  }, [animate, draw]);

  useEffect(() => {
    // Reset for potential re-renders or HMR
    imagesRef.current = [];
    loadedImagesCount.current = 0;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = undefined;
    }

    imageAssets.forEach((asset) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = asset.src;
      img.onload = () => {
        loadedImagesCount.current++;
        // Check if this image (by src) is already processed to avoid duplicates if effect re-runs
        if (!imagesRef.current.find((i) => i.img.src === img.src)) {
          imagesRef.current.push({
            img,
            x: Math.random() * 0.8 + 0.1, // Avoid edges: 0.1 to 0.9
            y: Math.random() * 0.8 + 0.1, // Avoid edges: 0.1 to 0.9
            scale: 0.18 + Math.random() * 0.17, // Range: 0.18 to 0.35
            opacity: 0.45 + Math.random() * 0.35, // Range: 0.45 to 0.8
            rotation: (Math.random() - 0.5) * 30, // Range: -15 to 15 degrees
            baseWidth: asset.baseWidth,
            baseHeight: asset.baseHeight,
          });
        }
        if (loadedImagesCount.current === imageAssets.length) {
          // All images loaded, now setup canvas and start animation loop
          setupCanvasAndImages();
        }
      };
      img.onerror = () => {
        loadedImagesCount.current++; // Still count it to not block setup
        console.error("Failed to load image:", asset.src);
        if (loadedImagesCount.current === imageAssets.length) {
          setupCanvasAndImages();
        }
      };
    });

    window.addEventListener("resize", setupCanvasAndImages);
    // Initial setup call, will be effective once images are loaded
    setupCanvasAndImages();

    return () => {
      window.removeEventListener("resize", setupCanvasAndImages);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = undefined;
      }
      // Clear refs on unmount
      imagesRef.current = [];
      loadedImagesCount.current = 0;
    };
  }, [setupCanvasAndImages]); // setupCanvasAndImages is memoized

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 opacity-70"
    />
  );
}
