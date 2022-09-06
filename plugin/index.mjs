export const onPreBuild = async function ({ netlifyConfig }) {
  const commands = [
    netlifyConfig.build.command || "",
    "curl -sL https://app.snaplet.dev/get-cli/ | bash",
    "snaplet database create --git --latest",
    "snaplet database url --git",
  ];

  netlifyConfig.build.command = commands.join(" && ");
};
