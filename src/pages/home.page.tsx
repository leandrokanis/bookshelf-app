import React from 'react'
import { Shelf, BookItem } from '../components/home'
import { Topbar } from '../components/shared'
import LayoutPage from '../components/shared/layout-page'
import { mockVolume } from '../models/mocks'

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Topbar />
      
      <LayoutPage>
        <>
          <Shelf title="Aventura">
            <>
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
            </>
          </Shelf>

          <Shelf title="Infantil">
            <>
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
            </>
          </Shelf>

          <Shelf title="Destaque" isFeatured>
            <>
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
            </>
          </Shelf>

          <Shelf title="Acao">
            <>
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
              <BookItem volume={mockVolume()} />
            </>
          </Shelf>
        </>
      </LayoutPage>
    </>
  )
}

export default HomePage
