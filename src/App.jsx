import { useState, useEffect } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [tourslist, setToursList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const removeSingleTour = (id) => {
    const newTours = tourslist.filter((singletour) => singletour.id !== id)
    setToursList(newTours)
  }

  const fetchTours = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data)
      setToursList(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tourslist.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>

          <button
            type="button"
            className="btn"
            style={{ marginTop: '2rem' }}
            onClick={fetchTours}
          >
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tourslist={tourslist} removeSingleTour={removeSingleTour} />
    </main>
  )
}
export default App
