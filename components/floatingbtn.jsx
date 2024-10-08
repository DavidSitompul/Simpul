// components/FloatingBtn.js
"use client"
import { useState } from "react"
import Modal from "./modal"
import Message from "./message"
import DetailsMessage from "./detailsmessage"
import Task from "./task" // Import komponen Task

const FloatingBtn = ({ onBack, onClose }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false) // Add state for Task modal

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    setSelectedMessage(null)
    setIsTaskModalOpen(false) // Close Task modal when Inbox modal is toggled
  }

  const toggleTaskModal = () => {
    setIsTaskModalOpen(!isTaskModalOpen) // Toggle Task modal
    setIsModalOpen(false) // Close Inbox modal when Task modal is toggled
  }

  const handleSelectMessage = (msg) => {
    setSelectedMessage(msg)
  }

  const handleBack = () => {
    setSelectedMessage(null)
  }

  return (
    <>
      <div className="fixed bottom-[31px] right-[34px] flex h-auto space-x-2 justify-center">
        {isOpen && (
          <div>
            {isTaskModalOpen ? (
              <>
                <div className="flex space-x-2">
                  <div className="flex flex-col items-center w-[60px] h-[84px]">
                    <span className={`text-white ${isModalOpen || isTaskModalOpen ? "invisible" : "visible"}`}>Inbox</span>
                    <div className="relative bg-[#4F4F4F] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                      <button
                        onClick={toggleModal}
                        className={`absolute transition-transform duration-300 ${isModalOpen ? "bg-[#8785FF] translate-x-[30%] text-white" : "bg-white text-gray-800"} rounded-full w-[60px] h-[60px] flex items-center justify-center`}
                      >
                        <svg width="23" height="23" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.8187 2.51453H4.47368C3.78216 2.51453 3.21637 3.08032 3.21637 3.77184V21.3742L8.24561 16.3449H20.8187C21.5102 16.3449 22.076 15.7791 22.076 15.0876V3.77184C22.076 3.08032 21.5102 2.51453 20.8187 2.51453ZM19.5614 5.02908V13.8302H7.20201L6.46019 14.5721L5.73095 15.3013V5.02908H19.5614ZM24.5907 7.54381H27.1053C27.7968 7.54381 28.3626 8.10959 28.3626 8.80112V27.6608L23.3334 22.6315H9.50296C8.81144 22.6315 8.24565 22.0657 8.24565 21.3742V18.8596H24.5907V7.54381Z"
                            fill={isModalOpen ? "#FFFFFF" : "#8885FF"}
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-[60px] h-[84px]">
                    <span className={`text-white ${isModalOpen || isTaskModalOpen ? "invisible" : "visible"}`}>Task</span>
                    <div className="relative bg-[#4F4F4F] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                      <button
                        onClick={toggleTaskModal}
                        className={`absolute transition-transform duration-300 ${isTaskModalOpen ? "bg-[#F8B76B] translate-x-[30%] text-white" : "bg-white text-gray-800"} rounded-full w-[60px] h-[60px] flex items-center justify-center`}
                      >
                        <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.11114 4.66669H24.1111C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88891C1.88892 5.66669 2.88892 4.66669 4.11114 4.66669ZM4.11114 6.88891V21.3334H13V6.88891H4.11114ZM24.1111 21.3334H15.2222V6.88891H24.1111V21.3334ZM23 10.7778H16.3334V12.4445H23V10.7778ZM16.3334 13.5556H23V15.2222H16.3334V13.5556ZM23 16.3334H16.3334V18H23V16.3334Z"
                            fill={isTaskModalOpen ? "#FFFFFF" : "#8885FF"}
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex space-x-2">
                <div className="flex flex-col items-center w-[60px] h-[84px]">
                  <span className={`text-white ${isModalOpen || isTaskModalOpen ? "invisible" : "visible"}`}>Task</span>
                  <div className="relative bg-[#4F4F4F] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                    <button
                      onClick={toggleTaskModal}
                      className={`absolute transition-transform duration-300 ${isTaskModalOpen ? "bg-[#F8B76B] translate-x-[30%] text-white" : "bg-white text-gray-800"} rounded-full w-[60px] h-[60px] flex items-center justify-center`}
                    >
                      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.11114 4.66669H24.1111C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88891C1.88892 5.66669 2.88892 4.66669 4.11114 4.66669ZM4.11114 6.88891V21.3334H13V6.88891H4.11114ZM24.1111 21.3334H15.2222V6.88891H24.1111V21.3334ZM23 10.7778H16.3334V12.4445H23V10.7778ZM16.3334 13.5556H23V15.2222H16.3334V13.5556ZM23 16.3334H16.3334V18H23V16.3334Z"
                          fill={isTaskModalOpen ? "#FFFFFF" : "#F8B76B"}
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[60px] h-[84px]">
                  <span className={`text-white ${isModalOpen || isTaskModalOpen ? "invisible" : "visible"}`}>Inbox</span>
                  <div className="relative bg-[#4F4F4F] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                    <button
                      onClick={toggleModal}
                      className={`absolute transition-transform duration-300 ${isModalOpen ? "bg-[#8785FF] translate-x-[30%] text-white" : "bg-white text-gray-800"} rounded-full w-[60px] h-[60px] flex items-center justify-center`}
                    >
                      <svg width="23" height="23" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.8187 2.51453H4.47368C3.78216 2.51453 3.21637 3.08032 3.21637 3.77184V21.3742L8.24561 16.3449H20.8187C21.5102 16.3449 22.076 15.7791 22.076 15.0876V3.77184C22.076 3.08032 21.5102 2.51453 20.8187 2.51453ZM19.5614 5.02908V13.8302H7.20201L6.46019 14.5721L5.73095 15.3013V5.02908H19.5614ZM24.5907 7.54381H27.1053C27.7968 7.54381 28.3626 8.10959 28.3626 8.80112V27.6608L23.3334 22.6315H9.50296C8.81144 22.6315 8.24565 22.0657 8.24565 21.3742V18.8596H24.5907V7.54381Z"
                          fill={isModalOpen ? "#FFFFFF" : "#8885FF"}
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Main Floating Button */}
        {!isModalOpen && !isTaskModalOpen && (
          <div className="mt-5">
            <button onClick={toggleMenu} className="w-[68px] h-[68px] items-center flex justify-center bg-[#2F80ED] rounded-full drop-shadow-floatBtnShadow">
              <svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
        <Modal isOpen={isModalOpen} onClose={toggleModal} onBack={selectedMessage ? handleBack : null}>
          {selectedMessage ? <DetailsMessage message={selectedMessage} onBack={handleBack} onClose={toggleModal} /> : <Message onSelectMessage={handleSelectMessage} />}
        </Modal>
      </div>

      {/* Modal for Task */}
      <div className="fixed bottom-[110px] right-[34px] z-50">
        <Modal isOpen={isTaskModalOpen} onClose={toggleTaskModal}>
          <Task /> {/* Render the Task component */}
        </Modal>
      </div>
    </>
  )
}

export default FloatingBtn
