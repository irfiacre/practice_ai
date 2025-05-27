import React from "react";

const Passage = ({ content, title }: { content: string; title: string }) => {
  return (
    <div>
      <h1 className="text-xl font-medium py-2">{title}</h1>
      <h1 className="text-justify text-base">{content}</h1>
    </div>
  );
};

export default Passage;
