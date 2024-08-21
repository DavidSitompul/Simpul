"use client"
import { useState } from "react"
import Modal from "./modal"
import Message from "./message"

const FullMsg = ({ isOpen, onClose }) => {
  const [selectedMessage, setSelectedMessage] = useState(null)

  const handleSelectMessage = (msg) => {
    setSelectedMessage(msg)
  }

  const handleBack = () => {
    setSelectedMessage(null)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} onBack={selectedMessage ? handleBack : null}>
      {selectedMessage ? (
        <div>
          <button onClick={handleBack} className="text-sm text-blue-500">
            Back
          </button>
          <h2>{selectedMessage.title}</h2>
          <p>{selectedMessage.body}</p>
        </div>
      ) : (
        <Message onSelectMessage={handleSelectMessage} />
      )}
    </Modal>
  )
}

export default FullMsg
