"use client";

import { useEffect, useState } from "react";

const InstallPage = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
    // const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            // setIsVisible(true); // Show the install button
        };

        window.addEventListener("beforeinstallprompt", handler);
        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // @ts-expect-error - The type is specific to the browser event
        deferredPrompt.prompt();
        // @ts-expect-error
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
            console.log("PWA installation accepted");
        } else {
            console.log("PWA installation dismissed");
        }
        setDeferredPrompt(null);
        // setIsVisible(false);
    };

    // if (!isVisible) return null;

    return (
        <div className="w-[90%] mx-auto py-5">
            <button onClick={handleInstallClick} className="px-4 py-2 bg-blue-600 rounded">
                Install App
            </button>
        </div>
    );
}

export default InstallPage;