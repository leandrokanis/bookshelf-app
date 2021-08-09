import React from 'react'
import { Shelf, Volume } from '../components/home'
import { Topbar } from '../components/shared'
import LayoutPage from '../components/shared/layout-page'

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Topbar />
      
      <LayoutPage>
        <>
          <Shelf title="Aventura">
            <>
              <Volume />
              <Volume />
              <Volume />
              <Volume />
            </>
          </Shelf>

          <Shelf title="Infantil">
            <>
              <Volume />
              <Volume />
              <Volume />
              <Volume />
            </>
          </Shelf>

          <Shelf title="Destaque" isFeatured>
            <>
              <Volume />
              <Volume />
              <Volume />
              <Volume />
            </>
          </Shelf>

          <Shelf title="Acao">
            <>
              <Volume />
              <Volume />
              <Volume />
              <Volume />
            </>
          </Shelf>
        </>
      </LayoutPage>
    </>
  )
}

export default HomePage
