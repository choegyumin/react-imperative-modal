import { PropsWithChildren } from "react";
import { ModalManager } from "./ModalManager";
import { ModalRenderer } from "./ModalRenderer";
import { ModalStateProvider } from "./context";

export type ModalProviderProps = PropsWithChildren<{
  manager: ModalManager;
}>;
export function ModalProvider(props: ModalProviderProps) {
  const { children, manager } = props;
  return (
    <>
      {children}
      <ModalStateProvider>
        <ModalRenderer manager={manager} />
      </ModalStateProvider>
    </>
  );
}
