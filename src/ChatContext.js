import { useContext, createContext, useState } from 'react';
//import {useHistory} from "react-router-dom";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();

  //const history = useHistory();

  //useEffect(() => {
    //const userInfor = JSON.parse(localStorage.getItem("userInfo"));
    //setUser(userInfor)

    //if (!userInfor){
      //history.push("/");
    //}

 // }, [history])

    return (
      <ChatContext.Provider value={{ user, setUser }}>
        {children}
      </ChatContext.Provider>
    );
};

export const useChat = () => {
    return useContext(ChatContext);
};