export type EarthBreakpoint = "mobile" | "tablet" | "desktop" | "wide";

export type EarthLayoutPreset = {
  minWidth: number;
  radiusFactor: number;
  scrollRangeVh: number;
  networkRangeVh: number;
  initial: {
    xFactor: number;
    yRadiusOffset: number;
    scale: number;
  };
  story: {
    xFactor: number;
    yFactor: number;
    scale: number;
  };
  final: {
    xFactor: number;
    yFactor: number;
    scale: number;
  };
};

export const EARTH_LAYOUT: Record<EarthBreakpoint, EarthLayoutPreset> = {
  mobile: {
    minWidth: 0,
    radiusFactor: 0.42,
    scrollRangeVh: 2.6,
    networkRangeVh: 1.2,
    initial: {
      xFactor: 0,
      yRadiusOffset: 0.55,
      scale: 1,
    },
    story: {
      xFactor: 0,
      yFactor: -0.02,
      scale: 0.72,
    },
    final: {
      xFactor: 0,
      yFactor: 0.12,
      scale: 0.58,
    },
  },
  tablet: {
    minWidth: 768,
    radiusFactor: 0.4,
    scrollRangeVh: 3,
    networkRangeVh: 1.2,
    initial: {
      xFactor: 0,
      yRadiusOffset: 0.5,
      scale: 1.04,
    },
    story: {
      xFactor: 0,
      yFactor: -0.03,
      scale: 0.7,
    },
    final: {
      xFactor: 0.06,
      yFactor: 0.14,
      scale: 0.58,
    },
  },
  desktop: {
    minWidth: 1024,
    radiusFactor: 0.38,
    scrollRangeVh: 3.2,
    networkRangeVh: 1.25,
    initial: {
      xFactor: 0,
      yRadiusOffset: 0.46,
      scale: 1.06,
    },
    story: {
      xFactor: 0.18,
      yFactor: 0.08,
      scale: 0.72,
    },
    final: {
      xFactor: 0.18,
      yFactor: 0.18,
      scale: 0.62,
    },
  },
  wide: {
    minWidth: 1440,
    radiusFactor: 0.36,
    scrollRangeVh: 3.4,
    networkRangeVh: 1.35,
    initial: {
      xFactor: 0,
      yRadiusOffset: 0.44,
      scale: 1.08,
    },
    story: {
      xFactor: 0.2,
      yFactor: 0.08,
      scale: 0.7,
    },
    final: {
      xFactor: 0.2,
      yFactor: 0.18,
      scale: 0.6,
    },
  },
};

const ORDERED_BREAKPOINTS: EarthBreakpoint[] = ["mobile", "tablet", "desktop", "wide"];

export function getEarthLayoutPreset(width: number) {
  return ORDERED_BREAKPOINTS.reduce((current, breakpoint) => {
    const preset = EARTH_LAYOUT[breakpoint];
    return width >= preset.minWidth ? preset : current;
  }, EARTH_LAYOUT.mobile);
}
