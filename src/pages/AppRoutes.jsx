import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Pokes } from "./Pokes"
import { Poke } from "./Poke.jsx"

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Pokes />} />
                <Route exact path="/:name" element={<Poke />} />
            </Routes>
        </BrowserRouter>
    )

}

export { AppRoutes }