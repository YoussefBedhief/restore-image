import React from "react"

const Navbar = () => {
  return (
    <div className="w-full h-14 bg-transparent flex items-center justify-between py-10 px-10">
      <div>Logo</div>
      <div className="flex items-center gap-x-5">
        <button className="bg-[#3290EE] py-2 px-5 rounded-xl hover:bg-[#3290EE]/80 ">
          Sign In
        </button>
        light mode/dark mode
      </div>
    </div>
  )
}

export default Navbar
