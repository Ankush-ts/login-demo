import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser]=useState(null);
  const router=useRouter();
  useEffect(()=>{
    fetch("/api/getuser").then( async(res)=>{
      const jsonResponse= await res.json();
      if(!jsonResponse.loggedin){
        router.push("/Login")
      }
      setUser(jsonResponse)
    })
  },[])

  const logout=async()=>{
    const response=await fetch("/api/logout")
    router.push("/Login")
  }

  return (
    <div className="container">
      <h1>Home Page</h1>
      <ul className="list-group">
        <li className="list-group-item">Name:{user?.name}</li>
        <li className="list-group-item">Age:{user?.age}</li>
        <li className="list-group-item">City:{user?.city}</li>
      </ul>
      <button onClick={logout} className='btn btn-danger mt-4'>Logout</button>
    </div>
  )
}
