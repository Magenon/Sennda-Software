import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Solucoes from './src/components/pages/solucoes/Solucoes';
import Downloads from './src/components/pages/downloads/Downloads';
import Blog from './src/components/pages/blog/Blog';
import Contato from './src/components/pages/contato/Contato';
import Menu from './src/components/pages/conta_cliente/ContaCli';
import Headers from './src/components/pages/headers/Headers';
import Home from './src/components/pages/home/Home';

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