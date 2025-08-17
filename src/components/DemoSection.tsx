import { MoveRight } from "lucide-react";

const DemoSection = () => {
  return (
    <div className="relative max-w-6xl mx-auto py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
        {/* Website Visual */}
        <div className="relative w-full lg:min-w-[420px]">
          <div className="relative h-[250px] lg:h-[330px]" style={{ perspective: '1000px' }}>
            {/* Stacked browser windows */}
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="website-visual h-[250px] lg:h-[330px] absolute top-0 left-0 w-full p-4 bg-white rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.08)] backdrop-blur-sm"
                style={{
                  transformOrigin: 'center top',
                  transform: `translateY(-${index * 10}px) scale(${1 - index * 0.05}) translateZ(0px)`,
                  zIndex: 3 - index,
                  opacity: 1
                }}
              >
                <div className="browser-header flex items-center gap-2 border-b border-zinc-100 pb-3 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28CA41]"></div>
                  </div>
                  <div className="ml-3 flex-1 h-6 bg-zinc-100 rounded"></div>
                </div>
                <div className="website-content space-y-3">
                  <div className="h-7 w-3/4 bg-zinc-100 rounded"></div>
                  <div className="h-32 bg-zinc-100 rounded"></div>
                  <div className="space-y-2 hidden lg:block">
                    <div className="h-4 w-full bg-zinc-100 rounded"></div>
                    <div className="h-4 w-5/6 bg-zinc-100 rounded"></div>
                    <div className="h-4 w-4/6 bg-zinc-100 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="transform-arrow mb-2 lg:my-0 mr-2 rotate-90 lg:rotate-0">
          <div style={{ transform: 'translateX(10.082px) translateZ(0px)' }}>
            <MoveRight className="w-10 h-10 text-black" />
          </div>
        </div>

        {/* Data Visual */}
        <div className="relative w-full lg:min-w-[420px]">
          <div className="data-visual h-[330px] text-[13px] p-4 bg-zinc-900 text-zinc-100 rounded-xl shadow-lg font-mono leading-relaxed overflow-hidden">
            <div className="flex items-center gap-2 mb-3 text-zinc-400 border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 relative">
                  <div className="w-3 h-3 rounded-full bg-current opacity-20 absolute"></div>
                  <div className="w-1 h-1 rounded-full bg-current absolute top-1 left-1"></div>
                </div>
                <span className="text-sm text-zinc-400">200 Response</span>
              </div>
            </div>
            <div className="data-content space-y-1.5 text-left">
              <div className="text-zinc-400">[</div>
              <div className="ml-4 text-zinc-400">{</div>
              <div className="ml-8">
                <span className="text-zinc-400">"url"</span>: <span className="text-orange-400">"https://example.com"</span>,
              </div>
              <div className="ml-8">
                <span className="text-zinc-400">"markdown"</span>: <span className="text-orange-400">"# Getting Started..."</span>,
              </div>
              <div className="ml-8">
                <span className="text-zinc-400">"json"</span>: <span className="text-orange-400">{`{
    "title": "Guide",
    "docs": ...
  }`}</span>,
              </div>
              <div className="ml-8">
                <span className="text-zinc-400">"screenshot"</span>: <span className="text-orange-400">"https://example.com/hero.png"</span>,
              </div>
              <div className="ml-4 text-zinc-400">}</div>
              <div className="ml-4 text-zinc-400">...</div>
              <div className="text-zinc-400">]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;