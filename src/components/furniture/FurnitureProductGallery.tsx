import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, X } from 'lucide-react';
import { FurnitureImage } from './FurnitureImage';
interface FurnitureProductGalleryProps {
  images: string[];
  productName: string;
  category?: string;
  productSlug?: string;
}

export const FurnitureProductGallery: React.FC<FurnitureProductGalleryProps> = ({
  images,
  productName,
  category = 'default',
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isInspecting, setIsInspecting] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef({ x: 0, y: 0 });

  // Touch swipe handling for horizontal sliding
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isSwiping = useRef(false);

  // Preserve all original gallery images in exact slot order
  const cleanImages = images && images.length > 0 ? images.filter(Boolean) : [];
  const currentImage = cleanImages[selectedIndex] || cleanImages[0] || '';

  // Slide navigation
  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % cleanImages.length);
  }, [cleanImages.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + cleanImages.length) % cleanImages.length);
  }, [cleanImages.length]);

  // Touch gestures on main slideshow
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isSwiping.current || touchStartX.current === null || touchStartY.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Horizontal swipe threshold (ignore vertical scrolls)
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext(); // Slide left -> show next
      } else {
        handlePrev(); // Slide right -> show prev
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
    isSwiping.current = false;
  };

  // Keyboard navigation on main gallery
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openInspection(selectedIndex);
    }
  };

  // Open individual inspection mode on the same screen
  const openInspection = (index: number) => {
    setSelectedIndex(index);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setIsInspecting(true);
  };

  const closeInspection = () => {
    setIsInspecting(false);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Zoom controls
  const handleZoomIn = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomLevel((prev) => Math.min(3, +(prev + 0.5).toFixed(1)));
  };

  const handleZoomOut = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomLevel((prev) => {
      const next = Math.max(1, +(prev - 0.5).toFixed(1));
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Pan handling when zoomed in inspector
  const handlePanMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsPanning(true);
    panStartRef.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
  };

  const handlePanMouseMove = (e: React.MouseEvent) => {
    if (!isPanning || zoomLevel <= 1) return;
    setPanOffset({
      x: e.clientX - panStartRef.current.x,
      y: e.clientY - panStartRef.current.y,
    });
  };

  const handlePanMouseUp = () => {
    setIsPanning(false);
  };

  // Wheel zoom in inspector
  const handleWheel = (e: React.WheelEvent) => {
    if (!isInspecting) return;
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  // Close inspector on Escape key & arrow navigation
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (!isInspecting) return;
      if (e.key === 'Escape') {
        closeInspection();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
        setZoomLevel(1);
        setPanOffset({ x: 0, y: 0 });
      } else if (e.key === 'ArrowRight') {
        handleNext();
        setZoomLevel(1);
        setPanOffset({ x: 0, y: 0 });
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      }
    };

    if (isInspecting) {
      window.addEventListener('keydown', handleGlobalKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
      document.body.style.overflow = '';
    };
  }, [isInspecting, handleNext, handlePrev]);

  return (
    <div className="flex flex-col gap-4">
      {/* 1. Main Smooth Horizontal Slideshow Viewport (original 16:9 ratio, object-fit: contain, width: 100%, neutral clean bg) */}
      <div
        tabIndex={0}
        role="region"
        aria-label={`${productName} image slideshow`}
        className="relative aspect-[16/9] w-full bg-[#FAF8F5] border border-[#E6DFD5] overflow-hidden rounded-xs cursor-pointer group select-none focus:outline-none focus:ring-1 focus:ring-[#9A6F3E]/40"
        style={{ aspectRatio: '16 / 9', width: '100%', backgroundColor: '#FAF8F5' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
      >
        {/* Sliding Track: Slides horizontally right to left */}
        <div
          className="flex w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
        >
          {cleanImages.map((img, idx) => (
            <div
              key={`${img}-${idx}`}
              onClick={() => openInspection(idx)}
              className="w-full h-full shrink-0 relative flex items-center justify-center bg-[#FAF8F5]"
              style={{ backgroundColor: '#FAF8F5' }}
            >
              <FurnitureImage
                src={img}
                alt={`${productName} - view ${idx + 1}`}
                category={category}
                className="w-full h-full object-contain object-center pointer-events-none"
                style={{ objectFit: 'contain', objectPosition: 'center', width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2. Visual Thumbnails Row (object-contain, consistent 16:9 boxes, neutral bg) */}
      {cleanImages.length > 1 && (
        <div
          className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-1 scrollbar-none"
          role="tablist"
          aria-label="Product thumbnails"
        >
          {cleanImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={selectedIndex === idx}
              aria-label={`View angle ${idx + 1} of ${cleanImages.length}`}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 sm:w-24 aspect-[16/9] rounded-xs overflow-hidden shrink-0 border-2 bg-[#FAF8F5] p-1 transition-all cursor-pointer ${
                selectedIndex === idx
                  ? 'border-[#18181B] shadow-md ring-1 ring-[#18181B] bg-white'
                  : 'border-[#E6DFD5] opacity-75 hover:opacity-100 hover:border-[#87786B]'
              }`}
            >
              <FurnitureImage
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                category={category}
                className="w-full h-full object-contain object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* 3. Individual Product Image Inspection View on the Same Screen with Zoom In/Out */}
      {isInspecting && (
        <div
          className="fixed inset-0 z-50 bg-[#18181B]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeInspection}
        >
          {/* Inspection Header */}
          <div
            className="flex items-center justify-between z-20 gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C5A880] block">
                Detailed Inspection &bull; Uncropped View
              </span>
              <h3 className="font-serif text-base sm:text-xl text-[#FAF9F5] font-normal truncate max-w-xs sm:max-w-md">
                {productName}
              </h3>
            </div>

            {/* Zoom Controls & Close Button */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#27272A]/90 p-1 sm:p-1.5 rounded-xs border border-white/10 shadow-lg">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-1.5 sm:p-2 text-[#FAF9F5] hover:text-[#C5A880] disabled:opacity-30 disabled:hover:text-[#FAF9F5] transition-colors cursor-pointer rounded-xs"
                title="Zoom Out (-)"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono font-semibold text-[#FAF9F5] px-1.5 min-w-[44px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="p-1.5 sm:p-2 text-[#FAF9F5] hover:text-[#C5A880] disabled:opacity-30 disabled:hover:text-[#FAF9F5] transition-colors cursor-pointer rounded-xs"
                title="Zoom In (+)"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {zoomLevel > 1 && (
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1.5 sm:p-2 text-[#FAF9F5] hover:text-[#C5A880] transition-colors cursor-pointer rounded-xs border-l border-white/10 ml-0.5"
                  title="Reset Zoom (100%)"
                  aria-label="Reset Zoom"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                type="button"
                onClick={closeInspection}
                className="p-1.5 sm:p-2 text-[#FAF9F5] hover:bg-white/15 transition-colors cursor-pointer rounded-xs border-l border-white/10 ml-0.5"
                title="Close Viewer (Esc)"
                aria-label="Close Viewer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Inspection Canvas */}
          <div
            className={`relative flex-1 w-full flex items-center justify-center my-3 overflow-hidden select-none ${
              zoomLevel > 1 ? (isPanning ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
            }`}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handlePanMouseDown}
            onMouseMove={handlePanMouseMove}
            onMouseUp={handlePanMouseUp}
            onMouseLeave={handlePanMouseUp}
            onWheel={handleWheel}
            onDoubleClick={() => {
              if (zoomLevel === 1) {
                setZoomLevel(2);
              } else {
                handleResetZoom();
              }
            }}
          >
            <div
              className="w-full h-full max-w-5xl max-h-[75vh] flex items-center justify-center transition-transform duration-100 ease-out"
              style={{
                transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
              }}
            >
              <img
                src={currentImage}
                alt={`${productName} detailed inspect view ${selectedIndex + 1}`}
                className="max-w-full max-h-full object-contain pointer-events-none select-none"
                draggable={false}
              />
            </div>

            {zoomLevel > 1 && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#18181B]/80 text-[#FAF9F5] text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-xs pointer-events-none border border-white/10 shadow-md">
                Drag to pan &bull; Scroll or tap +/- to zoom
              </div>
            )}
          </div>

          {/* Inspection Bottom Angle Thumbnails */}
          <div
            className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pt-2 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {cleanImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedIndex(idx);
                  setZoomLevel(1);
                  setPanOffset({ x: 0, y: 0 });
                }}
                className={`relative w-16 sm:w-20 aspect-[16/9] rounded-xs overflow-hidden shrink-0 border-2 bg-[#27272A] p-0.5 transition-all cursor-pointer ${
                  selectedIndex === idx
                    ? 'border-[#C5A880] ring-1 ring-[#C5A880] scale-105'
                    : 'border-white/20 opacity-60 hover:opacity-100'
                }`}
                title={`Switch to view ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-contain object-center"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
