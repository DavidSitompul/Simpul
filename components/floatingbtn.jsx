"use client"
import { useState } from "react"
import Modal from "./modal"
import Message from "./message"

const FloatingBtn = ({ onBack, onClose }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    setSelectedMessage(null)
  }
  const handleSelectMessage = (msg) => {
    setSelectedMessage(msg) // Set pesan yang dipilih ketika sebuah pesan diklik
  }

  const handleBack = () => {
    setSelectedMessage(null) // Kembali ke daftar pesan, hapus pesan yang dipilih
  }
  return (
    <>
      <div className="fixed bottom-[31px] right-[34px] flex h-auto space-x-2 justify-center">
        {isOpen && (
          <div className="flex space-x-2">
            <div className="flex flex-col items-center w-[60px] h-[84px]">
              <span className={`text-white ${isModalOpen ? "invisible" : "visible"}`}>Task</span>
              <button onClick={toggleModal} className={` ${isModalOpen ? "bg-blue-500 text-white" : "bg-white text-gray-800"} rounded-full w-[60px] h-[60px] items-center flex justify-center`}>
                <svg width="23" height="23" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.8187 2.51453H4.47368C3.78216 2.51453 3.21637 3.08032 3.21637 3.77184V21.3742L8.24561 16.3449H20.8187C21.5102 16.3449 22.076 15.7791 22.076 15.0876V3.77184C22.076 3.08032 21.5102 2.51453 20.8187 2.51453ZM19.5614 5.02908V13.8302H7.20201L6.46019 14.5721L5.73095 15.3013V5.02908H19.5614ZM24.5907 7.54381H27.1053C27.7968 7.54381 28.3626 8.10959 28.3626 8.80112V27.6608L23.3334 22.6315H9.50296C8.81144 22.6315 8.24565 22.0657 8.24565 21.3742V18.8596H24.5907V7.54381Z"
                    fill="#8885FF"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center w-[60px] h-[84px]">
              <span className={`text-white ${isModalOpen ? "invisible" : "visible"}`}>Inbox</span>

              <button onClick={toggleModal} className={` ${isModalOpen ? "bg-blue-500 text-white" : "bg-white text-gray-800"} rounded-full w-[60px] h-[60px] items-center flex justify-center`}>
                <svg width="23" height="23" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.8187 2.51453H4.47368C3.78216 2.51453 3.21637 3.08032 3.21637 3.77184V21.3742L8.24561 16.3449H20.8187C21.5102 16.3449 22.076 15.7791 22.076 15.0876V3.77184C22.076 3.08032 21.5102 2.51453 20.8187 2.51453ZM19.5614 5.02908V13.8302H7.20201L6.46019 14.5721L5.73095 15.3013V5.02908H19.5614ZM24.5907 7.54381H27.1053C27.7968 7.54381 28.3626 8.10959 28.3626 8.80112V27.6608L23.3334 22.6315H9.50296C8.81144 22.6315 8.24565 22.0657 8.24565 21.3742V18.8596H24.5907V7.54381Z"
                    fill="#8885FF"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Main Floating Button */}
        {!isModalOpen && (
          <div className="mt-5">
            <button onClick={toggleMenu} className="w-[68px] h-[68px] items-center flex justify-center bg-[#2F80ED] rounded-full drop-shadow-floatBtnShadow">
              <svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4427 0.335929C13.3618 0.948634 13.6101 2.19037 12.9974 3.10943L5.73704 14H16C16.7376 14 17.4153 14.406 17.7634 15.0563C18.1114 15.7066 18.0732 16.4957 17.6641 17.1094L8.33077 31.1094C7.71807 32.0285 6.47633 32.2768 5.55727 31.6641C4.63821 31.0514 4.38986 29.8097 5.00257 28.8906L12.263 18H2C1.26241 18 0.584692 17.5941 0.236654 16.9437C-0.111384 16.2934 -0.0732391 15.5043 0.335902 14.8906L9.66924 0.890629C10.2819 -0.0284284 11.5237 -0.276776 12.4427 0.335929Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Modal for Inbox */}
      <div className="fixed bottom-[110px] right-[34px] z-50">
        <Modal
          isOpen={isModalOpen} // State apakah modal terbuka
          onClose={toggleModal} // Fungsi untuk menutup modal
          onBack={selectedMessage ? handleBack : null} // Fungsi untuk tombol kembali (jika ada pesan yang dipilih)
        >
          {onBack && (
            <>
              <button onClick={onBack} className="text-sm text-blue-500">
                Back
              </button>
              <button onClick={onClose} className="text-sm text-red-500">
                Close
              </button>
            </>
          )}

          {selectedMessage ? (
            <div>
              {/* Detail pesan yang dipilih */}
              <p>
                <strong>{selectedMessage.title}</strong>
              </p>
              <p>{selectedMessage.message}</p>
            </div>
          ) : (
            <Message onSelectMessage={handleSelectMessage} /> // Jika tidak ada pesan yang dipilih, tampilkan daftar pesan
          )}
        </Modal>
      </div>
    </>
  )
}

export default FloatingBtn
