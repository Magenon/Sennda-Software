import { useState, useEffect } from 'react';
import { db, auth } from '../../../../Connections/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { createUserWhithEmailAndPassword, signOut } from 'firebase/auth';

// import './Usuarios.css'
// import { useEffect } from 'react';

function Usuarios() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [postsFire, setPostsFire] = useState([]);
    const [insert, setInsert] = useState(false);

    async function loadPosts() {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        let meusPosts = [];
        querySnapshot.forEach((doc) => {
            meusPosts.push({ ...doc.data(), id: doc.id })
        });
        setPostsFire(meusPosts);
    }

    async function handleAdd() {
        try {
            const docRef = await addDoc(collection(db, 'posts'), {
                autor: autor,
                mensagem: mensagem,
                titulo: titulo
            });
            setInsert(true);
            console.log('Novo documento inserido com o id ${docRef.id}')
        } catch (error) {
            console.log(error);
        }
    }

    async function handleDelete(id) {
        if (!id) return

        try {
            const newId = id;
            await deleteDoc(doc(db, 'posts', newId))
            setInsert(true);
        } catch (error) {
            console.log(error);
        }
    }

    async function createUser() {
        if (!email && !senha) {
            alert('Preencha os campos');
            return;
        }

        createUserWhithEmailAndPassword(auth, email, senha).then((userCredential) => {
            console.log('Usuário cadastrado com sucesso !', userCredential)
        }).catch((error) => {
            console.log(error);
            if (error.code == 'auth/invalid-email') {
                alert('Campos inválidos')
            }
        })
    }

    useEffect(() => {
        loadPosts();
    }, [])

    useEffect(() => {
        if (insert) {
            loadPosts();
            setInsert(false);
        }
    }, [insert])

    return (
        <>
            <div className="login">
                <label>Email: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Senha: </label>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <button onClick={ createUser }>Novo usuário</button>
                <button onClick={ createUser }>Deslogar</button>
            </div>
            <div className="container">
                <label>Titulo: </label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                <label>Autor: </label>
                <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} />
                <label>Mensagem: </label>
                <textarea type="text" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
                <button onClick={ handleAdd }>Cadstrar</button>
            </div>
        </>
    )
}

export default Usuarios