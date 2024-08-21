// components/Modal.js

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null

  return (
    <div className="bg-white lg:px-[20px] lg:pt-[16px] 1920:px-[32px] 1920:pt-[24px] rounded-lg shadow-lg sm:w-[234px] sm:h-[337px] md:w-[434px] md:h-[400px] 2xl:w-[534px] 2xl:h-[537px] 1920:w-[734px] 1920:h-[737px]">
      <div className="">{children}</div>
    </div>
  )
}

export default Modal
