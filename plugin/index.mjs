import path from "path";

export const onPreBuild = async function ({
  utils: { run },
  netlifyConfig,
  constants,
  inputs,
}) {
  const __dirname = path.resolve();

  const { stdout } = await run.command(
    path.join(__dirname, "/plugin/snaplet.sh")
  );

  // netlifyConfig.build.environment.DATABASE_URL = stdout;

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
};
