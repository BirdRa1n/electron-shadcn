import React, { useEffect } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { syncThemeWithLocal, setTheme } from "@/helpers/theme_helpers";

export const RootRoute = createRootRoute({
    component: Root,
});

function Root() {
    useEffect(() => {
        // Sincroniza o tema com as preferências locais ou do sistema na primeira renderização
        syncThemeWithLocal();

        // Adiciona um listener para mudanças no tema do sistema
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = () => {
            syncThemeWithLocal();
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);

        // Limpeza do listener quando o componente for desmontado
        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
        };
    }, []);

    return (
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    );
}

export default Root;
