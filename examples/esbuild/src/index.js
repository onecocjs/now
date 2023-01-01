const { createESBuildRegister } = require("@onecocjs/now.esbuild");
(async () => {
  const { sandbox } = createESBuildRegister();

  // require("./demo");
  const res = sandbox(() => {
    return require("./demo").default;
  });
  console.log(res);
})();
