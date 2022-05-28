import React from 'react'
import styles from './CardAccount.module.css'
import { useRouter } from 'next/router'

const CardAccount = ( { item } ) => {

  const { email } = item

    const router = useRouter()

    const handleClick = () => {
      router.push(`/cuenta/${item.id}`);
    }

  return (
    <div className={styles.CardAccount}>
      <div className={styles.CardAccount_title}>{email}</div>
      <div className={styles.CardAccount_button} onClick={handleClick}> Ver mas </div>
    </div>
  )
}

export default CardAccount