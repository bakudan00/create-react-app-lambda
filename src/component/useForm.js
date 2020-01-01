import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    const [value, setValue] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {
        const { name, values } = event.target
        setValue({
            ...value,
            [name]: values
            })
        }
        
    const handleSubmit = event => {
        event.preventDefault(); 
        setErrors(validate(value));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (isSubmitting) {
          callback();
        }
      }, [errors]);

    return {
        handleChange,
        handleSubmit,
        value,
        errors
      };
    
};

export default useForm;
