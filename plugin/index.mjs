export const onPreBuild = async function ({ netlifyConfig }) {
  netlifyConfig.build.environment.DATABASE_URL =
    "postgres://snaplet_x_netlify_user:V3OK6GWhQgpzhSOF7tlSboG57H4ko6CF@dpg-ccb002pa6gdmn7sdarl0-a.oregon-postgres.render.com/snaplet_x_netlify";
};
