import { useRef, useEffect } from "react";

function useUpdateEffect(effect, deps) {
  let isFirstTimeRef = useRef(true);
  useEffect(() => {
    isFirstTimeRef.current ? (isFirstTimeRef.current = false) : effect();
  }, deps);
}
export default useUpdateEffect;
