import React from "react";

interface DotBackgroundDemoProps {
  children: React.ReactNode;
}

export function DotBackgroundDemo({ children }: DotBackgroundDemoProps) {
  return (
    <div className="h-[50rem] w-full bg-white dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient mask */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* Text */}
      <div className="relative z-20">
        <p className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-500 dark:to-gray-700 py-8">
          {children}
        </p>
      </div>
    </div>
  );
}
