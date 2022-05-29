import { useWindowWidth } from '@react-hook/window-size/throttled';

const useBreakpoints = () => {
  const width = useWindowWidth({ initialWidth: 320 });

  return {
    tablet: width >= 600,
    desktop: width >= 1200,
  };
};

export default useBreakpoints;
