import {Montserrat, Fuzzy_Bubbles} from '@next/font/google'
import './globals.css'

const sansSerifFont = Montserrat({
  variable: '--font-sans',
  display: 'swap',
})
const fancyFont = Fuzzy_Bubbles({
  variable: '--font-fancy',
  weight: '400',
  display: 'swap',
})

const RootLayout = ({children}: {children: React.ReactNode}) => (
  <html lang="en" className={`${sansSerifFont.variable} ${fancyFont.variable}`}>
    <head>
      <title>Browsercat</title>
      <meta
        name="description"
        content="A Social Preview Image generation service, built on Next.js"
      />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>{children}</body>
  </html>
)

export default RootLayout
