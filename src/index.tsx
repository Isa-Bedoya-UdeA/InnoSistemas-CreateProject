import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CreateProject } from "./screens/CreateProject";

createRoot(document.getElementById("app") as HTMLElement).render(
    <StrictMode>
        <CreateProject />
    </StrictMode>,
);
