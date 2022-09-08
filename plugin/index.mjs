import { resolve, resolve } from "path";

export const onPreBuild = async function ({ utils: { run }, constants }) {
  console.log({ path: path.join(resolve(), "/plugin/snaplet.sh") });

  const { stdout } = await run.command(
    path.join(resolve(), "/plugin/snaplet.sh")
  );

  console.log({ stdout });

  // const __dirname = path.resolve();

  // await new Promise((resolve, reject) => {
  //   execFile(
  //     path.join(__dirname, "snaplet.sh"),
  //     [],
  //     (error, stdout, stderr) => {
  //       if (error) {
  //         reject(error);
  //       }
  //       resolve(stdout);
  //     }
  //   );
  // });

  // const { stdout } = await run.command(
  //   "curl -sL https://app.snaplet.dev/get-cli/ | bash"
  // );

  // console.log({ stdout });
};
