import path from "path";

import fetch from "node-fetch";

export const onPreBuild = async function ({
  utils: { run },
  inputs,
  constants,
  netlifyConfig,
}) {
  if (process.env.CONTEXT === "deploy-preview") {
    // const args = [
    //   '-d \'{"context": "branch", "context_parameter": "test", "value": "testing"}\'',
    //   "-s",
    //   '-H "Content-Type: application/json"',
    //   '-H "Authorization: Bearer bnX08e9JhK_4DsgpjLbXS1PZPDrM3VZGhJ9SI-vWyJk"',
    //   "-X PATCH",
    //   '"https://api.netlify.com/api/v1/accounts/5f32ed791d8cb529d4cc2405/env/DATABASE_URL?site_id=00bb141f-89f8-46cf-8110-0543e6c20e78"',
    // ];
    // const { stdout } = await run("curl", args, { env: process.env });
    // console.log({ stdout });

    const options = {
      method: "PATCH",
      headers: {
        // cookie:
        //   "_nf-auth=HsPVz8_QzUmG41jSrwTxqPbRDelFcUl1VXcNg9wBHlE; _nf-auth-hint=user-is-likely-authed",
        "Content-Type": "application/json",
        Authorization: "Bearer HsPVz8_QzUmG41jSrwTxqPbRDelFcUl1VXcNg9wBHlE",
      },
      body: '{"context":"branch","context_parameter":"feature_4","value":"supersecretttt"}',
    };

    fetch(
      "https://app.netlify.com/access-control/bb-api/api/v1/accounts/5f32ed791d8cb529d4cc2405/env/DATABASE_URL?site_id=00bb141f-89f8-46cf-8110-0543e6c20e78",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    // const __dirname = path.resolve();
    // const { stdout } = await run.command(
    //   path.join(__dirname, "/plugin/snaplet.sh"),
    //   { env: process.env }
    // );
    // console.log({ stdout });

    // const res = await fetch(
    //   `https://api.netlify.com/api/v1/accounts/5f32ed791d8cb529d4cc2405/env/DATABASE_URL?site_id=00bb141f-89f8-46cf-8110-0543e6c20e78`,
    //   {
    //     method: "PATCH",
    //     body: JSON.stringify({
    //       context: "branch",
    //       context_parameter: "working",
    //       value: "testing",
    //     }),
    //     headers: {
    //       Authorization: `Bearer bnX08e9JhK_4DsgpjLbXS1PZPDrM3VZGhJ9SI`,
    //       // Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // console.log({ res: JSON.stringify(res, undefined, 2) });
  }
};

// export const onError = async ({ utils: { run } }) => {
//   if (process.env.CONTEXT === "deploy-preview") {
//     const __dirname = path.resolve();
//     try {
//       await run.command(path.join(__dirname, "/plugin/delete.sh"));
//     } catch (err) {
//       console.log("DB does not exist");
//     }
//   }
// };
