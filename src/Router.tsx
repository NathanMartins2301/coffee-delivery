import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layouts/DefaultLayout";
import { Chekcout } from "./pages/Checkout";
import { Success } from "./pages/Success";
import { Home } from "./pages/Home";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Chekcout />} />
                <Route path="/success" element={<Success />} />
            </Route>
        </Routes>
    )
}