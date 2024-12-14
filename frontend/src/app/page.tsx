import React from "react";
import { DotBackgroundDemo } from "@/components/ui/background";
import { SparklesPreview } from "@/hooks/particles";

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white h-full w-max">
      <SparklesPreview/>
    </div>
  );
}
