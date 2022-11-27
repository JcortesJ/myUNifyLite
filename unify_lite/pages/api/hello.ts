// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {pool} from '../../config/db'

export default async function handler() {
  const [rows]= await pool.query('SELECT NOW()')
  console.log(rows);
}
