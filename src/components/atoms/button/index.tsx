import { NextPage } from 'next'
import { IButton } from '../../../../@types/components'

const Button: NextPage<IButton> = ({ label }) => {
  return (
    <button>{ label }</button>
  )
}

export default Button