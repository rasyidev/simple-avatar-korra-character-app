/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import Image from 'next/dist/client/image';

export const getStaticProps = async() => {
  const res = await fetch('http://localhost:3000/api/characters')
  const data = await res.json()

  return {
    props: {characters: data.characters}
  }
}

const Characters = ({characters}) => (
  <div className="md:px-20">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 m-auto">
      {characters.map(character => (
        <div className="p-3 m-2 bg-gray-200 rounded-sm" key={character.id}>
          <Link href={"/characters/" + character.slug} className="">
            <a className="flex flex-col h-full justify-between">
              <img src={'/img/' + character.img} alt={character.name} />
              <p className="text-center pt-2">{character.name}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  </div>
)
 
export default Characters;