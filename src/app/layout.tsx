
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Libre_Baskerville } from 'next/font/google'

import React from 'react'

import './globals.css'

import App from './app'

export const metadata: Metadata = {
	title: 'Klub Koi | Virtual Casino',
	description: 'Step into the future of gaming with our 3D virtual casino metaverse! Experience the thrill of high-stakes gameplay, immersive environments, and social interaction like never before. Join players from around the world in a vibrant digital landscape filled with exciting casino games, events, and unique rewards. Whether you’re a seasoned player or new to the scene, our metaverse offers endless entertainment and opportunities to win big. Dive into a world where reality meets fantasy—your ultimate gaming adventure awaits!'

}

const Jakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--jakarta',
	weight: '500',
})

const Libre = Libre_Baskerville({
	subsets: ['latin'],
	variable: '--libre',
	weight: '700', // Choose the appropriate weight as per the Google Fonts page
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// const [shoutbarStats, shoutbarFunc] = React.useState({
	// 	status: 'INACTIVE',
	// })

	// React.useEffect(() => {
	// 	shoutbarFunc({
	// 		...shoutbarStats,
	// 		status: 'ACTIVE',
	// 	})
	// }, [])

	return (
		<html lang='en'>
			<body className={`${Jakarta.variable} ${Libre.variable}`}>
				<App>
					{children}
				</App>
			</body>
		</html>
	)
}
