import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Morgan Linton",
      handle: "@morganlinton",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      content: "If you're coding with AI, and haven't discovered @firecrawl_dev yet, prepare to have your mind blown 🤯",
      url: "https://x.com/morganlinton/status/1839454165703204955"
    },
    {
      name: "Chris DeWeese",
      handle: "@ChrisDevApps",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      content: "Started using @firecrawl_dev for a project, I wish I used this sooner.",
      url: "https://x.com/ChrisDevApps/status/1853587120406876601"
    },
    {
      name: "Bardia Pourvakil",
      handle: "@thepericulum",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
      content: "The Firecrawl team ships. I wanted types for their node SDK, and less than an hour later, I got them.",
      url: "https://twitter.com/thepericulum/status/1781397799487078874"
    },
    {
      name: "Tom Reppelin",
      handle: "@TomReppelin",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=32&h=32&fit=crop&crop=face",
      content: "I found gold today. Thank you @firecrawl_dev",
      url: "https://x.com/TomReppelin/status/1844382491014201613"
    },
    {
      name: "latentsauce 🧘🏽",
      handle: "@latentsauce",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face",
      content: "Firecrawl simplifies data preparation significantly, exactly what I was hoping for. Thank you Firecrawl ❤️❤️❤️",
      url: "https://twitter.com/latentsauce/status/1781738253927735331"
    }
  ];

  const testimonialsRow2 = [
    {
      name: "Michael Ning",
      handle: "@michaelning",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=32&h=32&fit=crop&crop=face",
      content: "Firecrawl is impressive, saving us 2/3 the tokens and allowing gpt3.5turbo use over gpt4. Major savings in time and money."
    },
    {
      name: "Alex Reibman 🖇️",
      handle: "@AlexReibman",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      content: "Moved our internal agent's web scraping tool from Apify to Firecrawl because it benchmarked 50x faster with AgentOps.",
      url: "https://twitter.com/AlexReibman/status/1780299595484131836"
    },
    {
      name: "Alex Fazio",
      handle: "@alxfazio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      content: "Semantic scraping with Firecrawl is 🔥!",
      url: "https://x.com/alxfazio/status/1826731977283641615"
    },
    {
      name: "Matt Busigin",
      handle: "@mbusigin",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
      content: "Firecrawl is dope. Congrats guys 👏",
      url: "https://x.com/mbusigin/status/1836065372010656069"
    }
  ];

  return (
    <div className="firecrawl-container lg:py-12 !mb-10 bg-white">
      <div className="flex flex-col items-center max-w-3xl mx-auto mb-12">
        <div className="firecrawl-badge mb-4">Our Wall of Love</div>
        <h2 className="font-medium text-[2.3rem] lg:text-[3rem] tracking-tight leading-[1.08] text-balance text-zinc-900 text-center">
          Don't take our word for it
        </h2>
      </div>

      <div className="max-w-sm lg:max-w-6xl mx-auto space-y-6">
        {/* First row */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
          <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`dup-${index}`} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Second row */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
          <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]">
            {testimonialsRow2.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]" aria-hidden="true">
            {testimonialsRow2.map((testimonial, index) => (
              <TestimonialCard key={`dup2-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;