export default function LiquidGlassProvider() {
  const renderFilter = (id, scale, surfaceScale, specularConstant) => (
    <filter
      id={id}
      x="-12%"
      y="-12%"
      width="124%"
      height="124%"
      colorInterpolationFilters="sRGB"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.009 0.013"
        numOctaves="1"
        seed="5"
        result="turbulence"
      />
      <feGaussianBlur in="turbulence" stdDeviation="2.4" result="softMap" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale={scale}
        xChannelSelector="R"
        yChannelSelector="G"
        result="distorted"
      />
      <feSpecularLighting
        in="softMap"
        surfaceScale={surfaceScale}
        specularConstant={specularConstant}
        specularExponent="72"
        lightingColor="white"
        result="specular"
      >
        <fePointLight x="-180" y="-220" z="260" />
      </feSpecularLighting>
      <feComposite
        in="specular"
        in2="SourceAlpha"
        operator="in"
        result="containedSpecular"
      />
      <feBlend
        in="containedSpecular"
        in2="distorted"
        mode="screen"
      />
    </filter>
  );

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      className="liquid-glass-defs"
    >
      {renderFilter("glass-distortion-light", 32, 3.6, 0.78)}
      {renderFilter("glass-distortion-dark", 24, 3, 0.65)}
    </svg>
  );
}
