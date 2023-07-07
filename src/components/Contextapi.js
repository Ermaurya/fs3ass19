import { createContext, useState } from "react";
export const UserContext = createContext();
const CustomProvider=({children})=>{
    const [isUserss, setIsUserss] = useState(false);
  return (
    <UserContext.Provider value={{ isUserss, setIsUserss }}>
      {children}
    </UserContext.Provider>
  );
}
export default CustomProvider;