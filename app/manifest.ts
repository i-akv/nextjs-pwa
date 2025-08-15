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
                src: "/web-app-manifest-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/web-app-manifest-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            }
        ],
    }
}