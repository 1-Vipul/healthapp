import { useState } from "react";

const useFormValidation:any = (validationFun:any) =>{
    const [input, setInput] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const inputIsEmpty = validationFun(input);
  
    
    return{input,
        setInput,
        isTouched,
        setIsTouched,
        inputIsEmpty
    }
}

export default useFormValidation;