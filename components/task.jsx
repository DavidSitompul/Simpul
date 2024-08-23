"use client"
import React, { useState } from "react"

const Task = () => {
  const detailsTask = [
    {
      titleTask: "title",
      dateTask: "date",
      descriptionTask: "description",
      timeLeftTask: "time left",
    },
    {
      titleTask: "title",
      dateTask: "date",
      descriptionTask: "description",
      timeLeftTask: "time left",
    },
    {
      titleTask: "title",
      dateTask: "date",
      descriptionTask: "description",
      timeLeftTask: "time left",
    },
  ]

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)

  // Toggle calendar visibility
  const toggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev)
  }

  // Handle date selection
  const handleDateSelect = (day) => {
    const date = new Date(2021, 5, day) // Month is 0-indexed (June is 5)
    const formattedDate = formatDate(date)
    setSelectedDate(formattedDate)
    setIsCalendarOpen(false) // Close calendar on date selection
  }

  // Format the date as DD/MM/YYYY
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0") // Months are 0-indexed
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }
  return (
    <>
      <div className="flex justify-between">
        <div className="flex w-[288px] flex-col items-center justify-center">
          <button onClick={toggleDropdown} className="bg-white w-[120px] h-10 rounded-[5px] flex gap-x-2 items-center border border-[#828282] justify-center">
            <span className="text-[14px]"> My Task</span>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5981 6.91248L10.7731 10.7291L6.94807 6.91248L5.77307 8.08748L10.7731 13.0875L15.7731 8.08748L14.5981 6.91248Z" fill="#4F4F4F" />
            </svg>
          </button>
          {isOpen && (
            <div className="flex mt-2 w-[288px] h-20 text-[14px]  border border-[#828282] rounded-[5px] shadow-sm">
              <ul className="w-full ">
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
          <span className="text-[14px]"> New Task</span>
        </button>
      </div>

      
      <div className="bg-red-500">
        <div className="flex items-start 1920:w-full mb-4">
          <input type="checkbox" name="" id="" className="w-[18px] h-[18px] mr-[22px]" />
          <span className="1920:w-[334px] bg-red-400 1920:mr-[56px] text-base font-bold">Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203</span>

          <div className="flex items-start text-[14px]">
            <span className="1920:w-[75px] bg-green-400 1920:mr-[20px] text-[#EB5757]">4 Days Left</span>
            <span className="1920:w-[75px]  bg-yellow-400 1920:mr-[10px] text-[#4F4F4F]">14/06/2021</span>
            <div className="1920:mr-[15px">
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

        <div className="flex items-center gap-x-[10px] 1920:ml-[40px]">
          <div>
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
          </div>
          <div className="relative mb-[13px]">
            <button className="flex justify-between items-center px-4 py-2 border border-[#828282] text-[14px] rounded h-8 1920:h-10 1920:w-[193px]" onClick={toggleCalendar}>
              <span>{selectedDate || "Select Date"}</span>
              <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="calendar_today_24px">
                    <path
                      id="icon/action/calendar_today_24px"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.3334 2.00002H12.6667V0.666687H11.3334V2.00002H4.66671V0.666687H3.33337V2.00002H2.66671C1.93337 2.00002 1.33337 2.60002 1.33337 3.33335V14C1.33337 14.7334 1.93337 15.3334 2.66671 15.3334H13.3334C14.0667 15.3334 14.6667 14.7334 14.6667 14V3.33335C14.6667 2.60002 14.0667 2.00002 13.3334 2.00002ZM13.3334 14H2.66671V6.66669H13.3334V14ZM2.66671 5.33335H13.3334V3.33335H2.66671V5.33335Z"
                      fill="#4F4F4F"
                    />
                  </g>
                </svg>
              </div>
            </button>

            {/* Calendar Component */}
            {isCalendarOpen && (
              <div
                className="calender 1920:w-[258px] 1920:h-[241px] bg-white border border-[#828282] rounded-[5px] shadow-sm absolute top-full mt-2 1920:left-[160px]"
                // Align calendar to the right of the button
              >
                <div className="text-center px-4 py-2 1920:px-[22px] 1920:py-[12px]">
                  <ul className="flex justify-between items-center text-[14px] ">
                    <li className="cursor-pointer">&#10094;</li>
                    <li className="font-bold">
                      <span className="">June</span>
                      <span>2021</span>
                    </li>
                    <li className="cursor-pointer">&#10095;</li>
                  </ul>
                </div>
                <div className="1920:px-[22px] px-2">
                  <ul className="flex 1920:gap-x-[20px] gap-x-[12px] items-center text-[#4F4F4F] text-center rounded-lg 1920:mb-[18px]">
                    <li>M</li>
                    <li>T</li>
                    <li>W</li>
                    <li>Th</li>
                    <li>F</li>
                    <li>S</li>
                    <li>S</li>
                  </ul>
                  <ul className="grid grid-cols-7 1920:gap-x-[20px] 1920:gap-y-[4px] items-center text-left rounded-lg text-[14px]">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <li key={day} onClick={() => handleDateSelect(day)} className={`${day === 10 ? "border border-[#2F80ED] rounded-full flex items-center justify-center h-6 w-6 " : ""} cursor-pointer hover:bg-teal-100 h-6 w-6`}>
                        {day}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-[10px] 1920:ml-[40px]">
          <div>
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
          </div>
          <span>teks</span>
        </div>
      </div>
    </>
  )
}

export default Task
