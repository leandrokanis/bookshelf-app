import React, { useState } from 'react'
import { BookItem, Shelf } from '../components/home'
import { Topbar } from '../components/shared'
import LayoutPage from '../components/shared/layout-page'
import LayoutResults from '../components/shared/layout-results'
import { IQueryParams } from '../config/types'
import { VolumesService } from '../services'

const HomePage: React.FC = (): JSX.Element => {

  const { useList } = VolumesService

  const [adventures] = useList({ q: 'adventure' })
  const [kids] = useList({ q: 'kids' })
  const [featured] = useList({ q: 'top' })
  const [action] = useList({ q: 'action' })
  const [searchResults, updateSearchResults] = useList()
  const [showResults, setShowResults] = useState<boolean>(false)

  return (
    <>
      <Topbar
        onSearch={(query: IQueryParams) => {
          setShowResults(true)
          updateSearchResults(query)
        }}
        onGoBack={() => setShowResults(false)}
      />

      {
        !showResults
          ? (<LayoutPage>
            <>
              <Shelf title="Aventura" volumes={adventures} />
              <Shelf title="Infantil" volumes={kids} />
              <Shelf title="Destaque" volumes={featured} isFeatured />
              <Shelf title="Acao" volumes={action} />
            </>
          </LayoutPage>)
          : (<LayoutResults>
            <>
              {
                searchResults?.map((result) => 
                  <BookItem volume={result} key={result.id} />
                )
              }
            </>
          </LayoutResults>)
      }
    </>
  )
}

export default HomePage
