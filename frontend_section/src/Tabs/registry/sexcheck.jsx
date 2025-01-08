import React from 'react'

const Sexcheck = ({selectedSex, oncheckboxchange}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 min-w-96 mx-auto">
      <div className="form-control">
        <label className={`label gap-1 cursor-pointer ${selectedSex === "male" ? "selected" : "" }`}>
          <input
            type="checkbox"
            className="peer checkbox border-green-200 checked:bg-green-500"
            checked={selectedSex === "male"}
            onChange={() => oncheckboxchange("male")}
          />
          <span className="label-text text-white peer-checked:text-green-500">
            male
          </span>
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-1 cursor-pointer ${selectedSex === "female" ? "selected" : "" }`}>
          <input
            type="checkbox"
            className="peer checkbox border-green-200 checked:bg-blue-500"
            checked={selectedSex === "female"}
            onChange={() => oncheckboxchange("female")}
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