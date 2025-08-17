const CompanyLogos = () => {
  const companies = [
    { name: "Zapier", logo: "https://www.firecrawl.dev/logos/zapier.png", url: "https://www.zapier.com/" },
    { name: "NVIDIA", logo: "https://www.firecrawl.dev/logos/nvidia-com.png", url: "https://www.nvidia.com/" },
    { name: "Carrefour", logo: "https://www.firecrawl.dev/logos/carrefour-c.svg", url: "https://www.carrefour.com/" },
    { name: "PwC", logo: "https://www.firecrawl.dev/logos/pwc.png", url: "https://www.pwc.com/" },
    { name: "Shopify", logo: "https://www.firecrawl.dev/logos/shopify.png", url: "https://www.shopify.com/" },
    { name: "Fanatics", logo: "https://www.firecrawl.dev/logos/Fanatics.png", url: "https://www.fanatics.com/" },
    { name: "CyberAgent", logo: "https://www.firecrawl.dev/logos/cyberagent-co-jp.svg", url: "https://www.cyberagent.co.jp/" },
    { name: "Bain", logo: "https://www.firecrawl.dev/logos/bain-com.svg", url: "https://www.bain.com/" },
    { name: "Alibaba", logo: "https://www.firecrawl.dev/logos/alibaba.png", url: "https://www.alibaba.com/" },
    { name: "Contentful", logo: "https://www.firecrawl.dev/logos/contentful.svg", url: "https://www.contentful.com/" }
  ];

  const companiesRow2 = [
    { name: "Gamma", logo: "https://www.firecrawl.dev/logos/gamma.svg", url: "https://gamma.app/" },
    { name: "PHMG", logo: "https://www.firecrawl.dev/logos/phmg.svg", url: "https://phmg.com/" },
    { name: "Stack AI", logo: "https://www.firecrawl.dev/logos/stackai.svg", url: "https://www.stack-ai.com/" },
    { name: "Teller", logo: "https://www.firecrawl.dev/logos/teller-io.svg", url: "https://www.teller.io/" },
    { name: "Vendr", logo: "https://www.firecrawl.dev/logos/vendr.png", url: "https://www.vendr.com/" },
    { name: "Open Gov SG", logo: "https://www.firecrawl.dev/logos/open-gov-sg.png", url: "https://www.open.gov.sg/" },
    { name: "Continue", logo: "https://www.firecrawl.dev/logos/continue_dev.png", url: "https://continue.dev/" },
    { name: "Jasper", logo: "https://www.firecrawl.dev/logos/jasperai.svg", url: "https://jasper.ai/" },
    { name: "Palladium", logo: "https://www.firecrawl.dev/logos/palladiumdigital.jpg", url: "https://www.palladiumdigital.com/" },
    { name: "Checkr", logo: "https://www.firecrawl.dev/logos/checkr.png", url: "https://www.checkr.com/" },
    { name: "You.com", logo: "https://www.firecrawl.dev/logos/you_com.svg", url: "https://www.you.com/" },
    { name: "OpenAI", logo: "https://www.firecrawl.dev/logos/openai.png", url: "https://openai.com/" }
  ];

  return (
    <div className="max-w-[390px] lg:max-w-6xl px-[var(--page-px)] w-full mx-auto my-20">
      <div className="max-w-3xl mx-auto text-center pb-8">
        <h2 className="text-[#36322F] font-medium text-center lg:text-[3rem] tracking-tight text-xl md:text-xl mb-4">
          Trusted by Top Companies
        </h2>
      </div>
      
      <div className="max-w-[94rem] mx-auto space-y-6">
        {/* First row */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
          <div className="flex items-start justify-center md:justify-start [&>div]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {companies.map((company, index) => (
              <div key={index} className="relative text-center justify-self-center">
                <a target="_blank" href={company.url}>
                  <img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="max-w-[130px] h-8 xl:h-10 object-contain hover:scale-105 transition-all duration-300 filter grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="flex items-start justify-center md:justify-start [&>div]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            {companies.map((company, index) => (
              <div key={`dup-${index}`} className="relative text-center justify-self-center">
                <a target="_blank" href={company.url}>
                  <img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="max-w-[130px] h-8 xl:h-10 object-contain hover:scale-105 transition-all duration-300 filter grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Second row */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
          <div className="flex items-start justify-center md:justify-start [&>div]:mx-8 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]">
            {companiesRow2.map((company, index) => (
              <div key={index} className="relative text-center justify-self-center">
                <a target="_blank" href={company.url}>
                  <img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="max-w-[130px] h-8 xl:h-10 object-contain hover:scale-105 transition-all duration-300 filter grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="flex items-start justify-center md:justify-start [&>div]:mx-8 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]" aria-hidden="true">
            {companiesRow2.map((company, index) => (
              <div key={`dup2-${index}`} className="relative text-center justify-self-center">
                <a target="_blank" href={company.url}>
                  <img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="max-w-[130px] h-8 xl:h-10 object-contain hover:scale-105 transition-all duration-300 filter grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;