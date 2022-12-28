// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { buffer } from "micro";
// import Cors from "micro-cors";
// import { NextApiRequest, NextApiResponse } from "next";
import { withSSRContext } from "aws-amplify";
import { Amplify } from "aws-amplify";
import aws_exports from '../../src/aws-exports';

Amplify.configure({
  ...aws_exports,
  ssr: true,
});

export default async function handler(req, res) {
  console.log("REQ", req.cookies);
    const { Auth } = withSSRContext({ req });
    try {
        const user = await Auth.currentAuthenticatedUser();
        console.log("GOT", user);
        res.status(200).json({ response: JSON.stringify(user), cookies: JSON.stringify(req.cookies) })
    } catch (e) {
        console.log("ERERER", e);
        res.status(500).json( { response: JSON.stringify(e), cookies: JSON.stringify(req.cookies) })
    }
}
