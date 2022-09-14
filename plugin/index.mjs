import path from "path";

import fetch from "node-fetch";

export const onPreBuild = async function ({
  utils: { run },
  constants,
  netlifyConfig,
}) {
  if (process.env.CONTEXT === "deploy-preview") {
    const __dirname = path.resolve();

    const branch = netlifyConfig.build.environment.BRANCH;

    console.log(`Creating instant db from ${branch} branch...`);
    console.log();

    const { stdout } = await run.command(
      path.join(__dirname, "/plugin/snaplet.sh")
    );

    console.log("Instant db created.");
    console.log();

    console.log("Setting DATABASE_URL environment variable...\n");
    console.log();

    const resp = await fetch(
      `https://api.netlify.com/api/v1/accounts/${process.env.NETLIFY_ACCOUNT_ID}/env/DATABASE_URL?site_id=${constants.SITE_ID}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          context: "branch",
          context_parameter: branch,
          value: stdout,
        }),
        headers: {
          Authorization: `Bearer ${process.env.NETLIFY_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (resp.status === 200) {
      console.log("Environment variable DATABASE_URL set.\n");
      console.log();
    } else {
      console.log({ resp });
      console.log();
    }
  }
};

export const onError = async ({ utils: { run } }) => {
  if (process.env.CONTEXT === "deploy-preview") {
    const __dirname = path.resolve();
    try {
      await run.command(path.join(__dirname, "/plugin/delete.sh"));
    } catch (err) {
      console.log("DB does not exist\n");
      console.log();
    }
  }
};
