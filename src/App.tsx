import Hero from "./components/Hero"
import MainLayout from "./layouts/MainLayout"
import Cv from "./pages/cv"

function App() {
  return (
    <>
        <MainLayout>
          <Hero />
          <Cv />
        </MainLayout>
    </>
  )
}

export default App
