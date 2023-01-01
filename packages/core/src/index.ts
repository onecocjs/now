import { addHook } from "pirates";

const __DEFAULT_EXTS__ = [".ts", ".tsx", ".js", ".jsx"];

export interface CreateRegisterOptions {
  transformSync: (code: string, filename: string) => string;
}
export type AnyFunction<T> = () => T;
export function createRegister(opts: CreateRegisterOptions) {
  const register = () =>
    addHook(opts.transformSync, {
      ext: __DEFAULT_EXTS__,
      ignoreNodeModules: true,
    });
  return {
    register,
    sandbox: <T>(callback: AnyFunction<T>): T => {
      const revert = register();
      const res = callback();
      revert();
      return res;
    },
  };
}
