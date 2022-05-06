import { useState } from 'react';
import { log } from '../utils/logs';


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    }


    const handleInputChange = ({ target }) => {
        log("this is from value");
        log(target);
        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [values, handleInputChange, reset];

}