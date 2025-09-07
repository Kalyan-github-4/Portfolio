"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { CanvasRevealEffect } from "../animation/CanvasRevealEffect"; 
import { useState } from "react";

export const SkillCategoryCard = ({ 
  category, 
  categoryIndex, 
  isVisible 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="p-8 rounded-2xl border border-border/50 group/spotlight relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(222 84% 4.9%) 0%, hsl(217.2 32.6% 20%) 100%)"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: 'hsl(217.2 32.6% 17.5%)',
          maskImage: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
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
            dotSize={3}
          />
        )}
      </motion.div>

      {/* Category Header */}
      <div className="flex items-center mb-6 relative z-10">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
          <category.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
      </div>

      {/* Skills List */}
      <div className="space-y-4 relative z-10">
        {category.skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1500 ease-out`}
                style={{
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${categoryIndex * 300 + skillIndex * 150}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};