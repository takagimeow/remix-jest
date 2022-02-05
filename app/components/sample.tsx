import React from "react";

export interface Props {
  text: string;
}

export function Sample({ text }: Props) {
  return (
    <div>
      <h1>{ text }</h1>
    </div>
  )
}