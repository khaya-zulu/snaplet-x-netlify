import path from "path";

export const onPreBuild = async function ({
  utils: { run },
  netlifyConfig,
  constants,
}) {
  const __dirname = path.resolve();

  console.log({ constants });

  // const { stdout } = await run.command(
  //   path.join(__dirname, "/plugin/snaplet.sh")
  // );

  // await fetch(`https://api.netlify.com/api/v1/${}`)

  // netlifyConfig.build.environment.DATABASE_URL = stdout;
};
