/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import Head from 'next/head';

export const getStaticProps = async () => {
  const res = await fetch('https://avachar-json-server.herokuapp.com/characters');
  const data = await res.text()
  const characters = JSON.parse(data)

  console.log(characters);

  return {
    props: {characters}
  }
}

const Characters = ({characters}) => (
  <>
    <Head>
      <title>Avachar | Characters</title>
    </Head>  
    <div className="md:px-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 mdxxx:grid-cols-4  gap-4 m-auto">
        {characters.map(character => (
          <div className="p-3 m-2 bg-gray-200 rounded-md shadow-md" key={character.id}>
            <Link href={"/characters/" + character.slug} className="">
              <a className="flex flex-col h-full justify-between">
                <img className="rounded-lg" src={'/img/' + character.img} alt={character.name} />
                <p className="text-center pt-2">{character.name}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </>
)
 
export default Characters;