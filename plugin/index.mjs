export const onPreBuild = async function () {
  console.log("Before:");
  console.log({ env: process.env["DEPLOY_PREVIEW_DATABASE_URL"] });

  process.env["DEPLOY_PREVIEW_DATABASE_URL"] =
    "postgresql://postgres:LugBuWeGKH0yiKeRoztCpw@snaplet-cl7otzbdj185499gelyehmp6y11.fly.dev:5432/preview-deploy";

  console.log("After:");
  console.log({ env: process.env["DEPLOY_PREVIEW_DATABASE_URL"] });
};

// export const onBuild = async function ({ netlifyConfig, utils: { run } }) {
//   const commands = [
//     netlifyConfig.build.command || "",
//     "curl -sL https://app.snaplet.dev/get-cli/ | bash",
//   ];

//   netlifyConfig.build.command = commands.join(" && ");

//   await run.command("snaplet database create --git --latest");
//   await run.command("snaplet database url --git");
// };
