export const onPreBuild = async function ({ utils: { run } }) {
  const { stdout } = await run.command(
    "curl -sL https://app.snaplet.dev/get-cli/ | bash"
  );

  console.log({ stdout });
};
