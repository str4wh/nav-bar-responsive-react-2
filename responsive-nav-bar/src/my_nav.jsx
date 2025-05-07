import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

function My_nav() {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav class="bg-violet-400 text-white">
        <div class="border-0 flex items-center justify-between p-5">
            <div class="font-bold text-4xl">
                <p>My Logo</p>
            </div>
            
            <ul class="hidden md:flex space-x-6 mr-6 ">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div class="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
        </div>
        {isOpen &&(
                <ul class="mt-4 text-center space-y-4 text-xl md:hidden">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            )}
    </nav>
  )
}

export default My_nav