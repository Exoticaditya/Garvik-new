import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className} group`}>
            <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
                <Image
                    src="/logo.png"
                    alt="Garvik India Logo"
                    fill
                    className="object-contain"
                    priority
                />
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col justify-center leading-tight">
                <span className="text-2xl font-black tracking-tighter uppercase text-white group-hover:text-primary transition-colors duration-300">
                    Garvik
                </span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase -mt-1 shimmer">
                    India
                </span>
            </div>
        </div>
    );
}


