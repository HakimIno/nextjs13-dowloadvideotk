"use client";
import { useState } from 'react'
import { ssstik } from './api/tiktok';


export default function Home() {
  const [uri, setUri] = useState<string>("")

  

  return (
    <main className="flex min-h-screen  items-center justify-center p-24 ">
      <div className="flex w-full flex-col tems-center justify-center max-w-lg">
        <input
          type="text" placeholder="ใส่ลิงค์"
          className="input input-bordered input-primary w-full"
          onChange={(e) => setUri(e.target.value)} />
        <button
          className="btn  btn-primary mt-8"
          onClick={() => ssstik(uri)}
        >download
        </button>
      </div>
    </main>
  )
} 
