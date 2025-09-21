import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#1EAEDB]">
        <img 
          src="https://zanalydpkhnbrjipfldc.supabase.co/storage/v1/object/public/juustgifted//gifted-fav.png" 
          alt="Gifted Tech Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-2 font-bold text-xl">
        <span className="text-[#1EAEDB]">Dynamic</span>
        <span className="dark:text-white text-black"> Tech</span>
      </div>
    </div>
  );
}