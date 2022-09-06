export const onPreBuild = async function ({
  utils: {
    build,
    status,
    cache,
    run,
    utils: { run },
  },
}) {
  await run.command("curl -sL https://app.snaplet.dev/get-cli/ | bash");

  await run.command("snaplet database create --git --latest");
  await run.command("snaplet database url --git");
};
