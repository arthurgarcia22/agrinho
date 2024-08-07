import { cn } from "@/lib/utils";
import * as React from "react";
import Image from "next/image";

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="relative h-20 aspect-video">
      <Image src="/logo.png" alt="logo" fill className="object-contain" />
    </div>
  );
}

export default Logo;
