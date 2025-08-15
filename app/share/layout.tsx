import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "share api",
    description: "use native share api to mock share behaviour like mobile apps"
}

const ShareLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>{children}</>
    )
}

export default ShareLayout