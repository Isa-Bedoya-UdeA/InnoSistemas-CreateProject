import {
    ChevronDownIcon,
    LogOutIcon,
    SettingsIcon,
    UserIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "../../components/ui/collapsible";

    // Define team data for mapping
const teams = [
    { name: "Gestión de Proyectos", selected: true },
    { name: "EquipoB", selected: false },
    { name: "EquipoC", selected: false },
];

export const NavigationBarSection = (): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <nav className="flex flex-col w-60 h-screen items-start gap-6 px-2.5 py-5 bg-white">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3 px-4 py-0 w-full">
                <div className="flex h-10 items-center justify-center gap-2.5 px-[9px] py-[5px] bg-white">
                <img
                    className="w-[29.64px] h-[29.64px]"
                    alt="InnoSistemas Logo"
                    src="https://c.animaapp.com/I8bYeMMr/img/vector.svg"
                />
                <div className="[font-family:'Signika',Helvetica] font-semibold text-[#307dfd] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                    InnoSistemas
                </div>
                </div>
            </div>

            {/* Teams Section */}
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
                <CollapsibleTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-10 w-full items-center justify-between px-4 py-0 hover:bg-transparent"
                >
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-black text-sm tracking-[0] leading-[16.8px]">
                    Equipos
                    </span>
                    <ChevronDownIcon className="h-4 w-4" />
                </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="w-full">
                {teams.map((team, index) => (
                    <Button
                    key={index}
                    variant="ghost"
                    className="flex h-10 w-full items-center gap-2 px-6 py-0 justify-start"
                    >
                    <div
                        className={`w-2 h-2 rounded ${team.selected ? "bg-[#307dfd]" : "bg-[#c1d8fe]"}`}
                    />
                    <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm tracking-[0] leading-[16.8px]">
                        {team.name}
                    </span>
                    </Button>
                ))}
                </CollapsibleContent>
            </Collapsible>

            {/* Spacer */}
            <div className="flex-1 w-full" />

            {/* Bottom Section */}
            <div className="flex flex-col items-start w-full">
                {/* SettingsIcon */}
                <Button
                variant="ghost"
                className="flex h-12 w-full items-center gap-3 px-4 py-0 justify-start"
                >
                <SettingsIcon className="w-6 h-6" />
                <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm tracking-[0] leading-[16.8px]">
                    Ajustes
                </span>
                </Button>

                {/* Logout */}
                <Button
                variant="ghost"
                className="flex h-12 w-full items-center gap-3 px-4 py-0 justify-start"
                >
                <LogOutIcon className="w-6 h-6" />
                <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm tracking-[0] leading-[16.8px]">
                    Cerrar&nbsp;&nbsp;sesión
                </span>
                </Button>

                {/* UserIcon Profile */}
                <div className="flex items-center gap-3 p-4 w-full">
                <Avatar className="w-10 h-10 bg-[#c1d8fe]">
                    <AvatarFallback className="bg-[#c1d8fe]">
                    <UserIcon className="w-6 h-6" />
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start gap-0.5">
                    <div className="[font-family:'Inter',Helvetica] font-semibold text-black text-sm tracking-[0] leading-[16.8px]">
                    John Doe
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-xs tracking-[0] leading-[14.4px]">
                    credenciales
                    </div>
                </div>
                </div>
            </div>

            <div className="h-7 w-full" />
        </nav>
    );
};
