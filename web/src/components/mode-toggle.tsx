import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <NavigationMenu>
            <NavigationMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuItem onClick={() => setTheme("light")}>
                    Light
                </NavigationMenuItem>
                <NavigationMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </NavigationMenuItem>
                <NavigationMenuItem onClick={() => setTheme("system")}>
                    System
                </NavigationMenuItem>
            </NavigationMenuContent>
        </NavigationMenu>
    )
}
