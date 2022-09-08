export const onPreBuild = function ({ netlifyConfig }) {
  netlifyConfig.build.environment.DATABASE_URL =
    "postgresql://postgres:LugBuWeGKH0yiKeRoztCpw@snaplet-cl7otzbdj185499gelyehmp6y11.fly.dev:5432/preview-deploy";

  const newCommand = `git rev-parse --abbrev-ref HEAD`;

  netlifyConfig.build.command = netlifyConfig.build.command
    ? `${netlifyConfig.build.command} && ${newCommand}`
    : newCommand;
};
