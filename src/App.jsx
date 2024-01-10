import { useEffect, useState } from "react";
import axios from "axios";

// Components Import
import { Card } from "./components";

// Context import
import { SkillContextProvider } from "./contexts/skillContext";

function App() {
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [filterJobs, setFilterJobs] = useState([]);
  const [skillHave, setSkillHave] = useState([]);
  const apiURL =
    "https://boppotech-admin.github.io/react-task-json.github.io/joblist.json";

  useEffect(() => {
    (async () => {
      try {
        const responseData = await axios.get(apiURL);
        if (responseData) {
          console.log("Successfully retrieved data", typeof responseData.data);
          setJobDescriptions(responseData.data);
          setFilterJobs(responseData.data);
        } else {
          alert("Error while retrieving job description");
        }
      } catch (error) {
        console.log("Error", error);
      }
    })();
  }, [setJobDescriptions, setSkillHave]);
  // console.log(jobDescriptions[0]?.skills);

  useEffect(() => {
    if (skillHave.length === 0) {
      setFilterJobs(jobDescriptions);
      return;
    }
    let jdHaveSkills = jobDescriptions
      .map((jobDescription) => {
        // console.log(jobDescription);
        const skills = jobDescription.skills.filter((skill) =>
          skillHave.includes(skill)
        );
        // console.log(skills);
        if (skills.length !== 0) return jobDescription;
      })
      .filter((item) => item !== undefined);
    // console.log("jdSkills", jdHaveSkills);
    setFilterJobs(jdHaveSkills);
  }, [skillHave, setSkillHave]);

  // console.log("skillhave", skillHave);

  const addSkill = (skill) => {
    // console.log("addSkill", skill);
    // console.log("addSkill skillHave", skillHave);
    if (skillHave.includes(skill)) return;
    setSkillHave([...skillHave, skill]);
  };

  const removeSkill = (skill) => {
    let newArr = skillHave.filter((item) => item !== skill);
    setSkillHave(newArr);
  };

  const clearSkillHave = () => {
    setSkillHave([]);
  };

  return (
    <SkillContextProvider value={{ addSkill, removeSkill, skillHave }}>
      <div className="bg-bgLightColor m-0 overflow-hidden static">
        {/* Banner */}
        <div className="w-screen h-[100px]">
          <img
            src="https://img.freepik.com/free-vector/watercolor-emerald-background_23-2150238649.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Main */}
        <div className="w-full h-full space-y-2">
          {/* Skills Div */}
          <div className="mx-4 flex justify-between items-center bg-white p-2 absolute top-14 w-[98%]">
            <div className="flex space-x-2 h-10">
              {skillHave.length !== 0 &&
                skillHave.map((skill, index) => (
                  <div
                    key={index}
                    className="flex justify-evenly items-center space-x-1 bg-bgLightColor text-textDarkColor font-bold p-1 rounded-md cursor-pointer"
                  >
                    <span>{skill}</span>
                    <button
                      className="bg-textDarkColor p-1 w-full h-full rounded-md font-bold text-white hover:bg-black "
                      onClick={() => {
                        removeSkill(skill);
                      }}
                    >
                      X
                    </button>
                  </div>
                ))}
            </div>
            {skillHave.length !== 0 && (
              <button
                className="text-textDarkColor hover:underline"
                onClick={clearSkillHave}
              >
                Clear
              </button>
            )}
          </div>
          {/* Card Div */}
          <div className="mt-6 hover:">
            {filterJobs &&
              filterJobs?.map((filterJob) => (
                <Card key={filterJob?._id?.$oid} jobData={filterJob} />
              ))}
          </div>
        </div>
      </div>
    </SkillContextProvider>
  );
}

export default App;
