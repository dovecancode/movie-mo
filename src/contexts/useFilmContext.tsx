import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import movieServices from '../services/movieServices'

type State = {
  trendingFilm: any[] // Adjust the type according to the shape of your film objects
  categoryFilm: string
}

type Action =
  | { type: 'GET_TRENDING_FILM'; payload: any[] } // Adjust the payload type as needed
  | { type: 'CAT_TYPE'; payload: string }

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

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'GET_TRENDING_FILM':
      return { ...state, trendingFilm: action.payload }
    case 'CAT_TYPE':
      return { ...state, categoryFilm: action.payload }
    default:
      return state
  }
}

function FilmProvider({ children }: { children: ReactNode }) {
  const initialState = { trendingFilm: [], categoryFilm: 'all' }
  const [{ trendingFilm, categoryFilm }, dispatch] = useReducer(
    reducer,
    initialState
  )

  // const [trendingFilm, setTrendingFilm] = useState([])
  // const [categoryFilm, setCategoryFilm] = useState('all')
  const [status, setStatus] = useState('idle')

  const [query, setQuery] = useState('')
  const [mediaType, setMediaType] = useState('')

  function handleSearchQuery(q: string) {
    setQuery(q)
  }

  function handleMediaType(type: string) {
    setMediaType(type)
  }

  function handleClickCategory(cat: string) {
    dispatch({ type: 'CAT_TYPE', payload: cat })
  }

  useEffect(() => {
    async function getTrendingVideo() {
      try {
        setStatus('loading')
        const data = await movieServices.fetchData(
          `/trending/${categoryFilm}/day`
        )
        const { results } = data
        dispatch({ type: 'GET_TRENDING_FILM', payload: results })

        setStatus('success')
      } catch (error) {
        setStatus('error')
        console.log(error)
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
