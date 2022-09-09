export const onPreBuild = function ({ netlifyConfig }) {
  if (process.env.CONTEXT === "deploy-preview") {
    console.log("Hey preview!")
    process.env.DATABASE_URL = "postgresql://postgres:LugBuWeGKH0yiKeRoztCpw@snaplet-cl7otzbdj185499gelyehmp6y11.fly.dev:5432/preview-deploy";
    netlifyConfig.build.environment.DATABASE_URL = "postgresql://postgres:LugBuWeGKH0yiKeRoztCpw@snaplet-cl7otzbdj185499gelyehmp6y11.fly.dev:5432/preview-deploy";
  }
};
