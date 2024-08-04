import { NextApiRequest, NextApiResponse } from "next";
import { add } from "@/lib/firebase/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let data = req.body;
    await add("todo", data, (status: boolean, result: any) => {
      if (status) {
        res.status(200).json({
          status: true,
          statusCode: 200,
          message: "success",
          data: { id: result.id },
        });
      } else {
        res.status(400).json({
          status: false,
          statusCode: 400,
          message: "failed",
          data: {},
        });
      }
    });
  }
}
