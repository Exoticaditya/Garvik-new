import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center ${className} group`}>
            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 transition-transform duration-500 group-hover:scale-110">
                <Image
                    src="/logo.png"
                    alt="Garvik India - Premium Creative Agency"
                    fill
                    className="object-contain"
                    priority
                />
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </div>
    );
}


