

interface CardProps {
  title: string;
  link: string;
  type: 'youtube' | 'twitter';
}
const CardItems = ({ title, link, type }: CardProps) => {
  function extractYouTubeID(url: string): string | null {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.*|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match ? match[1] : null;
  }

  return (
    <div>
      <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 min-h-48 min-w-72 border">
        <div className="flex justify-between ">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <ShareIcon />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <ShareIcon />
              </a>
            </div>
            <div className="text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>

        <div className="pt-4">
          {' '}
          {type === 'youtube' && (
            <iframe
              className="w-full rounded-xl"
              src={`https://www.youtube.com/embed/${extractYouTubeID(link)}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          <div>
            {type === 'twitter' && (
              <blockquote className="twitter-tweet">
                <a href={link.replace('x.com', 'twitter.com')}></a>
              </blockquote>
            )}{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;