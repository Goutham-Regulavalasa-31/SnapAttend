
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import PortalPlaceholder from './pages/PortalPlaceholder'
import TeacherAuthPage from './pages/TeacherAuthPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/student"
          element={<PortalPlaceholder />}
        />

        <Route
          path="/teacher"
          element={<TeacherAuthPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}
