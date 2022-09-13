import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Solucoes from './components/pages/solucoes/Solucoes';
import Downloads from './components/pages/downloads/Downloads';
import Blog from './components/pages/blog/Blog';
import Contato from './components/pages/contato/Contato';
import Menu from './components/pages/conta_cliente/ContaCli';
import Headers from './components/pages/headers/Headers';
import Home from './components/pages/home/Home';

import reportWebVitals from'./reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
        <Route path="/" element={<Home />} />  
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/headers" element={<Headers />} />        
        </Route>
      </Routes>
    </BrowserRouter>  
);

reportWebVitals();