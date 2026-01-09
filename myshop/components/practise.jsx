"use client"

import { useEffect, useRef, useState } from "react"
import { database } from "@/utils/db"

export default function Practise(){
  const inputRef = useRef()
  const [count,setCount] = useState([])

  useEffect(()=>{
    inputRef.current?.focus()
    setCount(database)
    console.log(count)
  })

  return(
    <div className="flex justify-center mt-5">
      <input ref={inputRef} type="text"  className="px-3 py-1.5 rounded border border-gray-300 bg-gray-200 focus:bg-white focus:border-blue-500 transition-all outline-none" placeholder="Search..."/>
      <div className="text-black">
        {
          count.map((index,item)=>{
            <div key={index}>
              <p>{item.name}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}











{/**

"use client"

import { useEffect, useRef, useState } from "react"

export default function Practise(){
  const [name,setName] = useState('')
  const prevName = useRef()

  useEffect(()=>{
    prevName.current = name
  },[name])
  return (
    <div className="flex justify-center mt-5">
        <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} className="bg-gray-100 border border-gray-300 px-3 py-1.5 rounded outline-none focus:bg-white focus:border-blue-500" />
        <h1>My name is {name} and used to {prevName.current}</h1>
      </div>
    </div>
  )
}
 */}