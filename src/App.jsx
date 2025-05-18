
import { Route, Routes } from 'react-router-dom'

import { useState } from 'react';
import Home from './components/Home'
import EventPage from './components/EventPage'
import CategoryPage from './components/CategoryPage'
import Dashboard from './components/Dashboard'
import SanityEventPage from './components/SanityEventPage'
import Layout from './components/Layout'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
  <>
   <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="event/:id" element={<EventPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="dashboard"element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="sanityEvent/:id" element={<SanityEventPage />} />
      </Routes>
    </Layout>
    
  </>
  );
  
}

export default App;
