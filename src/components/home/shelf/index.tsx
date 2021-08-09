import React from 'react'
import { TitleHeading } from '../../shared'
import { Container, Wrapper } from './styles'


interface Props {
  isFeatured?: boolean
  title: string
  children: JSX.Element
}

const Shelf: React.FC<Props>  = (props: Props): JSX.Element => {
  return (
    <Wrapper className={props.isFeatured ? 'is-featured' : ''}>
      <TitleHeading>
        {props.title}
      </TitleHeading>

      <Container className={props.isFeatured ? 'is-featured' : ''}>
        {props.children}
      </Container>
    </Wrapper>
  )
}

Shelf.defaultProps = {
  isFeatured: false,
}

export default Shelf