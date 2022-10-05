import { useGlobalContext } from "./context";

import './App.css'

import Search from './components/Search'
import Meals from './components/Meals'
import Favorites from './components/Favorites'
import Modal from './components/Modal'

function App() {
  const {showModal, favorites} = useGlobalContext()

  return (
    <main>
      <Search/>
      {favorites.length > 0 && <Favorites/> }
      <Meals/>
      { showModal && <Modal/>}
    </main>
  )
}

export default App
