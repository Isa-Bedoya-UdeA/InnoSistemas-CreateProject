import { Alert, AlertDescription } from "../components/ui/alert";
import { CreateProjectSection } from "./sections/CreateProjectSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";

export const CreateProject = (): JSX.Element => {
    return (
        <div className="flex w-full h-screen" data-model-id="59:193">
            <NavigationBarSection/>

            <main className="flex-1 w-[83%]">
                <div className="container mx-auto px-4 relative">
                <CreateProjectSection />

                <Alert
                    variant="destructive"
                    className="w-[330px] absolute top-[29px] right-4 bg-[#ffccd3] border-[#ffccd3] p-3"
                >
                    <img
                    className="inline w-5 h-5 mr-2"
                    alt="Error icon"
                    src="https://c.animaapp.com/ZaDpWbsA/img/error-icon.svg"
                    />
                    <AlertDescription className="inline [font-family:'Inter',Helvetica] font-normal text-[#ff405a] text-sm tracking-[0] leading-[16.8px]">El campo Nombre del proyecto está vacío</AlertDescription>
                </Alert>
                </div>
            </main>
        </div>
    );
};
