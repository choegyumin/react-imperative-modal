import { ReactNode } from "react";
import { ModalProvider } from "../package/index";
import modalManager from "./modalManager";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <ModalProvider manager={modalManager}>{children}</ModalProvider>;
}
