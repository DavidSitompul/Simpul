import React from "react"
import { IoIosSearch } from "react-icons/io"
import FloatingBtn from "./floatingbtn"

const LayoutBg = () => {
  return (
    <div className="bg-[#333333] min-h-screen w-full flex">
      <div className="w-[285px] border-r-[1px] border-[#F2F2F2]">side skirsi</div>
      <div className=" w-full">
        <div className="w-full bg-[#4F4F4F] h-[58px] pt-[19px] pl-6 pb-[23px]">
          <IoIosSearch color="#F2F2F2" size={16} />
        </div>
        <FloatingBtn />
      </div>
    </div>
  )
}

export default LayoutBg
