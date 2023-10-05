import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    let name = 'sol woo'
    let link = 'http://google.com'
    return (
        <div>
            <h1 className='title'>fresh</h1>
            <p className='sub_title'>by {name}</p>
            <div className='link'>
                <a href={link} target='_blank' title='새창' style={{ color: '#fff', fontSize: '12px' }} >google_link</a>
            </div>
        </div>
    )
}
