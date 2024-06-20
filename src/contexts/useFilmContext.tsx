import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import movieServices from '../services/movieServices'

type State = {
  trendingFilm: any[] // Adjust the type according to the shape of your film objects
  categoryFilm: string
  status: string
  query: string
  mediaType: string
}

type Action =
  | { type: 'GET_TRENDING_FILM'; payload: any[] } // Adjust the payload type as needed
  | { type: 'CAT_TYPE'; payload: string }
  | { type: 'QUERY'; payload: string }
  | { type: 'TYPE_QUERY'; payload: string }
  | { type: 'DATA_FAILED' }

export type ContextType = {
  query: string
  mediaType: string
  handleSearchQuery: (q: string) => void
  handleMediaType: (type: string) => void
  status: string
  trendingFilm: any[] // Adjust the type according to the shape of your film objects
  handleClickCategory: (cat: string) => void
}

const FilmContext = createContext<ContextType | null>(null)

const initialState = {
  trendingFilm: [],
  categoryFilm: 'all',
  status: 'loading',
  query: '',
  mediaType: '',
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'GET_TRENDING_FILM':
      return { ...state, trendingFilm: action.payload, status: 'success' }
    case 'CAT_TYPE':
      return { ...state, categoryFilm: action.payload, status: 'loading' }
    case 'DATA_FAILED':
      return { ...state, status: 'error' }
    case 'QUERY':
      return { ...state, query: action.payload }
    case 'TYPE_QUERY':
      return { ...state, query: action.payload }
    default:
      return state
  }
}

function FilmProvider({ children }: { children: ReactNode }) {
  const [{ trendingFilm, categoryFilm, status, query, mediaType }, dispatch] =
    useReducer(reducer, initialState)

  function handleSearchQuery(q: string) {
    dispatch({ type: 'QUERY', payload: q })
  }

  function handleMediaType(type: string) {
    dispatch({ type: 'TYPE_QUERY', payload: type })
  }

  function handleClickCategory(cat: string) {
    dispatch({ type: 'CAT_TYPE', payload: cat })
  }

  useEffect(() => {
    async function getTrendingVideo() {
      try {
        const data = await movieServices.fetchData(
          `/trending/${categoryFilm}/day`
        )
        const { results } = data
        dispatch({ type: 'GET_TRENDING_FILM', payload: results })
      } catch (error) {
        console.log(error)
        dispatch({ type: 'DATA_FAILED' })
      }
    }
    getTrendingVideo()
  }, [categoryFilm])

  return (
    <FilmContext.Provider
      value={{
        query,
        mediaType,
        handleSearchQuery,
        handleMediaType,
        status,
        trendingFilm,
        handleClickCategory,
      }}
    >
      {children}
    </FilmContext.Provider>
  )
}

// Custom hook
function useFilmContext() {
  return useContext(FilmContext)
}

export { FilmProvider, useFilmContext }
