import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface RobotCursorFollowerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const RobotCursorFollower = ({
  className,
  size = "lg",
}: RobotCursorFollowerProps) => {
  // Sizing scales based on the provided image proportions
  const sizes = {
    sm: "w-40 h-48",
    md: "w-60 h-72",
    lg: "w-80 h-96",
  };

  // Cursor tracking
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth movement with slightly heavier damping for a metallic feel
  const smoothX = useSpring(cursorX, { stiffness: 40, damping: 18 });
  const smoothY = useSpring(cursorY, { stiffness: 40, damping: 18 });

  // Map cursor position to robot eye/head movement ranges
  const headTiltX = useTransform(smoothX, [-300, 300], [-15, 15]);
  const headTiltY = useTransform(smoothY, [-300, 300], [-10, 10]);

  // Eyes move slightly more than the head for realistic tracking
  const eyeFeaturesX = useTransform(smoothX, [-300, 300], [-8, 8]);
  const eyeFeaturesY = useTransform(smoothY, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - window.innerWidth / 2);
      cursorY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Reusable Bronze Metallic Gradient & Shadow Styles
  const bronzeMetallicStyle =
    "bg-gradient-to-tr from-[#2a1a0a] via-[#7c5a3a] to-[#c99865] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),_inset_0_-5px_15px_rgba(0,0,0,0.8),_0_10px_30px_rgba(0,0,0,0.5)]";
  
  const whiteGlowStyle = "shadow-[0_0_20px_#fff,0_0_40px_#fff,inset_0_0_10px_#fff]";
  const faceFeatureGlow = "drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff)";

  return (
    <motion.div
      className={cn(
        "relative mx-auto flex items-center justify-center",
        sizes[size],
        className
      )}
      style={{ perspective: 1200 }}
    >
      {/* Robot Container - Adds floating animation and tilt */}
      <motion.div
        className="relative w-full h-full flex flex-col items-center"
        style={{
          rotateY: headTiltX,
          rotateX: headTiltY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* --- HEAD SECTION --- */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center z-20">
          {/* Ear - Left */}
          <div className={cn("absolute left-[2%] w-[12%] h-[50%] rounded-l-3xl flex items-center justify-end pr-1", bronzeMetallicStyle)}>
             <div className={cn("w-2 h-[70%] bg-white rounded-full", whiteGlowStyle)} />
          </div>
          
          {/* Ear - Right */}
          <div className={cn("absolute right-[2%] w-[12%] h-[50%] rounded-r-3xl flex items-center justify-start pl-1", bronzeMetallicStyle)}>
             <div className={cn("w-2 h-[70%] bg-white rounded-full", whiteGlowStyle)} />
          </div>

          {/* Main Head Sphere */}
          <div
            className={cn(
              "relative w-[85%] h-full rounded-[45%] p-4 flex items-center justify-center overflow-hidden",
              bronzeMetallicStyle
            )}
          >
            {/* Face Screen Area (Glossy Black) */}
            <div className="relative w-full h-full bg-black rounded-[40%] flex items-center justify-center overflow-hidden shadow-[inset_0_10px_20px_rgba(255,255,255,0.15),_inset_0_-10px_30px_rgba(0,0,0,0.9)]">
              
              {/* Reflective Glare on screen */}
              <div className="absolute top-4 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-full blur-md rotate-[-15deg]" />

              {/* Moving Face Features Container */}
              <motion.div
                className="relative w-full h-full flex flex-col items-center justify-center"
                style={{ x: eyeFeaturesX, y: eyeFeaturesY }}
              >
                {/* Eyes Container */}
                <div className="flex space-x-12 mb-6">
                  {/* Left Eye (Arc) */}
                  <svg width="50" height="30" viewBox="0 0 50 30" style={{ filter: faceFeatureGlow }}>
                    <path d="M 5 25 C 5 5, 45 5, 45 25" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                   {/* Right Eye (Arc) */}
                  <svg width="50" height="30" viewBox="0 0 50 30" style={{ filter: faceFeatureGlow }}>
                    <path d="M 5 25 C 5 5, 45 5, 45 25" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Smile (Arc) */}
                 <svg width="100" height="40" viewBox="0 0 100 40" style={{ filter: faceFeatureGlow }}>
                    <path d="M 10 5 C 10 35, 90 35, 90 5" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
              </motion.div>
            </div>
          </div>
        </div>

        {/* --- BODY SECTION --- */}
        <div className="relative w-[60%] aspect-square mt-[-10%] z-10">
           {/* Main Torso */}
          <div
            className={cn(
              "w-full h-full rounded-[40%_40%_100%_100%] flex items-center justify-center pt-8",
              bronzeMetallicStyle
            )}
          >
            {/* Central Glowing Ring */}
            <div className={cn("w-1/3 aspect-square rounded-full border-[10px] border-white bg-transparent", whiteGlowStyle)} />
          </div>

           {/* --- ARMS --- */}
           {/* Left Shoulder Joint */}
           <div className={cn("absolute -left-[25%] top-[15%] w-[35%] h-[35%] rounded-full z-0", bronzeMetallicStyle)} />
           {/* Left Forearm */}
           <div className={cn("absolute -left-[28%] top-[40%] w-[30%] h-[50%] rounded-[30%_30%_50%_50%] origin-top rotate-12", bronzeMetallicStyle)} />

           {/* Right Shoulder Joint */}
           <div className={cn("absolute -right-[25%] top-[15%] w-[35%] h-[35%] rounded-full z-0", bronzeMetallicStyle)} />
            {/* Right Forearm */}
           <div className={cn("absolute -right-[28%] top-[40%] w-[30%] h-[50%] rounded-[30%_30%_50%_50%] origin-top -rotate-12", bronzeMetallicStyle)} />
        </div>

      </motion.div>
    </motion.div>
  );
};