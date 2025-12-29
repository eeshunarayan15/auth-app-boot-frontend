import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import "./index.css";
import {RootLayout} from "./components/RootLayout.tsx";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";
import Profile from "./components/ui/Profile.tsx";
import About from "./components/About.tsx";
import Services from "./components/Services.tsx";
import {Home} from "lucide-react";
import App from "./App.tsx";


createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>

            <Route path="/" element={<RootLayout/>}>
                <Route index element={<App/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                {/* <Route path="/oauth2/redirect" element={<OAuthRedirect />} /> */}
                {/* Protected Routes */}
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                {/* Default redirect */}
                {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
                {/* 404 Not Found */}
                {/* <Route path="*" element={<NotFound />} /> */}
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
