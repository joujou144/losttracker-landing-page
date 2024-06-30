import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <p className="text-[12px] font-thin text-red-300 italic">{children}</p>
  );
};

export default ErrorMessage;
