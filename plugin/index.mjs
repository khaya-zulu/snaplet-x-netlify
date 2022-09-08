import path from "path";

import { readdirSync } from "fs";

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

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

  console.log(getDirectories(__dirname));

  console.log(__dirname);

  // const { stdout } = await run.command(
  //   "curl -sL https://app.snaplet.dev/get-cli/ | bash"
  // );

  // console.log({ stdout });
};
