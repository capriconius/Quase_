declare module 'react-input-mask' {
  import * as React from 'react'

  export interface InputMaskProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string | (string | RegExp)[]
    alwaysShowMask?: boolean
    maskChar?: string | null
    beforeMaskedValueChange?: (
      newState: {
        value: string
        selection: { start: number | null; end: number | null }
      },
      oldState: {
        value: string
        selection: { start: number | null; end: number | null }
      },
      userInput?: string
    ) => {
      value: string
      selection: { start: number | null; end: number | null }
    }
  }

  const InputMask: React.FC<InputMaskProps>

  export default InputMask
}
