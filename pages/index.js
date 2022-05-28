import { useEffect, useState } from 'react'
import Layout from '../src/Layouts/layout'
import CardAccount from '../src/components/CardAccount/CardAccount'
import { collection, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../utils/Firebase';
import Spinner from '../src/components/Spinner/Spinner';

export default function Home() {
  
  const [datos, setDatos] = useState([]);
  const [spinnerOn, setSpinnerOn] = useState(false);

  useEffect(() => {
    setSpinnerOn(true);
    const testBD = async () => {
      const q = query(collection(db, "accounts"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const accounts = [];
        querySnapshot.forEach((doc) => {
          accounts.push({
            id: doc.id,
            ...doc.data()
          });
        });
        console.log(accounts);
        setDatos(accounts); 
      });
      setSpinnerOn(false);
    }
    testBD();
  }, [])
  

  return (
    <Layout
      pagina='Inicio'
      title='Cuentas'
    >
      {spinnerOn ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner />
        </div>
      ) : (
        datos.map( (docData) => (
          <CardAccount
            key={docData.id}
            item={docData}
          />
        ) )
      )}

    </Layout>
  )
}
