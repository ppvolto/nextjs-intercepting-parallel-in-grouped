import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ArticlesLayout(props: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className={cn("grid grid-rows-[auto_1fr]")}>
      {props.modal}
      <div className="flex flex-col items-center justify-between p-2 border-b">
        <div className="flex gap-4">
          <h1>Article Module Layout</h1>
        </div>
        <ul className="flex gap-4">
          <Button asChild>
            <li>
              <Link href="/articles/new" passHref>New Article</Link>
            </li>
          </Button>
        </ul>
      </div>
      <div className={cn("grid place-items-center")}>{props.children}</div>
    </main>
  );
}
