import {characters} from './avatar-korra-characters.json';
export default function handler(req, res){
  const {slug} = req.query;

  const characterDetails = characters.filter(c => c.slug === slug);
  
  res.status(200).json(characterDetails[0]);
}
