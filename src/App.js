import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './components/main-page/main-page';
import { RegistrySds } from './pages/registry-sds/registry-sds';
import { RegistryCertificationExperts } from './pages/registry-certificate-expert/registryCertificateExperts';
import { TableWrapper } from './components/tableWrapper/tableWrapper';
import { RegistryOs } from './pages/registry-os/registry-os';
import { RegistryCertificates } from './pages/registry-certificates/registry-certificates';
import CardSertificate from './pages/registry-certificates/card-certificates/card-certificates';
import CardOs from './pages/registry-os/card-os/card-os';
import CardExpert from './pages/registry-certificate-expert/card-reg-cert-exp/card-reg-cert-exp';
import CardSds from './pages/registry-sds/card-sds/card-sds';

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
                        element={<CardExpert />}
                    />
                    <Route
                        path="/certificate/view/:id"
                        element={<CardSertificate />}
                    />
                    <Route
                        path="/standard-certification/view/:id"
                        element={<CardSds />}
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
                    =
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
