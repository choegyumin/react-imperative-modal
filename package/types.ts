import { ReactElement } from "react";

type Dictionary<T, K extends keyof any = PropertyKey> = {
  [P in K]?: T;
};

export type ModalElement = ReactElement;
export type ModalElements = Dictionary<ModalElement>;

export type UnmountThisModal = () => void;
export type MountModal = (
  element: ModalElement,
  key?: React.Key
) => UnmountThisModal;

export type UnmountModal = (key: React.Key) => void;

export type ModalManagerInstance = {
  elements: ModalElements;
  mount: MountModal;
  unmount: UnmountModal;
};

export type ModalFn<T> = (
  resolve: (value: T | PromiseLike<T>) => void,
  reject: (reason?: any) => void
) => ReactElement;
