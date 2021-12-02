import Link from 'next/link';

const Navbar = () => {
  return ( 
    <div className="shadow">
      <div className="flex px-20 py-5 justify-between">
        <div className="uppercase select-none"><Link href='/'>Avatar Characters</Link></div>
        <ul className="flex space-x-4">
          <li><Link href="/"><a className="select-none">Home</a></Link></li>
          <li><Link href="/about"><a className="select-none">About</a></Link></li>
          <li><Link href="/characters"><a className="select-none">Characters</a></Link></li>
        </ul>
      </div>
    </div>
  );
}
 
export default Navbar;