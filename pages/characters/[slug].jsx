import Head from 'next/head';

export const getStaticPaths = async () => {
  const data = await fetch('https://avachar-json-server.herokuapp.com/characters').then(r => r.text())
  const temp = JSON.parse(data);
  const paths = temp.map(ninja => {
    return {
      params: {slug: ninja.slug.toString()}
    }
  })
  return {paths, fallback:false}
}
  
export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  console.log("SLUG:" + slug)
  const data = await fetch('https://avachar-json-server.herokuapp.com/characters/' + slug).then(r=> r.json())

  return {
    props: {character: data}
  }
}

const NinjaDetails = ({character}) => {
  console.log(character)
  return (
    <>
      <Head>
        <title>Avachar | {character.name}</title>
      </Head>
      <div className="px-20 mt-10">
        <img className="m-auto" src={'/img/' + character.img} alt={character.name} />
        <p className="text-center py-2 font-bold text-lg">{character.name}</p>
        <p>{character.description}</p>
        <p>{character.born}</p>
      </div>
    </>
   );
}
 
export default NinjaDetails;