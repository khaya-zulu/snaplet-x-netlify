export const onPreBuild = async function ({
  utils: { build, status, cache, run },
}) {
  await run.command("curl -sL https://app.snaplet.dev/get-cli/");

  await run.command("snaplet database create --git --latest");
  await run.command("snaplet database url --git");
};
