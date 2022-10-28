import type {NextApiRequest} from 'next'
import {ImageResponse} from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const DEFAULT_TITLE = 'Browsercat'
const DEFAULT_SUBTITLE = 'Professional Social Preview images for everyone!'
const DEFAULT_COUNT = '42'

const montserratFont = fetch(
  new URL('../../../fonts/Montserrat/Montserrat-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())
const fuzzyBubblesFont = fetch(
  new URL(
    '../../../fonts/Fuzzy_Bubbles/FuzzyBubbles-Regular.ttf',
    import.meta.url
  )
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
  const montserratFontData = await montserratFont
  const fuzzyBubblesFontData = await fuzzyBubblesFont

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          color: 'white',
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(135deg, #0d9488, #0891b2)',
          border: '16px solid #67e8f9',
          padding: '32px',
          fontFamily: '"Montserrat"',
          textShadow: '2px 3px 4px',
        }}
      >
        <div tw="text-9xl w-full mb-8">{title}</div>
        <div
          style={{
            fontSize: 72,
            fontFamily: '"Fuzzy Bubbles"',
            flexGrow: 1,
          }}
        >
          {subtitle}
        </div>
        <div tw="flex items-center justify-items-end w-full">
          <div tw="grow"></div>
          <div tw="text-7xl mr-4">❤️</div>
          <div tw="text-7xl text-red-500">{count}</div>
        </div>
      </div>
    ),
    {
      emoji: 'noto',
      fonts: [
        {
          name: 'Montserrat',
          data: montserratFontData,
          style: 'normal',
        },
        {
          name: 'Fuzzy Bubbles',
          data: fuzzyBubblesFontData,
          style: 'normal',
        },
      ],
    }
  )
}

export default handler
