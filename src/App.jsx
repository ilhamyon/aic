import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './utils'
import Home from './pages/Home'
import NotFound from './pages/404'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ClubMembership from './pages/ClubMembership'
import Leadership from './pages/Leadership'
import Competitions from './pages/Competitions'
import SprintTraining from './pages/SprintTraining'
import PerformanceDashboard from './pages/PerformanceDashboard'
import DataAnalytic from './pages/DataAnalytic'
import OneOnOneCoaching from './pages/OneOnOneCoaching'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/club-membership" element={<ClubMembership />} />
            <Route path="/competition" element={<Competitions />} />
            <Route path="/sprint-training" element={<SprintTraining />} />
            <Route path="/performance-dashboard" element={<PerformanceDashboard />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/data-analytics" element={<DataAnalytic />} />
            <Route path="/one-on-one-coaching" element={<OneOnOneCoaching />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
