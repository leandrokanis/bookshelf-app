import React from 'react'
import { Wrapper } from './styles'


interface Props {
  children: JSX.Element
}

const LayoutResults: React.FC<Props>  = (props: Props): JSX.Element => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default LayoutResults