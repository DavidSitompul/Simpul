"use client"
import React, { useState } from "react"
import Caldender from "./calender"

const Task = () => {
  const detailsTask = [
    {
      titleTask: "title",
      dateTask: "date",
      iconcalender: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="schedule_24px">
            <path
              id="icon/action/schedule_24px"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99181 1.66663C5.39181 1.66663 1.66681 5.39996 1.66681 9.99996C1.66681 14.6 5.39181 18.3333 9.99181 18.3333C14.6001 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6001 1.66663 9.99181 1.66663ZM10.0003 16.6666C6.31697 16.6666 3.33364 13.6833 3.33364 9.99996C3.33364 6.31662 6.31697 3.33329 10.0003 3.33329C13.6836 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6836 16.6666 10.0003 16.6666ZM9.16681 5.83329H10.4168V10.2083L14.1668 12.4333L13.5418 13.4583L9.16681 10.8333V5.83329Z"
              fill="#2F80ED"
            />
          </g>
        </svg>
      ),
      icondescription: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="schedule_24px">
            <path
              id="icon/action/schedule_24px"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99181 1.66663C5.39181 1.66663 1.66681 5.39996 1.66681 9.99996C1.66681 14.6 5.39181 18.3333 9.99181 18.3333C14.6001 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6001 1.66663 9.99181 1.66663ZM10.0003 16.6666C6.31697 16.6666 3.33364 13.6833 3.33364 9.99996C3.33364 6.31662 6.31697 3.33329 10.0003 3.33329C13.6836 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6836 16.6666 10.0003 16.6666ZM9.16681 5.83329H10.4168V10.2083L14.1668 12.4333L13.5418 13.4583L9.16681 10.8333V5.83329Z"
              fill="#2F80ED"
            />
          </g>
        </svg>
      ),
      calender: <Caldender />,
      descriptionTask:
        "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
      timeLeftTask: "time left",
    },
    {
      titleTask: "title",
      dateTask: "date",
      iconcalender: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="schedule_24px">
            <path
              id="icon/action/schedule_24px"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99181 1.66663C5.39181 1.66663 1.66681 5.39996 1.66681 9.99996C1.66681 14.6 5.39181 18.3333 9.99181 18.3333C14.6001 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6001 1.66663 9.99181 1.66663ZM10.0003 16.6666C6.31697 16.6666 3.33364 13.6833 3.33364 9.99996C3.33364 6.31662 6.31697 3.33329 10.0003 3.33329C13.6836 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6836 16.6666 10.0003 16.6666ZM9.16681 5.83329H10.4168V10.2083L14.1668 12.4333L13.5418 13.4583L9.16681 10.8333V5.83329Z"
              fill="#2F80ED"
            />
          </g>
        </svg>
      ),
      icondescription: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="schedule_24px">
            <path
              id="icon/action/schedule_24px"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99181 1.66663C5.39181 1.66663 1.66681 5.39996 1.66681 9.99996C1.66681 14.6 5.39181 18.3333 9.99181 18.3333C14.6001 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6001 1.66663 9.99181 1.66663ZM10.0003 16.6666C6.31697 16.6666 3.33364 13.6833 3.33364 9.99996C3.33364 6.31662 6.31697 3.33329 10.0003 3.33329C13.6836 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6836 16.6666 10.0003 16.6666ZM9.16681 5.83329H10.4168V10.2083L14.1668 12.4333L13.5418 13.4583L9.16681 10.8333V5.83329Z"
              fill="#2F80ED"
            />
          </g>
        </svg>
      ),
      calender: <Caldender />,
      descriptionTask: "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
      timeLeftTask: "time left",
    },
    {
      titleTask: "title",
      dateTask: "date",
      iconcalender: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="schedule_24px">
            <path
              id="icon/action/schedule_24px"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99181 1.66663C5.39181 1.66663 1.66681 5.39996 1.66681 9.99996C1.66681 14.6 5.39181 18.3333 9.99181 18.3333C14.6001 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6001 1.66663 9.99181 1.66663ZM10.0003 16.6666C6.31697 16.6666 3.33364 13.6833 3.33364 9.99996C3.33364 6.31662 6.31697 3.33329 10.0003 3.33329C13.6836 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6836 16.6666 10.0003 16.6666ZM9.16681 5.83329H10.4168V10.2083L14.1668 12.4333L13.5418 13.4583L9.16681 10.8333V5.83329Z"
              fill="#2F80ED"
            />
          </g>
        </svg>
      ),
      icondescription: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="schedule_24px">
            <path
              id="icon/action/schedule_24px"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99181 1.66663C5.39181 1.66663 1.66681 5.39996 1.66681 9.99996C1.66681 14.6 5.39181 18.3333 9.99181 18.3333C14.6001 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6001 1.66663 9.99181 1.66663ZM10.0003 16.6666C6.31697 16.6666 3.33364 13.6833 3.33364 9.99996C3.33364 6.31662 6.31697 3.33329 10.0003 3.33329C13.6836 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6836 16.6666 10.0003 16.6666ZM9.16681 5.83329H10.4168V10.2083L14.1668 12.4333L13.5418 13.4583L9.16681 10.8333V5.83329Z"
              fill="#2F80ED"
            />
          </g>
        </svg>
      ),
      calender: <Caldender />,
      descriptionTask: "No Description",
      timeLeftTask: "time left",
    },
    {
      titleTask: "title",
      dateTask: "date",
      timeLeftTask: "time left",
    },
    {
      titleTask: "title",
      dateTask: "date",
      timeLeftTask: "time left",
    },
  ]

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="flex justify-between relative">
        <div className="flex w-[288px] flex-col items-center justify-center relative">
          <button onClick={toggleDropdown} className="bg-white w-[120px] h-10 rounded-[5px] flex gap-x-2 items-center border border-[#828282] justify-center">
            <span className="text-[14px]">My Task</span>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5981 6.91248L10.7731 10.7291L6.94807 6.91248L5.77307 8.08748L10.7731 13.0875L15.7731 8.08748L14.5981 6.91248Z" fill="#4F4F4F" />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute z-10 top-full mt-2 w-[288px] h-20 text-[14px] border border-[#828282] rounded-[5px] shadow-sm bg-white">
              <ul className="w-full">
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Personal Errands
                  </a>
                </li>
                <hr className="border-[#828282]" />
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Urgent To-Do
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <button className="bg-[#2F80ED] text-white w-[100px] h-10 rounded-[5px] flex gap-x-2 items-center border justify-center">
          <span className="text-[14px]">New Task</span>
        </button>
      </div>

      <div className="overflow-y-auto sm:max-h-[247px] 2xl:max-h-[377px] 1920:max-h-[644px]">
        {detailsTask.map((dataTask, i) => {
          return (
            <div key={i} className="overflow-y-auto sm:max-h-[247px] 2xl:max-h-[377px] 1920:max-h-[554px]">
              <div className="mt-[19px] flex items-start 1920:w-full mb-4">
                <input type="checkbox" name="" id="" className="w-[18px] h-[18px] mr-[22px]" />
                <span className="1920:w-[334px] 1920:mr-[56px] text-base font-bold">{dataTask.titleTask}</span>

                <div className="flex items-start text-[14px]">
                  <span className="1920:w-[75px]  1920:mr-[20px] text-[#EB5757]">{dataTask.timeLeftTask}</span>
                  <span className="1920:w-[75px]  1920:mr-[10px] text-[#4F4F4F]">{dataTask.dateTask}</span>
                  <div className="1920:mr-[15px]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="expand_more_24px">
                        <path id="icon/navigation/expand_more_24px" d="M6.175 13.0875L10 9.27086L13.825 13.0875L15 11.9125L10 6.91253L5 11.9125L6.175 13.0875Z" fill="#4F4F4F" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <svg width="16" height="16" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.00008 0.666672C1.26675 0.666672 0.666748 1.26667 0.666748 2.00001C0.666748 2.73334 1.26675 3.33334 2.00008 3.33334C2.73341 3.33334 3.33341 2.73334 3.33341 2.00001C3.33341 1.26667 2.73341 0.666672 2.00008 0.666672ZM10.0001 0.666672C9.26675 0.666672 8.66675 1.26667 8.66675 2.00001C8.66675 2.73334 9.26675 3.33334 10.0001 3.33334C10.7334 3.33334 11.3334 2.73334 11.3334 2.00001C11.3334 1.26667 10.7334 0.666672 10.0001 0.666672ZM4.66675 2.00001C4.66675 1.26667 5.26675 0.666672 6.00008 0.666672C6.73341 0.666672 7.33341 1.26667 7.33341 2.00001C7.33341 2.73334 6.73341 3.33334 6.00008 3.33334C5.26675 3.33334 4.66675 2.73334 4.66675 2.00001Z"
                        fill="#4F4F4F"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className={` ${dataTask.iconcalender && dataTask.calender ? "mb-[13px] ml-10 gap-x-2" : "mb-0"} "bg-yellow-500 flex items-center h-auto 1920:ml-[60px]"`}>
                {dataTask.iconcalender}
                {/* calender */}
                <div className="">{dataTask.calender}</div>
              </div>
              <div className={` ${dataTask.icondescription && dataTask.descriptionTask ? "mb-[13px] ml-10" : "mb-0"} flex items-center  gap-x-[10px] 1920:ml-[40px]`}>
                <div>{dataTask.icondescription}</div>
                <span className="text-[14px]">{dataTask.descriptionTask}</span>
              </div>
              <hr className="w-full mt-[18px] borde=[#828282]" />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Task
