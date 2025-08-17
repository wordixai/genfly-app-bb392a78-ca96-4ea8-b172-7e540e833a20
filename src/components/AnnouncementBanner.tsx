import { Flame } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <div className="relative overflow-hidden py-1 transition-all duration-300 ease-in-out border-b border-[#edededff] bg-[#f9f9f9]">
      <div className="relative z-10 flex items-center justify-center gap-4 py-1 px-4">
        <div className="flex items-center gap-1 text-sm">
          <Flame className="w-6 h-6 text-orange-500" />
          <span className="text-base text-[#1a1a1a]">
            <span className="inline-flex text-sm items-center gap-2">
              <span className="hidden md:inline-block font-semibold tracking-[0.015em]">
                Our biggest week of announcements is coming.
              </span>
              <span className="hidden md:inline-block font-normal tracking-[0.015em]">
                Everything changes on August 19th.
              </span>
              <span className="inline-block md:hidden font-semibold tracking-[0.015em]">
                Everything changes on August 12th
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;