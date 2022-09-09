export const onPreBuild = function ({ netlifyConfig }) {
  switch (process.env.CONTEXT) {
    case 'production':
      netlifyConfig.build.environment.DATABASE_URL = process.env.PRODUCTION_DATABASE_URL;
    case "deploy-preview":
      netlifyConfig.build.environment.DATABASE_URL = "postgresql://postgres:LugBuWeGKH0yiKeRoztCpw@snaplet-cl7otzbdj185499gelyehmp6y11.fly.dev:5432/preview-deploy";
    default:
  }
};
