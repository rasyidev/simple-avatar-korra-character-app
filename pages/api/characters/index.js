// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {characters} from './avatar-korra-characters.json';

export default function handler(req, res) {
  res.status(200).json({ characters })
}
