import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth/server";
import { cookies } from "next/headers";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";

const ServerPage = async () => {
  try {
    const currentInfo = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: async (contextSpec) => {
        try {
          const session = await fetchAuthSession(contextSpec, {});
          const user = await getCurrentUser(contextSpec);
          return { SESS: session, USER: user };
        } catch (e) {
          return "NO Session" + e;
        }
      },
    });

    return JSON.stringify(currentInfo);
  } catch (e) {
    return "Something went wrong" + JSON.stringify(e);
  }
};

export default ServerPage;
