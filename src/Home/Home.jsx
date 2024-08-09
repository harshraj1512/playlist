import React from 'react'
import Navbar from '../components/Navbar'
import Sidemenu from '../components/Sidemenu'

function Home() {
  return (
    <>
    <div className=" min-h-screen flex gap-x-10">
        <Sidemenu/>
        <Navbar/>
    </div>
    </>
  )
}

export default Home