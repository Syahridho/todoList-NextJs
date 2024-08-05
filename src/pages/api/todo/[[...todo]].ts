import { NextApiRequest, NextApiResponse } from "next";
import { add, deleteData, retrieveData } from "@/lib/firebase/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await retrieveData("todo");
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "success",
      data,
    });
  } else if (req.method === "POST") {
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
  } else if (req.method === "DELETE") {
    const { todo }: any = req.body;
    await deleteData("todo", todo[0], (result: boolean) => {
      if (result) {
        res.status(200).json({
          status: true,
          statusCode: 200,
          message: "success",
        });
      } else {
        res.status(400).json({
          status: false,
          statusCode: 400,
          message: "failed",
        });
      }
    });
  }
}
