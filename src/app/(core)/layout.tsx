import { cn } from "@/lib/utils";

export default function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("grid place-items-center")}>
        {children}
    </div>
  );
}
