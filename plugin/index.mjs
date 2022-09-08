export const onPreBuild = function ({ netlifyConfig }) {
  netlifyConfig.build.environment.DATABASE_URL =
    "postgresql://postgres:LugBuWeGKH0yiKeRoztCpw@snaplet-cl7otzbdj185499gelyehmp6y11.fly.dev:5432/preview-deploy";

  const newCommand = `git rev-parse --is-inside-work-tree"`;

  netlifyConfig.build.command = netlifyConfig.build.command
    ? `${netlifyConfig.build.command} && ${newCommand}`
    : newCommand;

  console.log({ env: process.env });
};
