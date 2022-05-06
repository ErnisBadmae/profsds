import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardItem from './pages/registry-sro/card-item/card-item';
import { MainPage } from './components/main-page/main-page';
import { RegistryRSO } from './pages/registry-sro/registry-sro';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}>
                    <Route index element={<RegistryRSO />} />
                    <Route path="/view/:id" element={<CardItem />} />
                    <Route
                        path="/organ_certifications/list"
                        element={<RegistryRSO />}
                    />
                    <Route
                        path="/organ-certification-experts/list"
                        element={<RegistryRSO />}
                    />
                    <Route
                        path="/certificates/list"
                        element={<RegistryRSO />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
