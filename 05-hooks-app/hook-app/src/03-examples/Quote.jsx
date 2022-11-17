import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const{width,height} = pRef.current.getBoundingClientRect();
    setBoxSize({
      width, height
    });
  }, [quote]);

  return (
    <div>
      <blockquote
        className="blockquote text-end me-5"
        style={{ display: "flex" }}
      >
        <p className="mb-1" ref={pRef}>
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </div>
  );
};
