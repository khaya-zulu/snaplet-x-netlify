import path from "path";

import fetch from "node-fetch";

export const onPreBuild = async function ({
  utils: { run },
  inputs,
  constants,
  netlifyConfig,
}) {
  if (process.env.CONTEXT === "deploy-preview") {
    const args = [
      'curl -s -d \'{"context": "branch", "context_parameter": "test", "value": "testing"}\'',
      '-H "Content-Type: application/json"',
      '-H "Authorization: Bearer bnX08e9JhK_4DsgpjLbXS1PZPDrM3VZGhJ9SI-vWyJk"',
      "https://api.netlify.com/api/v1/accounts/5f32ed791d8cb529d4cc2405/env/DATABASE_URL?site_id=00bb141f-89f8-46cf-8110-0543e6c20e78",
    ];

    const { stdout } = await run.command(args.join(" "));

    console.log({ stdout });
    // const __dirname = path.resolve();
    // const { stdout } = await run.command(
    //   path.join(__dirname, "/plugin/snaplet.sh")
    // );
    // console.log({ stdout });
    // const res = await fetch(
    //   `https://api.netlify.com/api/v1/accounts/${inputs.accountId}/env/DATABASE_URL?site_id=${constants.SITE_ID}`,
    //   {
    //     method: "PATCH",
    //     body: JSON.stringify({
    //       context: "branch",
    //       context_parameter: netlifyConfig.build.environment.BRANCH,
    //       value: "testing",
    //     }),
    //     headers: {
    //       Authorization: `Bearer bnX08e9JhK_4DsgpjLbXS1PZPDrM3VZGhJ9SI`,
    //       // Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
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
