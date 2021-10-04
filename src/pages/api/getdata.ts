// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import categories from './data/categories.json'
import products from './data/products.json'

type Data = {
  products:typeof products
  categories:typeof categories
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ products, categories})
}
