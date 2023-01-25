import React from 'react'
import Link from 'next/link'
import navStyles from '../styles/nav.module.scss'

function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.navList}>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/about'>About</Link>
        </li>
        <li>
            <Link href='/me'>Me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav