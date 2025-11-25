import { useContext } from "react";
import { MembersContext } from "./MembersContext";

export const useMembers = () => {
  const context = useContext(MembersContext);

  if (!context) {
    throw new Error("useMembers must be used within a MembersProvider");
  }

  return context;
};
