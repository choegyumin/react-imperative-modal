import { ReactElement } from "react";
import { MODAL_PROVIDER_IS_NOT_INITIALIZED_MESSAGE } from "./consts";
import { ModalManagerInstance, ModalFn, UnmountThisModal } from "./types";

export class ModalManager {
  private instance: ModalManagerInstance | null;

  constructor() {
    this.instance = null;
  }

  private mount(element: ReactElement, key?: React.Key) {
    if (this.instance == null) {
      console.error(MODAL_PROVIDER_IS_NOT_INITIALIZED_MESSAGE);
      return () => undefined;
    }
    return this.instance.mount(element, key);
  }

  private unmount(key: React.Key) {
    if (this.instance == null) {
      console.error(MODAL_PROVIDER_IS_NOT_INITIALIZED_MESSAGE);
      return () => undefined;
    }
    return this.instance.unmount(key);
  }

  public open<T>(modalFn: ModalFn<T>, key?: React.Key) {
    let close: UnmountThisModal = () => undefined;
    return new Promise<T>((resolve, reject) => {
      close = this.mount(modalFn(resolve, reject));
    })
      .then((result) => {
        close();
        return result;
      })
      .catch((error) => {
        close();
        throw error;
      });
  }

  public close(key: React.Key) {
    this.unmount(key);
  }

  public hydrate(instance: ModalManagerInstance) {
    this.instance = instance;
  }
}
