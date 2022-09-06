export const onPreBuild = async function ({
  utils: {
    build,
    status,
    cache,
    utils: { run },
  },
}) {
  await run.command("curl -sL https://app.snaplet.dev/get-cli/");

  await run.command("snaplet database create --git --latest");
  await run.command("snaplet database url --git");
};
