export const onPreBuild = async function () {
  process.env["DATABASE_URL"] =
    "postgresql://postgres:LugBuWeGKH0yiKeRoztCpw@snaplet-cl7otzbdj185499gelyehmp6y11.fly.dev:5432/preview-deploy";

  console.log({ env: process.env });
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
