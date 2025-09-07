"use client";

import { cn } from "../../lib/utils"; 
import React, { useEffect, useState, useCallback } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasRevealEffect";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {

  items: (string | { quote: string; name: string; title: string })[];

  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

 const [start, setStart] = useState(false);
 const [isInitialized, setIsInitialized] = useState(false);

  // function addAnimation() {
  //   if (containerRef.current && scrollerRef.current) {
  //     const scrollerContent = Array.from(scrollerRef.current.children);
  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true);
  //       scrollerRef.current?.appendChild(duplicatedItem);
  //     });
  //     getDirection();
  //     getSpeed();
  //     setStart(true);
  //   }
  // }

    const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

    const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current && !isInitialized) {
      // Clear any existing duplicates first
      const existingItems = Array.from(scrollerRef.current.children);
      const originalItemCount = items.length;
      
      // Remove any items beyond the original count (duplicates)
      if (existingItems.length > originalItemCount) {
        for (let i = originalItemCount; i < existingItems.length; i++) {
          if (scrollerRef.current.children[i]) {
            scrollerRef.current.removeChild(scrollerRef.current.children[i]);
          }
        }
      }
      
      // Add new duplicates
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      
      getDirection();
      getSpeed();
      setStart(true);
      setIsInitialized(true);
    }
  }, [getDirection, getSpeed, items.length, isInitialized]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  // Reset initialization when items change
  useEffect(() => {
    setIsInitialized(false);
  }, [items]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[200px] max-w-full shrink-0 rounded-xl border-2 text-center px-4 py-3 "
            style={{
              borderColor: 'hsl(217.2 32.6% 17.5%)',
              backgroundColor: 'transparent'
            }}
          >
            {typeof item === "string" ? (
              <span className="text-sm font-medium text-neutral-800 dark:text-gray-100">
                {item}
              </span>
            ) : (
              <blockquote>
                <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-col">
                  <span className="text-sm text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </div>
              </blockquote>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  
};

const SkillBadge = ({ skill }: { skill: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  return (
    <li
      className="relative w-[150px] max-w-full shrink-0 rounded-xl border-2 px-4 py-3 text-center cursor-pointer"
      style={{
        borderColor: 'hsl(217.2 32.6% 17.5%)',
        backgroundColor: 'transparent'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: 'hsl(217.2 32.6% 17.5%)',
          maskImage: useMotionTemplate`
            radial-gradient(
              150px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={2}
          />
        )}
      </motion.div>
      <span className="text-sm font-medium text-white relative z-10">
        {skill}
      </span>
    </li>
  ); 
}
