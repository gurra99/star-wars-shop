import React from "react";
import "react-toastify/dist/ReactToastify.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import {Layout} from "./components/structure/layout/layout";
import Header from "./components/fragments/header/header";
import {AppContainer} from "./App.styles";
import Movie from "./pages/movie/movie";
import Cart from "./pages/cart/cart";
import Characters from "./pages/characters/characters";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <AppContainer>
            <Layout>
                <Header/>
                <ToastContainer
                    position={"top-left"}
                    autoClose={5000}
                    hideProgressBar={false}
                    closeOnClick={true}
                    pauseOnHover={true}
                    draggable={true}
                />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/characters" element={<Characters/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/movie/:id" element={<Movie/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </Layout>
        </AppContainer>
    );
}

export default App;