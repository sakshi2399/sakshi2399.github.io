import { useEffect, useRef } from 'react';

export const useTilt = (active = true) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) return;

    const el = ref.current;
    const handleMove = (e) => {
      const height = el.clientHeight;
      const width = el.clientWidth;
      const rect = el.getBoundingClientRect();
      const xVal = e.clientX - rect.left;
      const yVal = e.clientY - rect.top;
      const yRotation = 20 * ((xVal - width / 2) / width);
      const xRotation = -20 * ((yVal - height / 2) / height);
      el.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    };

    const handleLeave = () => {
      el.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [active]);

  return ref;
};
