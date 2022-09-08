// const { execFile } = require("child_process");

export const onPreBuild = async function ({ utils: { run }, constants }) {
  console.log({ constants, env: process.env });

  // const { stdout } = await run.command(
  //   'curl -sS "https://app.snaplet.dev/get-cli/" | bash &> "/dev/null"'
  // );

  // console.log({ stdout });
};
