import { useState } from "react";

const useInputField = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleClickOnChange = e => {
        setFieldValue(e.target.value);
    }
    return [fieldValue, handleClickOnChange];
}

export default useInputField;