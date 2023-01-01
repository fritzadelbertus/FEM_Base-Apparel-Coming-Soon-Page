import { useState } from "react"

export type useValidateEmailType = [
  string,
  boolean,
  React.Dispatch<React.SetStateAction<string>>, 
  ((event: any) => void)
]

export function useValidateEmail() {
  const [input, setInput] = useState('')
  const [inputError, setInputError] = useState(false)
  const handleForm = (event:any) => {
    event.preventDefault()
    const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if (input.match(pattern) == null) {
      setInputError(true)
    } else {
      setInputError(false)
    }
  }
  const returnValue: useValidateEmailType = [input, inputError, setInput, handleForm] 
  return returnValue
}

