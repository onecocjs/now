import { createRegister } from "@onecocjs/now.core";
import { transformSync } from "esbuild";
import { extname } from "node:path";

export function createESBuildRegister() {
  return createRegister({
    transformSync(code, filename) {
      const ext = extname(filename);
      return transformSync(code, {
        sourcefile: filename,
        loader: ext.slice(1) as never,
        target: "es2019",
        format: "cjs",
        logLevel: "error",
        sourcemap: true,
      }).code;
    },
  });
}
