import React from "react";

interface Props {
  value: string;
}

function Component({ value }: Props) {
  const [stateValue, setStateValue] = React.useState(0);

  return <div className="css-class">{value}</div>;
}
