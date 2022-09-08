export const onPreBuild = function ({ netlifyConfig }) {
  console.log({ env: netlifyConfig.build.environment });

  netlifyConfig.build.environment.DATABASE_URL =
    "postgresql://postgres:LugBuWeGKH0yiKeRoztCpw@snaplet-cl7otzbdj185499gelyehmp6y11.fly.dev:5432/preview-deploy";
};
