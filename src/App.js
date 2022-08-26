import { useEffect, useState } from 'react'

import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main className="flex justify-center">
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main className="flex justify-center pt-20 items-center">
        <div className="">
          <h2 className="text-2xl font-semibold">..No tours</h2>
          <button
            className="bg-amber-500  py-2 px-6 rounded-2xl"
            onClick={fetchTours}
          >
            {' '}
            Refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main className="container mx-auto max-w-md">
      <div>
        <Tours tours={tours} removeTour={removeTours} />
      </div>
    </main>
  )
}

export default App
