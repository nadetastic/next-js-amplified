"use client";

import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

const existingConfig = Amplify.getConfig();

Amplify.configure({
  ...existingConfig,
  Auth: {
    Cognito: {
      ...existingConfig.Auth?.Cognito,
      // userPoolClientId: existingConfig?.Auth?.Cognito.userPoolClientId as string,
      // userPoolId: existingConfig.Auth?.Cognito.userPoolId as string,
      loginWith: {
        ...existingConfig.Auth?.Cognito.loginWith,
        oauth: {
          ...existingConfig.Auth?.Cognito.loginWith?.oauth,
          redirectSignIn: ["http://localhost:3000/dash"],
          redirectSignOut: ["http://localhost:3000/"],
        },
      },
    },
  },
});

export default function ConfigureAmplifyClientSide() {
  return null;
}
