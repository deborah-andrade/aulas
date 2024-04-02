import{ BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { Dashboard, Teste } from "../pages";

export const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                
                <Route path="/pagina-inicial" element={<Dashboard />}/>    
                <Route path="/teste" element={<Teste />}/>

                <Route path="*" element={<Navigate to="/pagina-inicial" />} />

            </Switch>
        </BrowserRouter>
    );
}