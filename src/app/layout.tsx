import {headers} from 'next/headers'
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

const RootLayout = ({children}: {children: React.ReactNode}) => {
  const headersList = headers()
  const host = headersList.get('host')
  const rootPath =
    host && !host.includes('localhost')
      ? `https://${host}`
      : 'http://localhost:3000'

  const title = 'Browsercat'
  const description =
    'A Social Preview Image generation service, built on Next.js'

  const image = {
    url: `${rootPath}/api/og?title=Browsercat%F0%9F%90%88%E2%80%8D%E2%AC%9B&subtitle=Professional%20Social%20Preview%20images,%20for%20everyone%20%F0%9F%98%B8`,
    alt: 'Browsercat is PROFESSIONAL Social Preview images, for everyone!',
  }

  return (
    <html
      lang="en"
      className={`${sansSerifFont.variable} ${fancyFont.variable}`}
    >
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />

        <meta property="og:image" content={image.url} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Browsercat" />
        <meta name="twitter:image:alt" content={image.alt} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
