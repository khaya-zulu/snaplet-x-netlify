export const onPreBuild = async function ({ netlifyConfig }) {
  console.log("Before: ");
  console.log({ env: process.env["DATABASE_URL"] });

  netlifyConfig.build.environment.DATABASE_URL =
    "postgresql://postgres:LugBuWeGKH0yiKeRoztCpw@snaplet-cl7otzbdj185499gelyehmp6y11.fly.dev:5432/preview-deploy";

  console.log("After:");
  console.log({ env: process.env["DATABASE_URL"] });
};
