import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Shared content width for the navbar and every section. Max-width steps up
 * at each Tailwind breakpoint (sm/md/lg/xl) instead of a single fixed value,
 * capping at 1180px (xl) to match the navbar.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:max-w-[640px] sm:px-8 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1300px] 2xl:max-w-[1400px] ${className}`}
    >
      {children}
    </div>
  );
}
