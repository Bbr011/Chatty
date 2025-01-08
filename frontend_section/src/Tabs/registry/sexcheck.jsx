import React from 'react'

const Sexcheck = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 min-w-96 mx-auto">
      <div className="form-control">
        <label className="label gap-1 cursor-pointer">
          <input
            type="checkbox"
            className="peer checkbox border-green-200 checked:bg-green-500"
          />
          <span className="label-text text-white peer-checked:text-green-500">
            male
          </span>
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-1 cursor-pointer">
          <input
            type="checkbox"
            className="peer checkbox border-green-200 checked:bg-blue-500"
          />
          <span className="label-text text-white peer-checked:text-blue-500">
            female
          </span>
        </label>
      </div>
    </div>
  )
}

export default Sexcheck