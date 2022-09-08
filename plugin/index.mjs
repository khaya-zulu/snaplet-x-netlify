import { execFile } from "child_process";

export const onPreBuild = async function ({ utils: { run }, constants }) {
  await new Promise((resolve, reject) => {
    execFile(`${__dirname}/snaplet.sh`, [], (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      resolve(stdout);
    });
  });

  // const { stdout } = await run.command(
  //   'curl -sS "https://app.snaplet.dev/get-cli/" | bash &> "/dev/null"'
  // );

  // console.log({ stdout });
};
