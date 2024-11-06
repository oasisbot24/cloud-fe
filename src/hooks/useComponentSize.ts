import { useEffect, useRef, useState } from "react";

interface ComponentSize {
  width: number;
  height: number;
}

interface ComponentSizeHook {
  componentRef: React.RefObject<HTMLDivElement>;
  size: ComponentSize;
}

function useComponentSize(): ComponentSizeHook {
  const [size, setSize] = useState<ComponentSize>({ width: 0, height: 0 });
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = componentRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
      };
      setSize({ width, height });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { componentRef, size };
}

export default useComponentSize;
