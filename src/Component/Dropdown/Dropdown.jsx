import React from "react";
function Dropdown({ title, options, func }) {
  return (
    <div classname="select flex items-center ">
      <select
        name="format"
        id="format"
        defaultValue="0"
        onChange={func}
        className="w-32 sm:w-50 md:w-52 sm:w-40 border-none outline-none rounded-lg px-4 py-2 bg-zinc-800 text-white flex items-center justify-center"
      >
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
