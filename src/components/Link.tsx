import React from "react";

const Link: React.FC<{ active: boolean; onClick(): void }> = ({
  active,
  children,
  onClick
}) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px"
    }}
  >
    {children}
  </button>
);

export default Link;
