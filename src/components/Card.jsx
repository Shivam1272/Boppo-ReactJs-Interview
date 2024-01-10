import React from "react";
import Skills from "./Skills";

function Card(jobData) {
  //   console.log(jobData.jobData);
  const { _id, skills, company, jobTitle, formattedAddress, companyImage } =
    jobData.jobData;
  //   console.log(_id, skills, company, jobTitle, formattedAddress, companyImage);
  return (
    <div className="bg-white flex justify-between items-center m-4">
      {/* Company Details */}
      <div className="card-company flex justify-evenly items-center my-3 max-w-[40%]">
        {/* image Div */}
        <div className="m-4 w-[20%]">
          <img
            src={companyImage}
            alt="companyImage"
            className="w-[70px] h-[70px] rounded-full object-cover"
          />
        </div>
        {/* Text Div */}
        <div className="space-y-1 text-black hover:text-textDarkColor w-[80%]">
          <h2 className="font-bold">{company.companyName}</h2>
          <h1 className="font-bold">{jobTitle}</h1>
          <p className="text-sm text-clip hover:text-black truncate whitespace-nowrap overflow-hidden hover:overflow-visible">
            {formattedAddress}
          </p>
        </div>
      </div>
      {/* SKills */}
      <div className="flex max-w-[60%] flex-1 justify-end items-center">
        <Skills skills={skills} />
      </div>
    </div>
  );
}

export default Card;

{
  /* <div className="skills flex space-x-2 text-clip w-[60%] justify-end items-center mr-2 cursor-pointer">
        {skills &&
          skills.map((item, index) => (
            <div
              key={index}
              className="my-3 bg-bgLightColor text-center text-textDarkColor p-2 font-bold hover:bg-textDarkColor hover:text-white"
            >
              <span>{item}</span>
            </div>
          ))}
      </div> */
}
