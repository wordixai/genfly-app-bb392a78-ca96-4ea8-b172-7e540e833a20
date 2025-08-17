import { Bug, File, Clock, Zap, Shield, MouseOff } from "lucide-react";

const CapabilitiesSection = () => {
  return (
    <div className="firecrawl-container lg:py-12 py-24" id="security">
      <div className="flex flex-col items-center max-w-3xl mx-auto mb-16">
        <div className="firecrawl-badge mb-4">Zero Configuration</div>
        <h2 className="font-medium text-[2.3rem] lg:text-[3rem] tracking-tight leading-[1.08] text-balance text-zinc-900 text-center">
          We handle the hard stuff
        </h2>
        <p className="text-base text-balance tracking-normal leading-normal mt-2 text-zinc-500 text-center max-w-2xl">
          Rotating proxies, orchestration, rate limits, js-blocked content and more
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid flex flex-col grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-6">
          {/* Crawling Card */}
          <div className="firecrawl-card max-w-[500px] w-full">
            <Bug className="w-6 h-6 text-orange-500 mb-4" />
            <div>
              <h3 className="font-medium text-zinc-900 text-base mb-1.5">Crawling</h3>
              <p className="text-sm text-zinc-500 mb-4">
                Gather clean data from all accessible subpages, even without a sitemap.
              </p>
            </div>
            {/* Animated HTML cards visual */}
            <div className="h-[250px] lg:flex hidden flex-col gap-2 items-center justify-center overflow-hidden relative">
              <div className="w-full h-full relative select-none mt-10" style={{ 
                '--card-w': '326px', 
                '--card-h': '250px',
                maskImage: 'linear-gradient(transparent 0%, black 30%, black 70%, transparent 100%)'
              } as any}>
                <div className="flex items-center justify-center relative" style={{
                  transform: 'translateX(-35%) translateY(40px) scale(1.2) translateZ(0px)'
                }}>
                  <div className="relative">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <div
                        key={index}
                        className="absolute"
                        style={{
                          top: '0px',
                          left: '0px',
                          transform: `translateX(0px) translateY(-${index * 10}px) rotateX(50deg) rotateY(0deg) rotateZ(-40deg) translateZ(0px)`
                        }}
                      >
                        <div className="p-[1.125rem] rounded-[1.5rem] overflow-hidden border-[.75px] font-mono w-[326px] h-[250px] text-[#A92E05] bg-[#faf9f8] border-orange-200">
                          <span className="text-sm">&lt;html&gt;<br/></span>
                          <span className="text-sm">&nbsp;&nbsp;&lt;body&gt;<br/></span>
                          <span className="text-sm">&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Firecrawl&lt;/h1&gt;<br/></span>
                          <span className="text-sm">&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Extract&nbsp;web&nbsp;data&nbsp;for&nbsp;LLMs&lt;/p&gt;<br/></span>
                          <span className="text-sm"><br/></span>
                          <span className="text-sm">&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Installation&lt;/h2&gt;<br/></span>
                          <span className="text-sm">&nbsp;&nbsp;&nbsp;&nbsp;&lt;pre&gt;npm&nbsp;install&nbsp;@mendable/firecrawl-js&lt;/pre&gt;<br/></span>
                          <span className="text-sm"><br/></span>
                          <span className="text-sm">&nbsp;&nbsp;&lt;/body&gt;<br/></span>
                          <span className="text-sm">&lt;/html&gt;</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media Parsing Card */}
          <div className="firecrawl-card max-w-[500px] w-full lg:h-full h-fit">
            <File className="w-6 h-6 text-orange-500 mb-4" />
            <div>
              <h3 className="font-medium text-zinc-900 text-base mb-1.5">Media Parsing</h3>
              <p className="text-sm text-zinc-500">
                Firecrawl can parse and output content from web hosted pdfs, docx, and more.
              </p>
            </div>
            <div className="h-[250px] w-full lg:flex hidden items-center justify-center gap-6 select-none pointer-events-none">
              {['pdf', 'docx', 'html'].map((type, index) => (
                <div key={type} className="relative p-6 overflow-hidden">
                  <div className="relative">
                    <div className="relative z-10 mt-0 block h-[100px] w-[80px] overflow-hidden rounded-lg bg-white shadow-lg border border-zinc-200">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className={`w-[60px] h-[4px] rounded-full bg-zinc-100 absolute left-2.5 ${i < 6 ? `top-${4 + i * 2}` : `bottom-${(8-i) * 2}`}`}></div>
                      ))}
                    </div>
                    <div className="text-xs z-20 font-semibold px-1.5 py-0.5 border shadow-md border-orange-500/60 bg-orange-500/10 text-zinc-700 rounded-sm bottom-2 -right-3 absolute">
                      {type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Wait Card */}
          <div className="firecrawl-card max-w-[500px] w-full lg:h-full h-fit">
            <Clock className="w-6 h-6 text-orange-500 mb-4" />
            <div>
              <h3 className="font-medium text-zinc-900 text-base mb-1.5">Smart Wait</h3>
              <p className="text-sm text-zinc-500">
                Firecrawl intelligently waits for content to load, making scraping faster and more reliable.
              </p>
            </div>
            <div className="items-center justify-center h-[250px] lg:flex hidden relative">
              <div className="w-full max-w-[350px] border border-zinc-200 rounded-lg overflow-hidden shadow-sm" style={{ transform: 'translateY(25px)' }}>
                <div className="bg-zinc-100 px-2.5 py-2 flex items-center space-x-2 border-b border-zinc-200">
                  <div className="flex space-x-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="bg-white text-xs py-0.5 px-2 rounded-full flex items-center justify-between border border-zinc-200">
                      <span className="text-zinc-900 text-xs">example.com</span>
                      <div className="w-3 h-3 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-4 py-6">
                  <div className="flex items-start space-x-3 animate-pulse">
                    <div className="w-[70px] h-[70px] bg-zinc-100 rounded-md flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-2.5 bg-zinc-100 rounded w-3/4 mb-1.5"></div>
                      <div className="h-2.5 bg-zinc-100 rounded w-full mb-1.5"></div>
                      <div className="h-2.5 bg-zinc-100 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 my-3"></div>
                  <div className="h-2.5 bg-zinc-100 rounded-full w-full mb-1.5 animate-pulse"></div>
                  <div className="h-2.5 bg-zinc-100 rounded-full w-5/6 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Card */}
          <div className="firecrawl-card max-w-[500px] w-full lg:h-full h-fit">
            <Zap className="w-6 h-6 text-orange-500 mb-4" />
            <div>
              <h3 className="font-medium text-zinc-900 text-base mb-1.5">Actions</h3>
              <p className="text-sm text-zinc-500">
                Click, scroll, write, wait, press and more before extracting content.
              </p>
            </div>
            <div className="h-[250px] lg:flex hidden flex-col gap-2 items-center justify-center overflow-hidden relative select-none pointer-events-none">
              {/* Animated action tags */}
              <div className="space-y-4 w-full overflow-hidden">
                {[
                  ['screenshot', 'click', 'type', 'navigate', 'scrape', 'wait'],
                  ['wait', 'scrape', 'navigate', 'type', 'click', 'screenshot'],
                  ['scrape', 'wait', 'click', 'screenshot', 'navigate', 'type']
                ].map((row, rowIndex) => (
                  <div key={rowIndex} className={`flex items-center gap-2 whitespace-nowrap ${rowIndex % 2 === 0 ? 'animate-infinite-scroll' : 'animate-infinite-scroll-inverse'}`}>
                    {row.map((action, index) => (
                      <div key={`${action}-${index}`} className="flex items-center gap-1.5 px-3 py-1.5 w-fit border border-zinc-200 rounded-md">
                        <div className="w-4 h-4 bg-zinc-400 rounded"></div>
                        <p className="font-medium text-sm">{action}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reliability Card */}
          <div className="firecrawl-card max-w-[500px] w-full lg:h-full h-fit">
            <Shield className="w-6 h-6 text-orange-500 mb-4" />
            <div>
              <h3 className="font-medium text-zinc-900 text-base mb-1.5">Reliability First</h3>
              <p className="text-sm text-zinc-500">
                Reliability is our core focus. Firecrawl is designed to scale with your needs.
              </p>
            </div>
            <div className="relative h-[250px] lg:flex hidden items-center justify-center overflow-hidden p-4">
              <div className="relative w-[400px] h-[200px]">
                {/* Grid lines */}
                {[40, 80, 120, 160].map(top => (
                  <div key={top} className="absolute w-full h-[1px] bg-zinc-200" style={{ top: `${top}px` }}></div>
                ))}
                {[40, 80, 120, 160, 200, 240, 280, 320, 360].map(left => (
                  <div key={left} className="absolute h-full w-[1px] bg-zinc-200" style={{ left: `${left}px` }}></div>
                ))}
                
                {/* Grid items with some highlighted */}
                {Array.from({ length: 50 }, (_, i) => {
                  const row = Math.floor(i / 10);
                  const col = i % 10;
                  const isHighlighted = [7, 18, 27, 36].includes(i);
                  
                  return (
                    <div
                      key={i}
                      className="absolute cursor-pointer z-40"
                      style={{
                        left: `${col * 40}px`,
                        top: `${row * 40}px`,
                        width: '40px',
                        height: '40px'
                      }}
                    >
                      {isHighlighted && (
                        <div className="absolute border border-dashed border-orange-500/80 flex items-center justify-center bg-zinc-100/50 m-[2px] w-[calc(100%-3px)] h-[calc(100%-3px)]">
                          <div className="w-4 h-4 bg-zinc-600 rounded flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-sm"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dynamic Content Card */}
          <div className="firecrawl-card max-w-[500px] w-full lg:h-full h-fit">
            <MouseOff className="w-6 h-6 text-orange-500 mb-4" />
            <div>
              <h3 className="font-medium text-zinc-900 text-base mb-1.5">Dynamic Content</h3>
              <p className="text-sm text-zinc-500">
                Firecrawl handles JavaScript, SPAs, and dynamic content loading with minimal configuration.
              </p>
            </div>
            <div className="w-full h-[250px] hidden lg:block overflow-hidden relative">
              <div className="absolute w-full h-full z-20 bg-gradient-to-br from-transparent via-transparent to-white"></div>
              <div className="w-full h-full absolute -bottom-5 -right-8 z-1 select-none pointer-events-none">
                <div className="w-full h-full bg-zinc-200 rounded-lg flex items-center justify-center">
                  <span className="text-zinc-500 text-sm">Dynamic Content Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesSection;