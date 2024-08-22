// components/DetailsMessage.js
import React from "react"

const DetailsMessage = ({ message, onBack, onClose }) => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="flex gap-x-4">
            <button onClick={onBack}>
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#333333" />
              </svg>
            </button>
            <div className="flex flex-col leading-2">
              <span className="md:text-sm 2xl:text-[16px] tracking-tighter font-bold">{message.title}</span>
              <span className="text-[14px]">3 Participant</span>
            </div>
          </div>
        </div>
        <button onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z" fill="#333333" />
          </svg>
        </button>
      </div>
      <hr className=" bg-[#BDBDBD] mt-[22px]" />

      {/* right main message*/}
      <div className=" overflow-y-auto sm:max-h-[247px] 2xl:max-h-[377px] 1920:max-h-[594px]">
        {/* message */}
        <div className="flex flex-col items-end">
          <span>You</span>
          <div className="flex gap-x-2">
            <div className="w-4 h-4 items-center mt-[10px]">
              <svg width="16" height="16" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.00008 0.666672C1.26675 0.666672 0.666748 1.26667 0.666748 2.00001C0.666748 2.73334 1.26675 3.33334 2.00008 3.33334C2.73341 3.33334 3.33341 2.73334 3.33341 2.00001C3.33341 1.26667 2.73341 0.666672 2.00008 0.666672ZM10.0001 0.666672C9.26675 0.666672 8.66675 1.26667 8.66675 2.00001C8.66675 2.73334 9.26675 3.33334 10.0001 3.33334C10.7334 3.33334 11.3334 2.73334 11.3334 2.00001C11.3334 1.26667 10.7334 0.666672 10.0001 0.666672ZM4.66675 2.00001C4.66675 1.26667 5.26675 0.666672 6.00008 0.666672C6.73341 0.666672 7.33341 1.26667 7.33341 2.00001C7.33341 2.73334 6.73341 3.33334 6.00008 3.33334C5.26675 3.33334 4.66675 2.73334 4.66675 2.00001Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
            <div className="1920:max-w-[432px] bg-[#EEDCFF] text-[12px] flex flex-col p-[10px] rounded-[5px] gap-y-1">
              <p className="leading-3">No worries. It will be completed ASAP. I’ve asked him yesterday.</p>
              <p>19:32</p>
            </div>
          </div>
        </div>
        {/* date message */}
        <div className="flex items-center gap-x-3 mt-[22px]">
          <div className="flex-grow border-t border-[#4F4F4F]" />
          <span>Today June 09, 2021</span>
          <div className="flex-grow border-t border-[#4F4F4F]" />
        </div>
        {/* left */}
        <div className="flex flex-col gap-y-2">
          <span>Mary Hilda</span>
          <div className="flex gap-x-2">
            <div className="1920:max-w-[518px] bg-[#FCEED3] text-[12px]  flex flex-col p-[10px] rounded-[5px] gap-y-1">
              <p>
                Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please ke className="leading-3"ep up with the due dates. Should you have any questions, you can message me
                anytime. Thanks.
              </p>
              <p>19:32</p>
            </div>
            <div className="w-4 h-4 items-center mt-[10px]">
              <svg width="16" height="16" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.00008 0.666672C1.26675 0.666672 0.666748 1.26667 0.666748 2.00001C0.666748 2.73334 1.26675 3.33334 2.00008 3.33334C2.73341 3.33334 3.33341 2.73334 3.33341 2.00001C3.33341 1.26667 2.73341 0.666672 2.00008 0.666672ZM10.0001 0.666672C9.26675 0.666672 8.66675 1.26667 8.66675 2.00001C8.66675 2.73334 9.26675 3.33334 10.0001 3.33334C10.7334 3.33334 11.3334 2.73334 11.3334 2.00001C11.3334 1.26667 10.7334 0.666672 10.0001 0.666672ZM4.66675 2.00001C4.66675 1.26667 5.26675 0.666672 6.00008 0.666672C6.73341 0.666672 7.33341 1.26667 7.33341 2.00001C7.33341 2.73334 6.73341 3.33334 6.00008 3.33334C5.26675 3.33334 4.66675 2.73334 4.66675 2.00001Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col items-end">
          <span>You</span>
          <div className="flex gap-x-2">
            <div className="w-4 h-4 items-center mt-[10px]">
              <svg width="16" height="16" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.00008 0.666672C1.26675 0.666672 0.666748 1.26667 0.666748 2.00001C0.666748 2.73334 1.26675 3.33334 2.00008 3.33334C2.73341 3.33334 3.33341 2.73334 3.33341 2.00001C3.33341 1.26667 2.73341 0.666672 2.00008 0.666672ZM10.0001 0.666672C9.26675 0.666672 8.66675 1.26667 8.66675 2.00001C8.66675 2.73334 9.26675 3.33334 10.0001 3.33334C10.7334 3.33334 11.3334 2.73334 11.3334 2.00001C11.3334 1.26667 10.7334 0.666672 10.0001 0.666672ZM4.66675 2.00001C4.66675 1.26667 5.26675 0.666672 6.00008 0.666672C6.73341 0.666672 7.33341 1.26667 7.33341 2.00001C7.33341 2.73334 6.73341 3.33334 6.00008 3.33334C5.26675 3.33334 4.66675 2.73334 4.66675 2.00001Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
            <div className="1920:max-w-[432px] bg-[#EEDCFF] text-[12px]  flex flex-col p-[10px] rounded-[5px] gap-y-1">
              <p className="leading-3">Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.</p>
              <p>19:32</p>
            </div>
          </div>
        </div>

        {/* left */}
        <div className="flex flex-col gap-y-2">
          <span>Mary Hilda</span>
          <div className="flex gap-x-2">
            <div className="1920:max-w-[518px] bg-[#FCEED3] text-[12px]  flex flex-col p-[10px] rounded-[5px] gap-y-1">
              <p className="leading-3">Sure thing, Claren</p>
              <p>19:32</p>
            </div>
            <div className="w-4 h-4 items-center mt-[10px]">
              <svg width="16" height="16" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.00008 0.666672C1.26675 0.666672 0.666748 1.26667 0.666748 2.00001C0.666748 2.73334 1.26675 3.33334 2.00008 3.33334C2.73341 3.33334 3.33341 2.73334 3.33341 2.00001C3.33341 1.26667 2.73341 0.666672 2.00008 0.666672ZM10.0001 0.666672C9.26675 0.666672 8.66675 1.26667 8.66675 2.00001C8.66675 2.73334 9.26675 3.33334 10.0001 3.33334C10.7334 3.33334 11.3334 2.73334 11.3334 2.00001C11.3334 1.26667 10.7334 0.666672 10.0001 0.666672ZM4.66675 2.00001C4.66675 1.26667 5.26675 0.666672 6.00008 0.666672C6.73341 0.666672 7.33341 1.26667 7.33341 2.00001C7.33341 2.73334 6.73341 3.33334 6.00008 3.33334C5.26675 3.33334 4.66675 2.73334 4.66675 2.00001Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* date message */}
        <div className="flex items-center gap-x-3 mt-[22px]">
          <div className="flex-grow border-t border-[#EB5757]" />
          <span className="text-[#EB5757">New Message</span>
          <div className="flex-grow border-t border-[#EB5757]" />
        </div>

        {/* left */}
        <div className="flex flex-col gap-y-2">
          <span>Mary Hilda</span>
          <div className="flex gap-x-2">
            <div className="1920:max-w-[518px] bg-[#D2F2EA] text-[12px]  flex flex-col p-[10px] rounded-[5px] gap-y-1">
              <p className="leading-3">Morning. I’ll try to do them. Thanks</p>
              <p>19:32</p>
            </div>
            <div className="w-4 h-4 items-center mt-[10px]">
              <svg width="16" height="16" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.00008 0.666672C1.26675 0.666672 0.666748 1.26667 0.666748 2.00001C0.666748 2.73334 1.26675 3.33334 2.00008 3.33334C2.73341 3.33334 3.33341 2.73334 3.33341 2.00001C3.33341 1.26667 2.73341 0.666672 2.00008 0.666672ZM10.0001 0.666672C9.26675 0.666672 8.66675 1.26667 8.66675 2.00001C8.66675 2.73334 9.26675 3.33334 10.0001 3.33334C10.7334 3.33334 11.3334 2.73334 11.3334 2.00001C11.3334 1.26667 10.7334 0.666672 10.0001 0.666672ZM4.66675 2.00001C4.66675 1.26667 5.26675 0.666672 6.00008 0.666672C6.73341 0.666672 7.33341 1.26667 7.33341 2.00001C7.33341 2.73334 6.73341 3.33334 6.00008 3.33334C5.26675 3.33334 4.66675 2.73334 4.66675 2.00001Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-[22px]">
        <input type="text" placeholder="Type a new message" className="1920:w-[580px] h-10 px-4 py-[10px] border border-[#828282] rounded-[5px]" />
        <button className="ml-3 bg-[#2F80ED] text-white  w-[76px] h-10 px-4 rounded-[5px] py-2">Send</button>
      </div>
    </>
  )
}

export default DetailsMessage
