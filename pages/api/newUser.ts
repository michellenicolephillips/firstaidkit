import { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "./lib/db";

export default async function handler(
     req: NextApiRequest,
     res: NextApiResponse
) {
     console.log(req.query);
     const db = await getDB();
     await db.run('insert into applicant (name, phone) values (?,?)',
     req.query.name,
     req.query.number);
     res.status(200).end();
}