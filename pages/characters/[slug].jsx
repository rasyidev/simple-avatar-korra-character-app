export const getStaticPaths = async () => {
  const data = await fetch('http://localhost:3000/api/characters').then(r => r.json())
  console.log("DATA:" + data);
  const paths = data.characters.map(ninja => {
    return {
      params: {slug: ninja.slug.toString()}
    }
  })
  return {paths, fallback:false}
}
  
export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const data = await fetch('http://localhost:3000/api/characters/' + slug).then(r=> r.json())

  return {
    props: {character: data}
  }
}

const NinjaDetails = ({character}) => {
  console.log(character)
  return ( 
    <div className="px-20 mt-10">
      <img className="m-auto" src={'/img/' + character.img} alt={character.name} />
      <p className="text-center py-2 font-bold text-lg">{character.name}</p>
      <p>{character.description}</p>
      <p>{character.born}</p>
    </div>
   );
}
 
export default NinjaDetails;