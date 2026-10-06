import Image from "next/image";
import logo from "@/public/logo.png";

export default function Logo({ className = "h-9 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return <Image src={logo} alt="THE AFTER" className={className} priority={priority} sizes="200px" />;
}
