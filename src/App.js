import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardItem from './pages/registry-sds/card-item/card-item';
import { MainPage } from './components/main-page/main-page';
import { RegistrySds } from './pages/registry-sds/registry-sds';
import { RegistryCertificationExperts } from './pages/registry-certificate-expert/registryCertificateExperts';
import { TableWrapper } from './components/tableWrapper/tableWrapper';
import { RegistryOs } from './pages/registry-os/registry-os';
import { RegistryCertificates } from './pages/registry-certificates/registry-certificates';
import CardRegCertExp from './pages/registry-certificate-expert/card-reg-cert-exp/card-reg-cert-exp';
import CardSertificate from './pages/registry-certificates/card-certificates/card-certificates';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}>
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
                        element={<CardItem />}
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
