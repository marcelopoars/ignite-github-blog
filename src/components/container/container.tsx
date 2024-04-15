import { ComponentProps } from "react";
import { ContainerRoot } from "./styles";

type ContainerProps = ComponentProps<"div">;

export function Container(props: ContainerProps) {
  return <ContainerRoot {...props} />;
}
