import { CalendarIcon, PlusCircleIcon, XIcon } from "lucide-react";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
    RadioGroup,
    RadioGroupItem,
} from "../../components/ui/radio-group";
import { Textarea } from "../../components/ui/textarea";

export const CreateProjectSection = (): JSX.Element => {
    // Project status options data
    const statusOptions = [
        {
        id: "in-progress",
        label: "En progreso",
        color: "text-[#307dfd]",
        bgColor: "bg-[#c1d8fe]",
        iconSrc: "https://c.animaapp.com/ZaDpWbsA/img/frame-2.svg",
        },
        {
        id: "pending",
        label: "Pendiente",
        color: "text-amber-600",
        bgColor: "bg-white",
        iconSrc: "https://c.animaapp.com/ZaDpWbsA/img/frame-3.svg",
        },
        {
        id: "completed",
        label: "Terminado",
        color: "text-emerald-600",
        bgColor: "bg-white",
        iconSrc: "https://c.animaapp.com/ZaDpWbsA/img/frame-4.svg",
        },
    ];

    // Team members data
    const teamMembers = [
        { id: 1, name: "John Doe", initials: "JD" },
        { id: 2, name: "Anna Smith", initials: "AS" },
    ];

    return (
        <div className="flex flex-col w-full gap-10 px-[60px] py-[65px] bg-[#f8f9fa]">
        {/* Header section with breadcrumbs and title */}
        <div className="flex flex-col items-start gap-2 w-full">
            <Breadcrumb className="w-full">
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink className="font-normal text-gray-500 text-sm">
                    Proyectos
                </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink className="font-medium text-[#307dfd] text-sm">
                    Crear proyecto
                </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>

            <h1 className="font-bold text-black text-[28px] leading-[33.6px] font-sans tracking-[0]">
            Crear proyecto nuevo
            </h1>

            <p className="font-normal text-slate-500 text-base leading-[19.2px] font-sans tracking-[0]">
            Llena los campos a continuación para crear un nuevo projecto para tu
            equipo.
            </p>
        </div>

        {/* Main form card */}
        <Card className="border border-slate-200 rounded-xl">
            <CardContent className="flex flex-col gap-6 p-8">
            {/* Project name field with error state */}
            <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-1">
                <label className="font-semibold text-black text-sm">
                    Nombre del proyecto
                </label>
                <span className="font-medium text-[#ff405a] text-sm">*</span>
                </div>
                <div className="relative">
                <Input
                    className="h-11 bg-[#ffccd3] border-[#ff405a] text-black"
                    defaultValue=""
                />
                <Alert className="mt-1 py-1 px-2 bg-[#ffccd3] border-none">
                    <AlertDescription className="text-[#ff405a] text-xs">
                    El campo Nombre del proyecto está vacío
                    </AlertDescription>
                </Alert>
                </div>
            </div>

            {/* Description field */}
            <div className="flex flex-col gap-2 w-full">
                <label className="font-semibold text-black text-sm">
                Descripción
                </label>
                <Textarea
                className="min-h-[120px] p-3 border-slate-200 text-sm"
                defaultValue="Redesign the company website with a modern look and feel, improve user experience, and optimize for mobile devices."
                />
            </div>

            {/* Date fields */}
            <div className="flex items-start gap-6 w-full">
                <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-1">
                    <label className="font-semibold text-black text-sm">
                    Fecha de inicio
                    </label>
                    <span className="font-medium text-[#ff405a] text-sm">*</span>
                </div>
                <input
                    type="date"
                    className="pl-4 pr-4 h-11 justify-between font-normal text-black text-sm border-slate-200 w-full"
                />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-1">
                    <label className="font-semibold text-black text-sm">
                    Fecha de fin
                    </label>
                    <span className="font-medium text-[#ff405a] text-sm">*</span>
                </div>
                <input
                    type="date"
                    className="pl-4 pr-4 h-11 justify-between font-normal text-black text-sm border-slate-200 w-full"
                />
                </div>
            </div>

            {/* Status selection */}
            <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-1">
                <label className="font-semibold text-black text-sm">Estado</label>
                <span className="font-medium text-[#ff405a] text-sm">*</span>
                </div>
                <RadioGroup
                defaultValue="in-progress"
                className="flex items-center gap-4"
                >
                {statusOptions.map((status) => (
                    <div
                    key={status.id}
                    className={`inline-flex h-11 items-center justify-center gap-2 px-4 py-0 rounded-lg ${status.id === "in-progress" ? status.bgColor : "bg-white border border-slate-200"}`}
                    >
                        <img
                            className="w-5 h-5"
                            alt={status.label}
                            src={status.iconSrc}
                        />
                        <label
                            className={`font-medium ${status.color} text-sm`}
                            htmlFor={status.id}
                        >
                            {status.label}
                        </label>
                        <RadioGroupItem
                            value={status.id}
                            id={status.id}
                            className="hidden"
                        />
                    </div>
                ))}
                </RadioGroup>
            </div>

            {/* Team members section */}
            <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-1">
                <label className="font-semibold text-black text-sm">
                    Miembros del equipo asignados
                </label>
                <span className="font-medium text-[#ff405a] text-sm">*</span>
                </div>

                <div className="flex flex-wrap items-center gap-[12px] w-full">
                {teamMembers.map((member) => (
                    <Badge
                    key={member.id}
                    className="h-10 pl-1 pr-2 py-0 bg-[#c1d8fe] text-black rounded-[20px] font-medium gap-2"
                    >
                    <Avatar className="h-8 w-8 bg-[#307dfd] rounded-2xl">
                        <AvatarFallback className="text-white text-sm rounded-2xl">
                        {member.initials}
                        </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{member.name}</span>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 p-0 rounded-xl"
                    >
                        <XIcon className="h-4 w-4" />
                    </Button>
                    </Badge>
                ))}
                </div>

                <Button
                variant="outline"
                className="h-10 gap-2 rounded-[20px] border-slate-200 w-fit"
                >
                <PlusCircleIcon className="h-4 w-4 text-[#307dfd]" />
                <span className="font-medium text-[#307dfd] text-sm">
                    Agregar miembro del equipo
                </span>
                </Button>
            </div>
            </CardContent>
        </Card>

        {/* Action buttons */}
        <div className="flex items-center justify-end gap-4 w-full">
            <Button
            variant="outline"
            className="h-11 w-[120px] font-medium text-slate-500 text-sm border-slate-200"
            >
            Cancelar
            </Button>
            <Button className="h-11 w-40 font-semibold text-white text-sm bg-[#307dfd]">
            Crear Proyecto
            </Button>
        </div>
        </div>
    );
};
