import React from 'react'
import { RiLinkedinLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { GoMail } from "react-icons/go";
function Footer() {
  return (
    <>
    <div className=' w-full h-10 flex justify-evenly  text-white flex   items-center'>
      <RiLinkedinLine />
      <VscGithubAlt />
      <GoMail />
    </div>
    </>
  )
}

export default Footer