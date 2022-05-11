import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './components/main-page/main-page';
import { RegistryRSO } from './pages/registry-sro/registry-sro';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}>
                    <Route
                        path="/"
                        element={
                            <Navigate
                                to="/standard-certifications/list"
                                replace
                            />
                        }
                    />
                    <Route
                        path="/organ-certification-expert/view/:id"
                        element={<CardRegCertExp />}
                    />
                    <Route
                        path="/certificate/view/:id"
                        element={<CardSertificate />}
                    />
                    <Route
                        path="/standard-certification/view/:id"
                        element={<CardRegCertExp />}
                    />
                    <Route
                        path="/organ-certification/view/:id"
                        element={<CardOs />}
                    />

                    <Route element={<TableWrapper />}>
                        <Route
                            path="/standard-certifications/list"
                            element={<RegistrySds />}
                        />
                        <Route
                            path="/organ-certifications/list"
                            element={<RegistryOs />}
                        />
                        <Route
                            path="/organ-certification-experts/list"
                            element={<RegistryCertificationExperts />}
                        />
                        <Route
                            path="/certificates/list"
                            element={<RegistryCertificates />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
