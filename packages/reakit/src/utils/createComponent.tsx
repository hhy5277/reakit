import * as React from "react";
import { forwardRef } from "../__utils/forwardRef";
import { As, PropsWithAs } from "../__utils/types";
import { splitProps } from "../__utils/splitProps";
import memo from "../__utils/memo";
import { unstable_useCreateElement as defaultUseCreateElement } from "./useCreateElement";

type Hook<T extends As, O> = {
  (
    options?: O,
    props?: React.HTMLAttributes<any> & React.RefAttributes<any>
  ): typeof props;
  __keys?: Array<keyof O>;
  __propsAreEqual?: (
    prev: PropsWithAs<O, T>,
    next: PropsWithAs<O, T>
  ) => boolean;
};

type Options<T extends As, O> = {
  as: T;
  useHook?: Hook<T, O>;
  keys?: Array<keyof O>;
  propsAreEqual?: (prev: PropsWithAs<O, T>, next: PropsWithAs<O, T>) => boolean;
  useCreateElement?: typeof defaultUseCreateElement;
};

export function unstable_createComponent<T extends As, O>({
  as: type,
  useHook,
  keys = (useHook && useHook.__keys) || [],
  propsAreEqual = useHook && useHook.__propsAreEqual,
  useCreateElement = defaultUseCreateElement
}: Options<T, O>) {
  const Comp = <TT extends As = T>(
    { as = (type as unknown) as TT, ...props }: PropsWithAs<O, TT>,
    ref: React.Ref<any>
  ) => {
    if (useHook) {
      const [options, htmlProps] = splitProps(props, keys as any[]);
      const elementProps = useHook(options, { ref, ...htmlProps });
      return useCreateElement(as, elementProps || {});
    }
    return useCreateElement(as, props);
  };

  if (process.env.NODE_ENV !== "production" && useHook) {
    (Comp as any).displayName = useHook.name.replace(/^(unstable_)?use/, "");
  }

  if (propsAreEqual) {
    return memo(forwardRef(Comp), propsAreEqual);
  }

  return forwardRef(Comp);
}
