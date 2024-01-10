import { useContext } from "react";
import { createContext } from "react";

export const SkillContext = createContext({
  skillHave: [],
  addSkill: () => {},
  removeSkill: () => {},
});

export const SkillContextProvider = SkillContext.Provider;

export default function useSkills() {
  return useContext(SkillContext);
}
