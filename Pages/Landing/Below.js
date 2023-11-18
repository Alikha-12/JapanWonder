import React, { useRef, useEffect } from "react";

const descRef = useRef(null);
const shrineRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );

  if (descRef.current) {
    observer.observe(descRef.current);
  }

  if (shrineRef.current) {
    observer.observe(shrineRef.current);
  }

  return () => {
    if (descRef.current) {
      observer.unobserve(descRef.current);
    }

    if (shrineRef.current) {
      observer.unobserve(shrineRef.current);
    }
  };
}, []);
