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
    //   path.join(__dirname, "/plugin/snaplet.sh")
    // );

    const resp = await fetch(
      `https://api.netlify.com/api/v1/accounts/${inputs.accountId}/env/DATABASE_URL?site_id=${constants.SITE_ID}`,
      {
        method: "POST",
        body: JSON.stringify({
          context: "branch",
          context_parameter: netlifyConfig.build.environment.BRANCH,
          value: "test",
        }),
        headers: {
          Authorization: `Bearer ${constants.NETLIFY_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log({ resp });

    // await fetch(
    //   `https://api.netlify.com/api/v1/accounts/${inputs.accountId}/env/DATABASE_URL?site_id=${constants.SITE_ID}`,
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       context: "branch",
    //       context_parameter: netlifyConfig.build.environment.BRANCH,
    //       value: stdout,
    //     }),
    //     headers: {
    //       Authorization: `Bearer ${constants.NETLIFY_API_TOKEN}`,
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
