import React from "react";
import useSkills from "../contexts/skillContext";

function Skills({ skills }) {
  //   console.log(skills);
  const { addSkill } = useSkills();
  const handlClick = (skill) => {
    addSkill(skill);
  };
  return (
    <div className="skills flex space-x-2 text-clip w-[60%] justify-end items-center mr-2 cursor-pointer">
      {skills &&
        skills.map((item, index) => (
          <div
            key={index}
            className="my-3 bg-bgLightColor text-center text-textDarkColor p-2 font-bold truncate whitespace-nowrap overflow-hidden hover:overflow-visible hover:bg-textDarkColor hover:text-white "
            onClick={() => handlClick(item)}
          >
            <span>{item}</span>
          </div>
        ))}
    </div>
  );
}

export default Skills;
