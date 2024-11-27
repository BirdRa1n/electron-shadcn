import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import NavigationMenu from "@/components/NavigationMenu";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}

/*
            <DragWindowRegion title="electron-shadcn" />

      <NavigationMenu />
            <hr />*/