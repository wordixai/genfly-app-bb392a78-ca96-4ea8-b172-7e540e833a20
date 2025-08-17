import { Check, Info } from "lucide-react";
import { useState } from "react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Free Plan",
      credits: "500 credits",
      price: "$0",
      period: "one-time",
      description: "No credit card required",
      features: [
        "Scrape 500 pages",
        "2 concurrent browsers",
        "Low Rate Limits"
      ],
      button: "Get Started",
      buttonStyle: "group relative flex flex-col h-[464px] p-6 rounded-xl shadow-sm bg-white flex-1"
    },
    {
      name: "Hobby",
      credits: "3,000 credits",
      price: isYearly ? "$16" : "$19",
      period: "month",
      yearlyPrice: "$190/yr",
      monthlyPrice: "$228/yr",
      features: [
        "Scrape 3,000 pages*",
        "5 concurrent browsers"
      ],
      button: "Subscribe",
      buttonStyle: "h-[464px] p-6 flex flex-col rounded-xl shadow-sm bg-white flex-1"
    },
    {
      name: "Standard",
      credits: "100,000 credits",
      price: isYearly ? "$83" : "$99",
      period: "month",
      yearlyPrice: "$990/yr",
      monthlyPrice: "$1188/yr",
      popular: true,
      features: [
        "Scrape 100,000 pages*",
        "50 concurrent browsers",
        "Standard Support"
      ],
      button: "Subscribe",
      buttonStyle: "h-[464px] p-6 flex flex-col rounded-xl shadow-sm bg-black flex-1"
    },
    {
      name: "Growth",
      credits: "500,000 credits",
      price: isYearly ? "$333" : "$399",
      period: "month",
      yearlyPrice: "$3990/yr",
      monthlyPrice: "$4788/yr",
      features: [
        "Scrape 500,000 pages*",
        "100 concurrent browsers",
        "Priority Support"
      ],
      button: "Subscribe",
      buttonStyle: "h-[464px] p-6 flex flex-col rounded-xl shadow-sm bg-white flex-1"
    }
  ];

  return (
    <div className="firecrawl-container">
      <div className="mt-8">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="firecrawl-badge mb-4">Transparent</div>
          <h2 className="font-medium lg:text-[3rem] tracking-tight text-balance text-zinc-900 text-center text-[48px]">
            Flexible Pricing
          </h2>
          <p className="text-base text-balance tracking-normal leading-normal mt-2 text-zinc-500 text-center max-w-2xl">
            Start for free, then scale as you grow
          </p>
        </div>

        {/* Toggle */}
        <div className="relative self-center bg-[#FBFAF9] rounded-[1rem] p-1 flex w-[320px] mx-auto shadow-sm border border-zinc-200 mt-12">
          <button
            type="button"
            className="relative w-1/2 bg-white text-zinc-900 shadow-sm border border-zinc-200 rounded-[0.875rem] py-[6px] text-base font-medium transition-all duration-200 ease-in-out flex flex-col items-center"
          >
            <span>Standard</span>
            <span className="text-[10px] text-zinc-500 leading-3">Most API endpoints</span>
          </button>
          <a
            href="#extract-pricing"
            className="relative w-1/2 text-zinc-500 hover:text-zinc-900 flex flex-col items-center rounded-[0.875rem] py-[6px] text-base font-medium transition-all duration-200 ease-in-out text-center"
          >
            Extract
            <span className="text-[10px] text-zinc-500 leading-3">/extract API</span>
          </a>
        </div>

        {/* Pricing Cards */}
        <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-0 flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 xl:flex xl:flex-row items-center justify-center gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {plans.slice(0, 3).map((plan, index) => (
            <div key={plan.name} className={plan.buttonStyle}>
              <h2 className={`text-2xl font-normal leading-6 flex items-center h-8 ${plan.name === 'Standard' ? 'text-white' : 'text-black'}`}>
                <span>{plan.name}</span>
                {plan.popular && (
                  <span className="ml-2 px-2 py-1 text-xs font-semibold text-orange-500 bg-orange-500/25 rounded-md">
                    Most Popular
                  </span>
                )}
              </h2>
              
              <p className={`mt-4 font-normal ${plan.name === 'Standard' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {plan.credits} <span className="text-xs text-zinc-500">per month</span>
              </p>
              
              <div className="mt-3 h-16 flex items-baseline">
                <span className={`text-3xl font-bold sm:text-4xl ${plan.name === 'Standard' ? 'text-white' : 'text-black'}`}>
                  {plan.price}
                </span>
                <span className={`ml-1 text-base font-medium ${plan.name === 'Standard' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  /{plan.period}
                </span>
              </div>

              {plan.name !== 'Free Plan' && (
                <>
                  <div className="mt-2 flex items-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        role="switch"
                        aria-checked={isYearly}
                        className="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors h-5 w-9 bg-zinc-500"
                        onClick={() => setIsYearly(!isYearly)}
                      >
                        <span className={`pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform h-4 w-4 ${isYearly ? 'translate-x-4' : 'translate-x-0'}`}></span>
                      </button>
                      <span className={`text-xs ${plan.name === 'Standard' ? 'text-zinc-300' : 'text-zinc-500'}`}>
                        Billed yearly
                      </span>
                    </label>
                    <span className="text-xs text-orange-500 ml-2">2 months free</span>
                  </div>
                  
                  {isYearly && (
                    <div className="ml-11 mt-2 flex items-center text-xs">
                      <span className="line-through mr-2 text-zinc-500">{plan.monthlyPrice}</span>
                      <span className={plan.name === 'Standard' ? 'text-zinc-400' : 'text-zinc-500'}>
                        {plan.yearlyPrice}
                      </span>
                    </div>
                  )}
                </>
              )}

              <div className="relative group">
                <button className={`firecrawl-btn flex items-center justify-between w-full !py-5 mt-6 text-sm font-semibold text-center ${
                  plan.name === 'Standard' 
                    ? 'firecrawl-btn-white' 
                    : plan.name === 'Free Plan'
                    ? 'firecrawl-btn'
                    : 'firecrawl-btn'
                }`}>
                  <span className="flex-grow text-center">{plan.button}</span>
                  {plan.yearlyPrice && (
                    <span className="text-zinc-500 absolute right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                  )}
                </button>
              </div>

              <ul className="mt-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="my-2 text-sm">
                    <span className={`mr-2 flex flex-row items-center gap-2 ${plan.name === 'Standard' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      <div className="flex items-center justify-center h-5 w-5 rounded-full">
                        <Check className="h-5 w-5" />
                      </div>
                      <span className="flex items-center gap-2">
                        <span>{feature}</span>
                        {feature.includes('concurrent') && (
                          <Info className="w-4 h-4 text-zinc-500 hover:cursor-pointer" />
                        )}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-1"></div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto mt-6 text-sm text-zinc-500">
          <p>
            Rate limits still apply but were increased by 5x. View details{" "}
            <a href="https://docs.firecrawl.dev/rate-limits" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">
              here
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;