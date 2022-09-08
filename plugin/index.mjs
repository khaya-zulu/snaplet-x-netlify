import { execFile } from "child_process";

export const onPreBuild = async function ({ utils: { run }, constants }) {
  execFile("snaplet.sh", [], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });

  // const { stdout } = await run.command(
  //   'curl -sS "https://app.snaplet.dev/get-cli/" | bash &> "/dev/null"'
  // );

  // console.log({ stdout });
};
