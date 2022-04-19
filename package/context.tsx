import constate from "constate";
import { cloneElement, useState } from "react";
import { useImmutableCallback } from "./hooks";
import { ModalElements, MountModal, UnmountModal } from "./types";
import { generateModalKey } from "./utils";

function useModalState() {
  const [elements, setElements] = useState<ModalElements>({});

  const mount = useImmutableCallback<MountModal>(
    (element, key = generateModalKey()) => {
      setElements((oldElements) => {
        const newElements = {
          ...oldElements,
          [key]: cloneElement(element, { key })
        };
        return newElements;
      });
      return () => {
        setElements((oldElements) => {
          const newElements = { ...oldElements };
          delete newElements[key];
          return newElements;
        });
      };
    }
  );

  const unmount = useImmutableCallback<UnmountModal>((key) => {
    setElements((oldElements) => {
      const newElements = { ...oldElements };
      delete newElements[key];
      return newElements;
    });
  });

  return { elements, mount, unmount };
}

export const [
  ModalStateProvider,
  useModalElements,
  useMountModal,
  useUnmountModal
] = constate(
  useModalState,
  (value) => value.elements,
  (value) => value.mount,
  (value) => value.unmount
);
