import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PortalPlaceholder from './pages/PortalPlaceholder'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<PortalPlaceholder />} />
        <Route path="/teacher" element={<PortalPlaceholder />} />
      </Routes>
    </BrowserRouter>
  )
}