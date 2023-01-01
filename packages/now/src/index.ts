import { createESBuildRegister } from "@onecocjs/now.esbuild";

export function now(options: { implementation: "esbuild" }) {
  if (options.implementation === "esbuild") {
    return createESBuildRegister();
  }
  throw new Error("未知类型");
}
