import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';


const NotFound = () => {
  let router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  });
  return ( 
    <div className="h-screen flex justify-center items-center flex-col space-y-2">
      <p className="text-lg text-center">Page Not Found</p>
      <Link href="/" className="text-center px-5 py-2 bg-blue-500">Go Home</Link>
    </div>
   );
}
 
export default NotFound;