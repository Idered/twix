import React from "react";

export function twix<Props extends { className?: string }, Element>(
  component: React.ForwardRefExoticComponent<
    Props & React.RefAttributes<Element>
  >,
  className: string | ((props: Props) => string)
) {
  return React.forwardRef<Element, Props>((props, ref) => {
    return React.createElement(component, {
      ...props,
      ref,
      className: `${className} ${props.className ?? ""}`,
    });
  });
}
