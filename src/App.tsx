import EventDetails from "./pages/EventDetails/EventDetails"
import Home from "./pages/Home/Home."
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import AuthProvider from "./contexts/auth"

function App() {

  const [size, setSize] = useState<number>(window.innerWidth)

    useEffect(() => {
        function handleResize(){
            setSize(window?.innerWidth)
            console.log(size)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const [eventId, setEventId] = useState<string>("")

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/gather-frontend" element={<Home size={size} setEventId={setEventId} />}></Route>
          <Route path="/gather-frontend/info" element={<EventDetails eventId={eventId} />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
