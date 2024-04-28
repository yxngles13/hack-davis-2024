import Image from 'next/image'
import Link from "next/link"

export default function logs() {
  return (
    <main className="h-screen bg-slate-100">
      <div>
        <h1 className="text-2xl text-black font-mono py-4 px-8"><b>Jason's personal logs</b></h1>
      </div>
      <div>
        <Image className="mx-10" src="/group.jpeg" width={200} height={300}/>
      </div>
      <div>
        <p>
          
        </p>
      </div>
   </main>
  );
}
