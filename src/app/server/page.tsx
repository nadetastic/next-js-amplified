import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth/server";
import { cookies } from "next/headers";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";

const ServerPage = async () => {
  try {
    const currentInfo = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => fetchAuthSession(contextSpec),
    });

    return JSON.stringify(currentInfo);
  } catch (e) {
    return "Something went wrong" + JSON.stringify(e);
  }
};

export default ServerPage;
