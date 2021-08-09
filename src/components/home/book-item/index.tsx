import React from 'react'
import { Volume } from '../../../models'
import { Thumbnail, Wrapper, Title } from './styles'
import DefaultCover from './default-cover.png'

interface Props {
  volume: Volume
}

const BookItem: React.FC<Props>  = (props: Props): JSX.Element => {
  return (
    <Wrapper>
      <Thumbnail
        src={props.volume.volumeInfo.imageLinks?.thumbnail || DefaultCover}
        alt={props.volume.volumeInfo.title}
      />

      <Title>
        {props.volume.volumeInfo.title}
      </Title>
    </Wrapper>
  )
}


export default BookItem