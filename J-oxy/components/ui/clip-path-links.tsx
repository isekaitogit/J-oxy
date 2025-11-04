import React from "react";
import {
  SiGmail,
  SiX,
  SiInstagram,
  SiFacebook,
  SiDiscord,
} from "react-icons/si";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Rocket,
} from "lucide-react";
import { useAnimate } from "framer-motion";

export const ClipPathLinks = () => {
  return (
    <div className="w-full space-y-3">
      {/* Featured Project - Full Width */}
      <div className="border divide-cyan-400/20 border-cyan-400/30 rounded-lg overflow-hidden">
        <LinkBox 
          Icon={Rocket} 
          href="https://ltus-acadamy--paji-duolingo.europe-west4.hosted.app/"
          label="AI Platform"
          subtitle="Created by me"
        />
      </div>
      
      {/* Social Media Grid - Wider Layout */}
      <div className="border border-cyan-400/30 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-y divide-cyan-400/20">
          <LinkBox Icon={SiX} href="https://twitter.com/Jay_Mathukiya_" label="Twitter" />
          <LinkBox Icon={Github} href="https://github.com/jay-021/" label="GitHub" />
          <LinkBox Icon={Linkedin} href="https://www.linkedin.com/in/jay-mathukiya-" label="LinkedIn" />
          <LinkBox Icon={SiInstagram} href="https://www.instagram.com/jay_mathukiya_021" label="Instagram" />
          <LinkBox Icon={SiFacebook} href="https://www.facebook.com/jayp021" label="Facebook" />
          <LinkBox Icon={SiDiscord} href="https://discord.gg/HTB2qC6r" label="Discord" />
        </div>
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

interface LinkBoxProps {
  Icon?: React.ComponentType<{ className?: string }>;
  href: string;
  imgSrc?: string;
  className?: string;
  label?: string;
  subtitle?: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href, imgSrc, className, label, subtitle }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as const,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as const,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as const,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as const,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-24 w-full place-content-center sm:h-32 md:h-40 text-cyan-400 bg-black hover:text-cyan-300 transition-colors"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt="custom icon"
            className={className ?? "max-h-12 sm:max-h-16 md:max-h-24 object-contain"}
          />
        ) : Icon ? (
          <Icon className="text-2xl sm:text-4xl md:text-5xl" />
        ) : null}
        {label && (
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-sm sm:text-base md:text-lg font-semibold text-center px-2 leading-tight">
              {label}
            </span>
            {subtitle && (
              <span className="text-xs sm:text-sm text-cyan-300 text-center px-2 leading-tight">
                {subtitle}
              </span>
            )}
          </div>
        )}
      </div>

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-gradient-to-br from-cyan-400 to-cyan-500 text-black transition-colors duration-300"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt="custom icon hover"
              className={className ?? "max-h-12 sm:max-h-16 md:max-h-24 object-contain"}
            />
          ) : Icon ? (
            <Icon className="text-2xl sm:text-4xl md:text-5xl" />
          ) : null}
          {label && (
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-sm sm:text-base md:text-lg font-bold text-center px-2 leading-tight">
                {label}
              </span>
              {subtitle && (
                <span className="text-xs sm:text-sm text-black/80 font-medium text-center px-2 leading-tight">
                  {subtitle}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};
