import { useCallback } from "react";

export function useImmutableCallback<T extends (...args: any[]) => any>(
  callback: T
): T {
  return useCallback(callback, []);
}
