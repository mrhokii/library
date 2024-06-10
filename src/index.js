import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"

import App from "./App";
import About from "./components/About";
import Books from "./components/books";
import Book from "./components/book";
import NotFound from "./components/NotFound";


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/Books" element={<Books />}>
                        <Route/>
                        <Route path={':BookId'} element={<Book />} />
                    </Route>
                <Route path="*" element={<NotFound />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)