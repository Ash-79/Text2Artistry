import React from 'react'

export default function FormField( {labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe} ) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
            htmlFor={name}
            className='block text-sm font-medium text-gray-900'
        >
            {labelName}
        </label>

        {isSurpriseMe && (
            <button
                type="button"
                className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
                onClick={handleSurpriseMe}
            >
                Surprise Me
            </button>
        )}
      </div>

      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="border bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649FF] focus:border-[#4649FF] outline-none block w-full p-3"
      />
    </div>
  )
}
