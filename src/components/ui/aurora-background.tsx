"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "transition-bg relative flex min-h-[90vh] flex-col items-center justify-center bg-zinc-950 text-white",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,#6b7280_10%,#9ca3af_15%,#d1d5db_20%,#e5e7eb_25%,#f3f4f6_30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
            "--silver-gradient":
              "repeating-linear-gradient(100deg,#374151_0%,#374151_7%,transparent_10%,transparent_12%,#374151_16%)",

            "--gray-500": "#6b7280",
            "--gray-400": "#9ca3af",
            "--gray-300": "#d1d5db",
            "--gray-200": "#e5e7eb",
            "--gray-100": "#f3f4f6",
            "--gray-700": "#374151",
            "--black": "#000",
            "--transparent": "transparent",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--silver-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-60 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--gray-500)_10%,var(--gray-400)_15%,var(--gray-300)_20%,var(--gray-200)_25%,var(--gray-100)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--silver-gradient:repeating-linear-gradient(100deg,var(--gray-700)_0%,var(--gray-700)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--gray-700)_16%)] after:absolute after:inset-0 after:[background-image:var(--silver-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-overlay after:content-[""]`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
