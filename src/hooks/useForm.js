import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, fieldsValidations = {}  ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {

        createValidators();
    }, [formState])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }
    
    const isFormValid = useMemo(() => {
        for(const fieldValue of Object.keys(formValidation)){
            if(formValidation[fieldValue] !== null) return false;
        }

        return true;
    }, [formValidation])


    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const checkedValues = {}
        for (const formField of Object.keys(fieldsValidations))  {
            const [fn, errorMessage] = fieldsValidations[formField]    
            checkedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;


        }

        setFormValidation(checkedValues);
        

        
    }




    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        createValidators,
        ...formValidation,
        isFormValid


    }
}