import React from 'react'
import Layout from '../../src/Layouts/layout'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../utils/Firebase';


const EntradaCuenta = ( { resultado } ) => { 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter()
    
    useEffect(() => {
        setEmail(resultado.email);
        setPassword(resultado.password);
    }, [resultado])
    

    const handleClick = () => {
        router.push('/');
    }

  return (
    <Layout
        pagina='Cuenta X'
        title={'Detalle de la cuenta'}
    >
        <div
            onClick={handleClick}
            style={{
                cursor: 'pointer'
            }}
        >
            Volver
        </div>

        <form>
            <div>
                <input
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
        </form>

    </Layout>
  )
}

export default EntradaCuenta

export async function getServerSideProps( { params } ) {

    const url = params.url;
    console.log(url);
    const docRef = doc(db, "accounts", url);
    const documento = await getDoc(docRef);
    const resultado = documento.data();

    if (documento.exists()) {
    console.log(documento.data());
    } else {
    console.log("Documento no encontrado!");
    }

    return {
        props: {
           resultado
        }
    }
}

