import { Bug, Search, ArrowRight, Github, PiggyBank, HeartHandshake, Blocks } from "lucide-react";

const FeatureSection = () => {
  return (
    <div className="firecrawl-dark-container lg:py-20 !p-0 h-full bg-[url('/images/bg-gradient-opacity-10.svg')] bg-cover bg-bottom">
      <div className="min-h-full px-8 py-12 lg:py-20 w-full">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="firecrawl-badge-dark mb-2">
            Developer first
          </div>
          <h2 className="font-medium text-center text-[2.3rem] lg:text-[3rem] tracking-tight leading-[1.08] text-balance text-zinc-100">
            Start scraping tonight
          </h2>
          <p className="text-center text-base text-balance tracking-normal leading-normal mt-2 text-zinc-400">
            Enhance your apps with industry leading web scraping and crawling capabilities
          </p>
        </div>

        <div className="w-full max-w-[950px] mx-auto mt-8 lg:mt-16">
          <div className="flex flex-col">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-2 pr-4 relative pb-4 mx-auto">
              <button className="rounded-lg w-[300px] flex flex-col items-start text-left h-fit border text-wrap p-4 hover:bg-zinc-100/10 bg-zinc-700/20 border-zinc-100/10 text-white">
                <div className="flex items-center gap-2">
                  <div className="p-1 flex items-center justify-center w-fit rounded-lg">
                    <div className="w-5 h-5 bg-zinc-600 rounded flex items-center justify-center text-xs font-bold">M</div>
                  </div>
                  <h4 className="font-medium">Scrape</h4>
                </div>
                <p className="text-xs lg:text-sm text-zinc-400 mt-1">
                  Get llm-ready data from websites. Markdown, JSON, screenshot, etc
                </p>
              </button>

              <button className="rounded-lg w-[300px] flex flex-col items-start text-left h-fit border border-zinc-100/0 text-wrap p-4 hover:bg-zinc-100/10 bg-zinc-800 bg-opacity-10 text-white">
                <div className="flex items-center gap-2">
                  <div className="p-1 flex items-center justify-center w-fit rounded-lg">
                    <Bug className="w-5 h-5" />
                  </div>
                  <h4 className="font-medium">Crawl</h4>
                </div>
                <p className="text-xs lg:text-sm text-zinc-400 mt-1">
                  Crawl all the pages on a website and get data for each page
                </p>
              </button>

              <button className="rounded-lg w-[300px] flex flex-col items-start text-left h-fit border border-zinc-100/0 text-wrap p-4 hover:bg-zinc-100/10 bg-zinc-800 bg-opacity-10 text-white">
                <div className="flex items-center">
                  <div className="mr-2 p-1 flex items-center justify-center w-fit rounded-lg">
                    <Search className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">Search</h4>
                    <span className="ml-1 inline-flex items-center rounded-md bg-orange-500/10 px-1.5 py-0.5 text-[10px] font-medium text-orange-500 ring-1 ring-inset ring-orange-500/20">
                      New
                    </span>
                  </div>
                </div>
                <p className="text-xs lg:text-sm text-zinc-400 mt-1">
                  Search the web and get full content from results
                </p>
              </button>
            </div>

            {/* Code Example */}
            <div className="mt-2 lg:mt-4 w-full gap-12 relative">
              <div className="tab-content">
                <div className="rounded-xl focus-visible:ring-2 focus-visible:ring-orange-500/50 transition-all duration-200">
                  <div className="relative w-full overflow-hidden rounded-xl border border-zinc-800 bg-[#1a1a1a] shadow-lg">
                    <div className="flex overflow-hidden h-[284px]">
                      <div className="flex-none py-4 pl-2 pr-1 lg:pl-4 lg:pr-2 text-right select-none font-mono lg:w-[32px]">
                        {[1,2,3,4,5,6,7,8].map(num => (
                          <div key={num} className="text-zinc-600 text-xs lg:text-sm leading-6">{num}</div>
                        ))}
                      </div>
                      <div className="overflow-auto pl-0 pr-4 w-full">
                        <pre className="text-zinc-200 text-xs lg:text-sm leading-6">
                          <code className="text-orange-300">
                            <span className="text-zinc-500">// npm install @mendable/firecrawl-js</span><br/><br/>
                            <span className="text-zinc-400">import</span> FirecrawlApp <span className="text-zinc-400">from</span> <span className="text-orange-400">'@mendable/firecrawl-js'</span><span className="text-zinc-400">;</span><br/><br/>
                            <span className="text-zinc-400">const</span> app <span className="text-zinc-400">=</span> <span className="text-zinc-400">new</span> FirecrawlApp<span className="text-zinc-400">({`{ apiKey:`}</span> <span className="text-orange-400">"fc-YOUR_API_KEY"</span> <span className="text-zinc-400">{`}`})</span><span className="text-zinc-400">;</span><br/><br/>
                            <span className="text-zinc-500">// Scrape a website:</span><br/>
                            <span className="text-zinc-400">await</span> app.scrapeUrl<span className="text-zinc-400">(</span><span className="text-orange-400">'firecrawl.dev'</span><span className="text-zinc-400">);</span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[950px] mx-auto mt-8 lg:mt-14">
            <div className="firecrawl-card !bg-transparent !border-none !p-0">
              <div className="p-2 flex items-center justify-center w-fit border border-zinc-100/10 rounded-lg bg-zinc-200/10 text-zinc-100">
                <Blocks className="w-5 h-5" />
              </div>
              <h4 className="text-sm lg:text-base font-medium text-zinc-100 mt-4 mb-2">Use well-known tools</h4>
              <p className="text-xs lg:text-sm text-zinc-400 mb-4">
                Already fully integrated with the greatest existing tools and workflows.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { src: "https://www.firecrawl.dev/logos/llamaindex.svg", alt: "LlamaIndex", href: "https://docs.llamaindex.ai/en/stable/examples/data_connectors/WebPageDemo/#using-firecrawl-reader/" },
                  { src: "https://www.firecrawl.dev/integrations/langchain.png", alt: "Langchain", href: "https://python.langchain.com/v0.2/docs/integrations/document_loaders/firecrawl/" },
                  { src: "https://www.firecrawl.dev/logos/dify.png", alt: "Dify", href: "https://dify.ai/blog/dify-ai-blog-integrated-with-firecrawl/" },
                  { src: "https://www.firecrawl.dev/integrations/langflow_2.png", alt: "Langflow", href: "https://www.langflow.org/" },
                  { src: "https://www.firecrawl.dev/integrations/flowise.png", alt: "Flowise", href: "https://flowiseai.com/" },
                  { src: "https://www.firecrawl.dev/integrations/crewai.png", alt: "CrewAI", href: "https://crewai.com/" },
                  { src: "https://www.firecrawl.dev/integrations/camel-ai.png", alt: "Camel AI", href: "https://docs.camel-ai.org/cookbooks/ingest_data_from_websites_with_Firecrawl.html" }
                ].map((tool, index) => (
                  <a key={index} href={tool.href} target="_blank" className="hover:scale-105 hover:grayscale-0 grayscale transition-all duration-300">
                    <img src={tool.src} alt={tool.alt} className="h-8 w-auto" />
                  </a>
                ))}
              </div>
            </div>

            <div className="firecrawl-card !bg-transparent !border-none !p-0">
              <div className="p-2 flex items-center justify-center w-fit border border-zinc-100/10 rounded-lg bg-zinc-200/10 text-zinc-100">
                <PiggyBank className="w-5 h-5" />
              </div>
              <h4 className="text-sm lg:text-base font-medium text-zinc-100 mt-4 mb-2">Start for free, scale easily</h4>
              <p className="text-xs lg:text-sm text-zinc-400 mb-4">
                Kick off your journey for free and scale seamlessly as your project expands.
              </p>
              <a className="inline-flex items-center text-zinc-200 hover:text-zinc-100 transition-colors text-sm font-medium" href="#signup">
                Try it out <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="firecrawl-card !bg-transparent !border-none !p-0">
              <div className="p-2 flex items-center justify-center w-fit border border-zinc-100/10 rounded-lg bg-zinc-200/10 text-zinc-100">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-sm lg:text-base font-medium text-zinc-100 mt-4 mb-2">Open-source</h4>
              <p className="text-xs lg:text-sm text-zinc-400 mb-4">
                Developed transparently and collaboratively. Join our community of contributors.
              </p>
              <a href="https://github.com/mendableai/firecrawl" target="_blank" className="inline-flex items-center text-zinc-200 hover:text-zinc-100 transition-colors text-sm font-medium">
                <Github className="mr-2 w-4 h-4" /> Check out our repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;