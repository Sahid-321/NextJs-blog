import Link from 'next/link'
import { useEffect, useState } from "react";

export default function Header({ setSearchTerm }) {
  const [name, setName] = useState('');
  
  useEffect(() => {
    const data = window.localStorage.getItem('userName');
    setName(data);
  }, []);

  const handleLogout = () => {
    window.localStorage.clear();
    setName('');
  };

  return (
    <header className="bg-teal-200 py-4 px-6 border-b border-green-200 flex justify-between items-center">
      <div className='flex items-center'>
        <input type="text" placeholder="Search..." className="py-2 px-4 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      {name ? (
        <>
          <Link href='./article/createArticle'>Create Article</Link>
          <h2>{name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link href='./auth'>Login/Signup</Link>
      )}
    </header>
  );
}
