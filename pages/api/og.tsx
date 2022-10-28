import type {NextApiRequest, NextApiResponse} from 'next'
import {ImageResponse} from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const DEFAULT_TITLE = 'Browsercat'
const DEFAULT_SUBTITLE = 'Professional Social Preview images for everyone!'
const DEFAULT_COUNT = '42'

const font = fetch(
  new URL('../../fonts/Fasthand/Fasthand-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

const getDefaultValues = (req: NextApiRequest) => {
  if (!req.url) {
    return {
      title: DEFAULT_TITLE,
      subtitle: DEFAULT_SUBTITLE,
      count: DEFAULT_COUNT,
    }
  }

  const {searchParams} = new URL(req.url)

  return {
    title: searchParams.get('title') ?? DEFAULT_TITLE,
    subtitle: searchParams.get('subtitle') ?? DEFAULT_SUBTITLE,
    count: searchParams.get('count') ?? DEFAULT_COUNT,
  }
}

const handler = async (req: NextApiRequest) => {
  const {title, subtitle, count} = getDefaultValues(req)
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          color: 'white',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #155e75, #ecfeff)',
          border: '16px solid #67e8f9',
          padding: '32px',
          fontFamily: '"Fasthand"',
        }}
      >
        <div
          style={{
            fontSize: 128,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 72,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            fontSize: 72,
          }}
        >
          ❤️
        </div>
        <div
          style={{
            fontSize: 72,
          }}
        >
          {count}
        </div>
      </div>
    ),
    {
      emoji: 'noto',
      fonts: [
        {
          name: 'Fasthand',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}

export default handler
