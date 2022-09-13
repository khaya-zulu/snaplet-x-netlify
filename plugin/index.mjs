import path from "path";

import fetch from "node-fetch";

export const onPreBuild = async function ({
  utils: { run },
  inputs,
  constants,
  netlifyConfig,
}) {
  if (process.env.CONTEXT === "deploy-preview") {
    // const __dirname = path.resolve();
    // const { stdout } = await run.command(
    //   path.join(__dirname, "/plugin/snaplet.sh"),
    //   { env: process.env }
    // );

    const { stdout } = await run.command(
      `curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null" && /opt/buildhome/.local/bin/snaplet db create --git --latest`
    );
    console.log({ stdout });

    // fetch(
    //   `https://api.netlify.com/api/v1/accounts/5f32ed791d8cb529d4cc2405/env/DATABASE_URL?site_id=00bb141f-89f8-46cf-8110-0543e6c20e78`,
    //   {
    //     method: "PATCH",
    //     body: JSON.stringify({
    //       context: "branch",
    //       context_parameter: "juliens_token",
    //       value: "testing",
    //     }),
    //     headers: {
    //       Authorization: `Bearer HsPVz8_QzUmG41jSrwTxqPbRDelFcUl1VXcNg9wBHlE`,
    //       // Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
    //   .then((res) => res.json())
    //   .catch((err) => console.error(err));
    // console.log({ res: JSON.stringify(res, undefined, 2) });
  }
};

// export const onError = async ({ utils: { run } }) => {
//   if (process.env.CONTEXT === "deploy-preview") {
//     const __dirname = path.resolve();
//     try {
//       await run.command(path.join(__dirname, "/plugin/delete.sh"));
//     } catch (err) {
//       console.log("DB does not exist");
//     }
//   }
// };
