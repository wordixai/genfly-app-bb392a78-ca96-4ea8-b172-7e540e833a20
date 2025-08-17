interface TestimonialCardProps {
  name: string;
  handle: string;
  avatar: string;
  content: string;
  url?: string;
}

const TestimonialCard = ({ name, handle, avatar, content, url }: TestimonialCardProps) => {
  return (
    <div className="w-80 h-[158px] shrink-0 transition-all duration-300">
      <div className="h-full flex flex-col bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
        <div className="flex items-center px-4 py-3 border-b border-zinc-100">
          <div className="flex items-center space-x-3">
            <img
              alt={name}
              width="32"
              height="32"
              className="w-8 h-8 rounded-full object-cover border border-zinc-100"
              src={avatar}
            />
            <div className="flex flex-col">
              <h3 className="text-sm font-medium text-zinc-900 truncate">{name}</h3>
              {url && (
                <a
                  className="text-xs text-zinc-500 hover:text-orange-500 transition-colors"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {handle}
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 py-2 text-sm text-zinc-700 overflow-hidden">
          <p className="line-clamp-4">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;