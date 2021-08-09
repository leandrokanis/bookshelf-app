import React, { useState } from 'react'
import { Logo } from '..'
import { IQueryParams } from '../../../config/types'
import { Nav } from './styles'

interface Props {
  onSearch: Function
  onGoBack: Function
}

enum MODES { show, search, results }

const Topbar: React.FC<Props>  = (props: Props): JSX.Element => {

  const [mode, setMode] = useState<MODES>(MODES.show)
  const [query, setQuery] = useState<string>('')

  const queryParams: IQueryParams = {
    q: query,
    maxResults: 40,
  }

  return (
    <>
      {mode === MODES.show && (
        <Nav>
          <Logo />
          <button onClick={() => setMode(MODES.search)} >buscar</button>
        </Nav>
      )}

      {mode === MODES.search && (
        <Nav>
          <input value={query} onChange={(event) => setQuery(event.currentTarget.value)} />
          <button onClick={() => {
            props.onSearch(queryParams)
            setMode(MODES.results)
          }} >buscar</button>
        </Nav>
      )}

      {mode === MODES.results && (
        <Nav>
          <button onClick={() => {
            setQuery('')
            props.onGoBack()
            setMode(MODES.show)
          }} >voltar</button>
          <p>Resultados de busca</p>
        </Nav>
      )}
    </>
  )
}

export default Topbar
