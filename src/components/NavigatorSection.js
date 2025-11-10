'use client'

import { useState } from 'react'
import styles from './NavigatorSection.module.scss'
import sysStyles from '@/app/page.module.css'

const subdomains = [
  {
    title: 'Blog',
    name: 'blog',
    description: 'My blog in Chinese.',
  },
  {
    title: 'English Blog',
    name: 'en',
    description: 'My blog in English.',
  },
  {
    title: 'Xlog Blog',
    name: 'xlog',
    description: 'My blog running on the blockchain.',
  },
  {
    title: 'Live Blog',
    name: 'live',
    description: 'My live blog.',
  },
  {
    title: 'Evolution Studio',
    name: 'studio',
    description: 'My studio & project page.',
  },
  {
    title: 'How To Use Search Engines',
    name: 'se-tips',
    description: 'A tutorial to search engines.',
  },
  {
    title: 'HSEFZ Club Yearbook',
    name: 'hsefz',
    description: 'The yearbook of No 2 High School of East China Normal University.',
  },
  {
    title: 'Soul Link',
    name: 'soullink',
    description: 'Your personal AI emotional companion.',
  },
  {
    title: 'www',
    name: 'www',
    description: '(Same as `aeilot.top`)',
  },
]

export default function NavigatorSection() {
  const [inputValue, setInputValue] = useState('')

  const foundSubdomains = subdomains.filter(s => {
    if (inputValue === '') {
      return true
    } else if (
      s.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 ||
      s.title.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 ||
      s.description.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
    ) {
      return true
    } else {
      return false
    }
  })

  return (
    <section className={styles.navigator}>
      <div
        className={
          styles.typingArea +
          (foundSubdomains.length === 1 ? ' ' + styles.ready : '')
        }
      >
        <input
          type="text"
          tabIndex={1}
          placeholder="Jump to ..."
          value={inputValue}
          onChange={ev => {
            setInputValue(ev.target.value)
          }}
          onKeyDown={ev => {
            if (ev.key === 'Enter' && ev.currentTarget.value.length > 0) {
              const subdomain =
                foundSubdomains.length === 1
                  ? foundSubdomains[0].name
                  : ev.currentTarget.value
              window.open('https://' + subdomain + '.aeilot.top')
            }
          }}
        />
        <span>.aeilot.top</span>
      </div>
      <div className={styles.subdomains}>
        <ul>
          {...foundSubdomains.map((s, i) => (
            <li
              className={
                foundSubdomains.length === 1 && i === 0 ? styles.active : ''
              }
            >
              <a href={'https://' + s.name + '.aeilot.top/'} target="_blank">
                <span className={styles.left}>
                  <span className={styles.title}>{s.title}</span>
                  <span className={styles.description}> {s.description}</span>
                </span>
                <span className={styles.right}>
                  <span className={styles.name}>{s.name}</span>.
                  <span className={styles.domainName}>aeilot.top</span>
                </span>
              </a>
            </li>
          ))}
                    <li>
              <a href={'https://mrwillcom.com'} target="_blank">
                <span className={styles.left}>
                  <span className={styles.title}>Mr. Will</span>
                  <span className={styles.description}> This Navigator was made by Mr. Will.</span>
                </span>
                <span className={styles.right}>
                  <span className={styles.name}>www</span>.
                  <span className={styles.domainName}>mrwillcom.com</span>
                </span>
              </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
