import useSWR from 'swr'
import { SiSpotify } from 'react-icons/si'

export default function NowPlaying() {
  const fetcher = (url) => fetch(url).then((r) => r.json())
  const { data } = useSWR('/api/spotify', fetcher)
  return (
    <>
      <div className="flex items-center justify-center pt-4">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={
            data?.isPlaying
              ? data.songUrl
              : 'https://open.spotify.com/user/xcsbodt16z8tmlwl7ixa6tydg?si=4b8fb2749e8543c1'
          }
          className="relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72 dark:bg-gray-900"
        >
          <div className="w-16">
            {data?.isPlaying ? (
              <img className="w-16 shadow-sm" src={data?.albumImageUrl} alt={data?.album} />
            ) : (
              <SiSpotify size={64} color={'#1ED760'} />
            )}
          </div>

          <div className="flex-1">
            <p className="font-bold component text-black	dark:text-gray-300">
              {data?.isPlaying ? data.title : 'Not Listening'}
            </p>
            <p className="text-xs font-dark text-black dark:text-gray-200	">
              {data?.isPlaying ? data.artist : 'Spotify'}
            </p>
          </div>
          <div className="absolute bottom-1.5 right-1.5">
            <SiSpotify size={20} color={'#1ED760'} />
          </div>
        </a>
      </div>
    </>
  )
}
