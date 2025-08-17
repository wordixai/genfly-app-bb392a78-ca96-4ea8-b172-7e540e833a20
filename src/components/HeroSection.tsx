import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [url, setUrl] = useState("");

  return (
    <div className="firecrawl-container lg:py-8 h-full">
      <div className="mt-10 max-w-3xl mx-auto flex flex-col items-center h-full">
        <div className="text-center pb-12 lg:pb-16">
          <a href="#pricing">
            <div className="firecrawl-badge mb-2 mx-auto">
              <span className="relative inline-flex items-center text-xs">
                <span className="text-zinc-700 transition-transform duration-150 ease-in-out mr-1">💥</span> 
                Get 2 months free with yearly plan
              </span>
            </div>
          </a>
          
          <h1 className="text-[2.5rem] lg:text-[3.8rem] text-center text-[#36322F] font-semibold tracking-tight leading-[0.9] mt-4 animate-fade-up">
            <span className="hidden md:inline">The </span>
            <span className="hidden md:inline">fast, reliable</span>
            <span className="md:hidden">Fast, reliable</span>
            <br />
            <span className="block leading-[1.1] animate-fade-up" style={{ animationDelay: 'var(--t-2)' }}>
              <span className="relative px-1 text-gradient animate-text transition-all inline-flex justify-center items-center">
                web scraper for LLMs
              </span>
            </span>
          </h1>

          <p className="text-base lg:text-lg max-w-lg mx-auto mt-2.5 text-zinc-500 text-center text-balance animate-fade-up" style={{ animationDelay: 'var(--t-2)' }}>
            Power your AI apps with clean data crawled from any website.{" "}
            <a 
              href="https://github.com/mendableai/firecrawl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 p-0 text-zinc-500 hover:text-zinc-700 transition-colors duration-200"
            >
              <span>It's also open source.</span>
            </a>
          </p>

          <div className="mt-5 relative max-w-xl mx-auto mb-4 sm:space-x-4">
            <div className="w-full relative group">
              <input
                placeholder=" "
                aria-placeholder="https://example.com"
                className="firecrawl-input"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-4 group-has-[:placeholder-shown]:opacity-100 opacity-0 pointer-events-none text-sm text-opacity-50 text-start">
                <span className="typewriter text-[#605A57]/50" style={{ '--text-length': '19' } as any}>
                  https://example.com
                </span>
              </div>
              <button 
                type="submit" 
                className="absolute top-1/2 transform -translate-y-1/2 right-2 flex h-10 items-center justify-center rounded-md px-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-row items-center justify-center space-x-4">
              <button className="firecrawl-btn w-full whitespace-nowrap">
                <span className="w-full hidden sm:inline !text-center">Start for free (500 credits)</span>
                <span className="w-full sm:hidden !text-center">Start for free</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;