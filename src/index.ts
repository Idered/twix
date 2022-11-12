import React from "react";

export function twix<
  T extends
    | keyof JSX.IntrinsicElements
    | React.FunctionComponent<Props>
    | React.ForwardRefExoticComponent<Props>,
  Element = T extends keyof React.ReactHTML
    ? React.ReactHTML[T] extends React.DetailedHTMLFactory<any, infer U>
      ? U
      : never
    : T extends React.ForwardRefExoticComponent<
        unknown & React.RefAttributes<infer U>
      >
    ? U
    : T extends React.FunctionComponent
    ? ReturnType<T>
    : never,
  Props extends { className?: string } = T extends keyof React.ReactHTML
    ? React.ReactHTML[T] extends React.DetailedHTMLFactory<infer U, any>
      ? U
      : never
    : T extends React.ForwardRefExoticComponent<infer U>
    ? U
    : T extends React.FunctionComponent<infer U>
    ? U
    : never
>(component: T, className: string) {
  return React.forwardRef<Element, Props>((props, ref) => {
    return React.createElement(component, {
      ...props,
      ref,
      className: `${className} ${props.className ?? ""}`,
    });
  });
}
