import React from 'react';
import './Lista_contatos.css'

function Usuarios() {

    return (
        <>
            <div className="font-label">
                <label>Email: </label>                
                <input className="textBox-email" type="text" value="" onChange="" />
                <label>Senha: </label>
                {/* <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} /> */}
                <input type="password" value="" onChange="" />
                {/* <button onClick={  }>Novo usuário</button> */}
                <button onClick="">Novo usuário</button>
                {/* <button onClick={ createUser }>Deslogar</button> */}
            </div>
            <div className="font-label">
                <label>Titulo: </label>
                {/* <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} /> */}
                <label>Autor: </label>
                {/* <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} /> */}
                <label>Mensagem: </label>
                {/* <textarea type="text" value={mensagem} onChange={(e) => setMensagem(e.target.value)} /> */}
                {/* <button onClick={ handleAdd }>Cadstrar</button> */}
            </div>
        </>
    )
}

export default Usuarios