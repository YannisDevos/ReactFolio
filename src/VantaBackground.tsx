import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    VANTA: any;
  }
}

const VantaBackground: React.FC<{ children?: React.ReactNode }> = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        window.VANTA.FOG({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x7077d,
          midtoneColor: 0xffd1,
          lowlightColor: 0x12e6bd,
          baseColor: 0xb3b3b3,
        }),
      );
    }

    return () => vantaEffect?.destroy();
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

export default VantaBackground;
