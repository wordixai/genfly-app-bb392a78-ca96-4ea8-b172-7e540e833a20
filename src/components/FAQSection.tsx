import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = {
    general: [
      {
        question: "What is Firecrawl?",
        answer: "Firecrawl is a web scraping and crawling API designed specifically for AI applications. It converts websites into clean, LLM-ready data formats like markdown, JSON, and structured data."
      },
      {
        question: "What sites work?",
        answer: "Firecrawl works with most websites including JavaScript-heavy sites, SPAs, and sites with dynamic content. It handles authentication, rate limiting, and anti-bot measures automatically."
      },
      {
        question: "Who can benefit from using Firecrawl?",
        answer: "AI developers, data scientists, researchers, and businesses building AI applications that need web data. It's perfect for RAG systems, chatbots, lead enrichment, and market research."
      },
      {
        question: "Is Firecrawl open-source?",
        answer: "Yes! Firecrawl has an open-source version available on GitHub. We also offer a hosted cloud version with additional features and reliability guarantees."
      },
      {
        question: "What is the difference between Firecrawl and other web scrapers?",
        answer: "Firecrawl is specifically designed for AI applications with clean data output, automatic content parsing, and LLM-ready formats. It handles dynamic content, rate limiting, and proxies automatically."
      },
      {
        question: "What is the difference between the open-source version and the hosted version?",
        answer: "The hosted version includes enterprise features like better rate limiting, premium proxies, priority support, and guaranteed uptime. The open-source version is great for getting started and smaller projects."
      }
    ],
    scraping: [
      {
        question: "How does Firecrawl handle dynamic content on websites?",
        answer: "Firecrawl uses headless browsers and smart waiting mechanisms to ensure all JavaScript content is loaded before extraction. It can wait for specific elements or time intervals."
      },
      {
        question: "Why is it not crawling all the pages?",
        answer: "This could be due to rate limits, robots.txt restrictions, or pages behind authentication. Check your crawl settings and ensure you have sufficient credits and permissions."
      },
      {
        question: "Can Firecrawl crawl websites without a sitemap?",
        answer: "Yes! Firecrawl can discover pages through link following and intelligent crawling patterns, even without a sitemap.xml file."
      },
      {
        question: "What formats can Firecrawl convert web data into?",
        answer: "Firecrawl supports multiple output formats including Markdown, JSON, HTML, plain text, and structured data extraction. It can also capture screenshots."
      },
      {
        question: "How does Firecrawl ensure the cleanliness of the data?",
        answer: "Firecrawl automatically removes navigation elements, ads, and irrelevant content, focusing on the main content. It also normalizes formatting for consistent output."
      },
      {
        question: "Is Firecrawl suitable for large-scale data scraping projects?",
        answer: "Absolutely! Firecrawl is designed to scale with enterprise-grade infrastructure, supporting high concurrency and large volumes of data extraction."
      },
      {
        question: "Does it respect robots.txt?",
        answer: "Yes, Firecrawl respects robots.txt by default. However, you can configure it to bypass these restrictions if you have permission to scrape the content."
      },
      {
        question: "What measures does Firecrawl take to handle web scraping challenges like rate limits and caching?",
        answer: "Firecrawl includes automatic rate limiting, rotating proxies, intelligent retry mechanisms, and smart caching to ensure reliable data extraction."
      },
      {
        question: "Does Firecrawl handle captcha or authentication?",
        answer: "Firecrawl can handle basic authentication and has some captcha bypass capabilities. For complex authentication flows, you may need to use custom headers or cookies."
      }
    ],
    api: [
      {
        question: "Where can I find my API key?",
        answer: "After signing up, you can find your API key in your dashboard under the API Keys section. Keep it secure and don't share it publicly."
      }
    ],
    billing: [
      {
        question: "Is Firecrawl free?",
        answer: "Yes! Firecrawl offers a free plan with 500 credits to get you started. No credit card required for the free tier."
      },
      {
        question: "Is there a pay-per-use plan instead of monthly?",
        answer: "Currently, we offer monthly subscription plans and credit packs. The free plan is one-time, and paid plans are monthly or yearly subscriptions."
      },
      {
        question: "Do credits roll over to the next month?",
        answer: "No, credits reset each month with your subscription. We recommend monitoring your usage and upgrading if you consistently hit limits."
      },
      {
        question: "How many credits do scraping and crawling cost?",
        answer: "Basic scraping costs 1 credit per page. Additional features like screenshots, actions, or structured extraction may cost additional credits."
      },
      {
        question: "Do you charge for failed requests?",
        answer: "No, we only charge credits for successful requests. Failed requests due to network issues or invalid URLs don't consume credits."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express) and support international payments through Stripe."
      }
    ]
  };

  return (
    <div className="firecrawl-container mb-20">
      <div className="mt-8 max-w-[390px] lg:max-w-6xl px-[var(--page-px)] w-full mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="firecrawl-badge mb-2">FAQ</div>
          <h2 className="text-[#36322F] font-medium text-center text-[2.3rem] lg:text-[3rem] tracking-tight leading-[1.08]">
            Frequently Asked
          </h2>
        </div>

        <div className="w-full max-w-[42rem] px-4 mt-8">
          {/* General */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">General</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.general.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`} className="border-t">
                  <AccordionTrigger className="flex flex-1 items-start text-start justify-between py-4 font-medium transition-all hover:underline text-[#36322F]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-sm text-zinc-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Scraping & Crawling */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Scraping & Crawling</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.scraping.map((faq, index) => (
                <AccordionItem key={index} value={`scraping-${index}`} className="border-t">
                  <AccordionTrigger className="flex flex-1 items-start text-start justify-between py-4 font-medium transition-all hover:underline text-[#36322F]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-sm text-zinc-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* API Related */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">API Related</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.api.map((faq, index) => (
                <AccordionItem key={index} value={`api-${index}`} className="border-t">
                  <AccordionTrigger className="flex flex-1 items-start text-start justify-between py-4 font-medium transition-all hover:underline text-[#36322F]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-sm text-zinc-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Billing */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Billing</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.billing.map((faq, index) => (
                <AccordionItem key={index} value={`billing-${index}`} className="border-t">
                  <AccordionTrigger className="flex flex-1 items-start text-start justify-between py-4 font-medium transition-all hover:underline text-[#36322F]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-sm text-zinc-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;