import { createRoute } from "@tanstack/react-router";
import HomePage from "../pages/HomePage";
import { RootRoute } from "./__root";

export const HomeRoute = createRoute({
    getParentRoute: () => RootRoute,
    path: "/",
    component: HomePage,
});


export const rootTree = RootRoute.addChildren([HomeRoute]);
