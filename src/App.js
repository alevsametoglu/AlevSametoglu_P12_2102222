import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Dashboard from './pages/Dashboard'

import ErrorPage from './pages/ErrorPage'
import UserList from './pages/UserList'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<UserList />} />
                <Route
                    path="user/:id"
                    element={
                        <MainLayout>
                            <Dashboard />
                        </MainLayout>
                    }
                />
                <Route path="/yoga" element={<ErrorPage />} />
                <Route path="/swimming" element={<ErrorPage />} />
                <Route path="/biking" element={<ErrorPage />} />
                <Route path="/bodyBuilding" element={<ErrorPage />} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default App
