import type { Favicon } from "@/types/config.ts";


export const defaultFavicons: Favicon[] = [
    {
        src: "/favicon/icon-light.svg",
        theme: "light",
        type: "image/svg+xml",
    },
    {
        src: "/favicon/icon-dark.svg",
        theme: "dark",
        type: "image/svg+xml",
    },
    {
        src: "/favicon/icon-light.ico",
        theme: "light",
        sizes: "96x96",
    },
    {
        src: "/favicon/icon-dark.ico",
        theme: "dark",
        sizes: "96x96",
    },
    {
        src: "/favicon/icon.png",
        sizes: "96x96",
    },
    {
        src: "/favicon/icon.ico",
        sizes: "96x96",
    },
];
