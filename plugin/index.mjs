export const onBuild = async function ({ netlifyConfig, utils: { run } }) {
  const commands = [
    netlifyConfig.build.command || "",
    "curl -sL https://app.snaplet.dev/get-cli/ | bash",
  ];

  netlifyConfig.build.command = commands.join(" && ");

  await run.command("snaplet database create --git --latest");
  await run.command("snaplet database url --git");
};
