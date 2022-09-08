import path from "path";

export const onPreBuild = async function ({ utils: { run }, netlifyConfig }) {
  const __dirname = path.resolve();

  const { stdout } = await run.command(
    path.join(__dirname, "/plugin/snaplet.sh")
  );

  netlifyConfig.build.environment.DATABASE_URL = stdout;
};
