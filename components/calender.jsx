"use client"
import React, { useState } from "react"

const Caldender = () => {
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
    <div className="relative">
      <button className="flex justify-between items-center px-4 py-2 border border-[#828282] text-[14px] rounded h-8 1920:h-10 1920:w-[193px]" onClick={toggleCalendar}>
        <span>{selectedDate || "Select Date"}</span>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="calendar_today_24px">
              <path
                id="icon/action/calendar_today_24px"
                fillRule="evenodd"
                clipRule="evenodd"
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
          className="absolute top-full mt-2 1920:ml-[160px] z-50 bg-white border border-[#828282] rounded-[5px] shadow-sm 1920:w-[258px] 1920:h-[241px]"
          style={{ zIndex: 9999 }} // Ensure the calendar is on top
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
            <ul className="flex 1920:gap-x-[20px] gap-x-[12px] items-center text-[#4F4F4F] text-center rounded-lg">
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
                <li key={day} onClick={() => handleDateSelect(day)} className={`${day === 10 ? "border border-[#2F80ED] rounded-full flex items-center justify-center h-6 w-6" : ""} cursor-pointer hover:bg-teal-100 h-6 w-6`}>
                  {day}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Caldender
