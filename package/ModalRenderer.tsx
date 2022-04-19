import { useModalElements, useMountModal, useUnmountModal } from "./context";
import { ModalManager } from "./ModalManager";

export type ModalRendererProps = {
  manager: ModalManager;
};

export function ModalRenderer(props: ModalRendererProps) {
  const { manager } = props;

  const elements = useModalElements();
  const mount = useMountModal();
  const unmount = useUnmountModal();

  manager.hydrate({ elements, mount, unmount });

  return <>{Object.values(elements)}</>;
}
