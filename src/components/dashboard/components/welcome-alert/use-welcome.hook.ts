import { useState } from "react";

export default function useWelcome(){
    const [isWelcome, setIsWelcome] = useState(false);
    const handleShow = () =>{
        setIsWelcome(true);
    }
    return{
        handleShow,
        isWelcome
    }
}