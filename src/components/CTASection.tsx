const CTASection = () => {
  return (
    <div className="firecrawl-container">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex scale-150 items-center justify-center rounded-xl mb-6 relative">
            <span className="text-3xl">🔥</span>
          </div>
          
          <h2 className="text-[#36322F] font-medium text-center text-[2.3rem] lg:text-[3rem] tracking-tight leading-[1.08]">
            Ready to <em className="relative not-italic inline-flex justify-center items-end">Build?</em>
          </h2>
          
          <p className="text-center text-base text-balance tracking-normal leading-normal mt-2">
            Start scraping web data for your AI apps today.<br />
            No credit card needed.
          </p>
          
          <div className="mt-6 max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
              <button className="firecrawl-btn w-full !text-center">
                <span className="w-full !text-center">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;