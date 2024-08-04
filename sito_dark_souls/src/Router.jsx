import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DarkSouls1 from './DarkSouls1/darksouls1';
import DarkSouls2 from './DarkSouls2/darksouls2';
import DarkSouls3 from './DarkSouls3/darksouls3';
import Bloodborne from './Bloodborne/bloodborne';
import Sekiro from './Sekiro/sekiro';
import EldenRing from './EldenRing/eldenring';

function SceltaRoute() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/DarkSouls1" element={<DarkSouls1 />} />
            <Route path="/DarkSouls2" element={<DarkSouls2 />} />
            <Route path="/DarkSouls3" element={<DarkSouls3 />} />
            <Route path="/Bloodborne" element={<Bloodborne />} />
            <Route path="/Sekiro" element={<Sekiro />} />
            <Route path="/EldenRing" element={<EldenRing />} />
        </Routes>
    );
}

export default SceltaRoute;