
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import EventPage from './components/EventPage'
import EventCard from './components/EventCard'
import CategoryPage from './components/CategoryPage'
import Dashboard from './components/Dashboard'
import ArtistCard from './components/ArtistCard'
import Layout from './components/Layout'

function App() {

  return (
  <>
   <Layout>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Home />} />
        <Route path="event/:id" element={<EventPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="dashboard" element={<Dashboard />} />
=======
        
        <Route path="/" element={<Home />} />
        <Route path="event/:id" element={<EventPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="dashboard"element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
        
>>>>>>> Stashed changes
      </Routes>
      </Layout>
    
  </>
  );
  
}

export default App;
