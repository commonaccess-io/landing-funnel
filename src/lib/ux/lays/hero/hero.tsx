import Comp from '@/lib/ux/comps'
import styles from './hero.module.css'
import Image from 'next/image'

const Hero = () => {
	return (
		<section className={styles.wrapper}>
			<span style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
				{/* <h4>{`We're building the next generation`}</h4>
				<h1>Immersive Virtual Casino</h1> */}
				<Image src={'/assets/brand.svg'} alt={'brand'} height={320} width={320} />
				<p>
					This website is under construction. We will intimate you once we are live. <br></br>
					Meanwhile, you can signup to be whitelisted for our beta access.
				</p>
			</span>
			<span style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
				<Comp.Inp type='email' icon='mail.svg' label='Email' />
				<Comp.Btn var='TRIGGER' lbl='Whitelist Me' ldls={false} />
				{/* <Link href={''}>Explore Programmes</Link> */}
			</span>
		</section>
	)
}

export default Hero
