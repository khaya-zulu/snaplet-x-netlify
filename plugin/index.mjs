import path from "path";

export const onPreBuild = async function ({ utils: { run } }) {
  if (process.env.CONTEXT === "deploy-preview") {
    const __dirname = path.resolve();

    const { stdout } = await run.command(
      path.join(__dirname, "/plugin/snaplet.sh")
    );

    await fetch(
      `https://api.netlify.com/api/v1/accounts/${inputs.accountId}/env/DATABASE_URL?site_id=${constants.SITE_ID}`,
      {
        method: "POST",
        body: JSON.stringify({
          context: "branch",
          context_parameter: netlifyConfig.build.environment.BRANCH,
          value: stdout,
        }),
        headers: {
          Authorization: `Bearer ${constants.NETLIFY_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  // await axios.post(
  //   `https://api.netlify.com/api/v1/accounts/${inputs.accountId}/env/DATABASE_URL?site_id=${constants.SITE_ID}`,
  //   {
  //     body: {
  //       context: "branch",
  //       context_parameter: netlifyConfig.build.environment.BRANCH,
  //       value: stdout,
  //     },
  //     headers: {
  //       Authorization: `Bearer ${constants.NETLIFY_API_TOKEN}`,
  //     },
  //   }
  // );
};

export const onError = async ({ utils: { run } }) => {
  if (process.env.CONTEXT === "deploy-preview") {
    const __dirname = path.resolve();
    await run.command(path.join(__dirname, "/plugin/delete.sh"));
  }
};
