export const onPreBuild = async function ({ utils: { run } }) {
  const { stdout } = await run.command(
    'curl -sS "https://app.snaplet.dev/get-cli/" | bash &> "/dev/null"'
  );

  console.log({ stdout });
};
