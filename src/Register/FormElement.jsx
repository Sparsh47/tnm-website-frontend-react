import React from "react";

const FormElement = ({ member, handleChange, index, name }) => {
  // const { first_name, first_phone, first_college } = member;

  console.log(name);
  return (
    <form className="px-1">
      <div className="flex flex-col">
        <label className="text-[#919AA4] py-1 font-bold">Name</label>
        <input
          required
          type="text"
          placeholder="Enter your name"
          onChange={(e) => handleChange(index, `${name}_name`, e.target.value)}
          className="p-3 mb-5 rounded-md bg-transparent outline-none border-[0.5px] border-[#919AA4] text-[#919AA4]"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[#919AA4] py-1 font-bold">Phone No.</label>
        <input
          required
          type="number"
          placeholder="Enter your phone number"
          onChange={(e) => handleChange(index, `${name}_phone`, e.target.value)}
          className="p-3 mb-5 rounded-md bg-transparent outline-none border-[0.5px] border-[#919AA4] text-[#919AA4]"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[#919AA4] py-1 font-bold">College Name</label>
        <input
          required
          type="text"
          placeholder="Enter your college name"
          onChange={(e) =>
            handleChange(index, `${name}_college`, e.target.value)
          }
          className="p-3 mb-5 rounded-md bg-transparent outline-none border-[0.5px] border-[#919AA4] text-[#919AA4]"
        />
      </div>
    </form>
  );
};

export default FormElement;
