import { type MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Next.js PWA',
        short_name: 'NextPWA',
        description: 'A Progressive Web App built with Next.js',
        start_url: '/',
        display: 'standalone',
        background_color: '#09ff00ff',
        theme_color: '#ff9100ff',
        icons: [
            {
                src: "/icons/192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/icons/512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            }
        ],
        screenshots: [
            {
                src: "screenshots/mobile-1.jpg",
                sizes: "400x822",
                type: "image/jpg",
                form_factor: "narrow"
            },
            {
                src: "screenshots/mobile-2.jpg",
                sizes: "400x822",
                type: "image/jpg",
                form_factor: "narrow"
            },
            {
                src: "screenshots/desktop-1.jpg",
                sizes: "1280x676",
                type: "image/jpg",
                form_factor: "wide"
            },
            {
                src: "screenshots/desktop-2.jpg",
                sizes: "1280x676",
                type: "image/jpg",
                form_factor: "wide"
            },
        ]
    }
}