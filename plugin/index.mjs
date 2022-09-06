export const onPreBuild = async function ({
  utils: { build, status, cache, run, git },
}) {
  await run.command(
    'curl -sS "https://app.snaplet.dev/get-cli/" | bash &> "/dev/null"'
  );

  await run.command("snaplet database create --git --latest");
  await run.command("snaplet database url --git");
};
