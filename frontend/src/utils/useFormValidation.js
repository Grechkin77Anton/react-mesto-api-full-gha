import { useCallback, useState } from "react"


export default function useFormValidation() {
    
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [isValid, setIsValid] = useState(false)
    const [isInputValid , setIsInputValid] = useState({})

    // console.log(isValid)
    function handleChange(event) {
        
        const name = event.target.name
        const value = event.target.value
        const validationMessage = event.target.validationMessage
        const valid = event.target.validity.valid
        const form = event.target.form

        setValues((pastValues) => {
            return {...pastValues, [name]:value}
        })

        setErrors((pastErrors) => {
            return {...pastErrors, [name]:validationMessage}
        })

        setIsValid(form.checkValidity())

        setIsInputValid((pastIsInputValid) => {
            return {...pastIsInputValid, [name]:valid}
        }) 

    }

    function formReset(data = {}) {
        setValues(data)
        setErrors({})
        setIsValid(false)
        setIsInputValid({})
    }

   const setValue = useCallback((name, value) => {
        setValues((pastValues) => {
            return {...pastValues, [name]:value}
        })
    }, [])

    return {handleChange, values, errors, isValid, isInputValid, formReset, setValue}
    
}