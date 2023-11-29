"use client";

import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";
import { Hub } from "aws-amplify/utils";

// Amplify.configure(config, { ssr: true });
// const existingConfig = Amplify.getConfig();

Amplify.configure(
  {
    Auth: {
      Cognito: {
        // ...existingConfig.Auth?.Cognito,
        userPoolClientId: config.aws_user_pools_web_client_id,
        userPoolId: config.aws_user_pools_id,
        identityPoolId: config.aws_cognito_identity_pool_id,
        loginWith: {
          oauth: {
            domain: config.oauth.domain,
            scopes: config.oauth.scope,
            redirectSignIn: ["http://localhost:3000/dash"],
            redirectSignOut: ["http://localhost:3000/"],
            responseType: config.oauth.responseType as "code",
          },
        },
      },
    },
  },
  {
    ssr: true,
  }
);

Hub.listen("auth", (data) => {
  console.log(data.payload.event);
});
export default function ConfigureAmplifyClientSide() {
  return null;
}
