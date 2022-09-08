import path from "path";

export const onPreBuild = async function ({
  utils: { run },
  netlifyConfig,
  constants,
}) {
  console.log({ constants });
  // const __dirname = path.resolve();

  // const { stdout } = await run.command(
  //   path.join(__dirname, "/plugin/snaplet.sh")
  // );

  // // netlifyConfig.build.environment.DATABASE_URL = stdout;

  // await fetch(
  //   `https://api.netlify.com/api/v1/accounts/${process.env.NETLIFY_ACCOUNT_ID}/env/DATABASE_URL?site_id=${process.env.NETLIFY_SITE_ID}`
  // );
};
