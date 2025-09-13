import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function V0Button({
    className,
    children,
    ...props
}: React.ComponentProps<typeof Button>) {
    return (
        <Button
            className={cn(
                "gap-1 rounded-lg shadow-none bg-black px-3 text-xs text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors duration-200 not-prose",
                className
            )}
            {...props}
        >
            {children}
        </Button>
    );
}
