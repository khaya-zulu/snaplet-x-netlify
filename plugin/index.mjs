import { execFile } from "child_process";
import path from "path";

import fs from "fs/promises";
const path = "path/to/folder";

async function readDir(path) {
  const files = await fs.readdir(path);
  console.log(files); // array of file names
}

export const onPreBuild = async function ({ utils: { run }, constants }) {
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

  const __dirname = path.resolve();

  const files = await fs.readDir(__dirname);

  console.log(files);

  // const { stdout } = await run.command(
  //   "curl -sL https://app.snaplet.dev/get-cli/ | bash"
  // );

  // console.log({ stdout });
};
