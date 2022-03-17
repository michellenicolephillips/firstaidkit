import { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "./lib/db";

export default async function handler(
     req: NextApiRequest,
     res: NextApiResponse
) {
     if(req.query.number.length != 10) {
          res.status(400).end();
     }
     console.log(req.query);
     const db = await getDB();
     try {
          await db.run('insert into applicant (name, phone) values (?,?)',
          req.query.name,
          req.query.number);
          res.status(200).end();
     } catch (e) {
          res.status(500).end();
     }
}