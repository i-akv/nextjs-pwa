"use client";

// import { Metadata } from 'next';
import { useEffect, useState } from 'react'

// export const metadata: Metadata = {
//     title: "share api",
//     description: "use native share api to mock share behaviour like mobile apps"
// }

const SharePage = () => {
    const [shareInfo, setShareInfo] = useState({ title: "Title of the page", text: "this is text shared using ShareAPI", url: process.env.NEXT_PUBLIC_BASE_URL + "/share" });
    return (
        <div className='flex flex-col gap-3 w-[90%] py-3 mx-auto'>
            <label htmlFor="title">
                <p>Title</p>
                <input type="text" value={shareInfo.title} id="title" placeholder='title' onChange={e => setShareInfo(p => ({ ...p, title: e.target.value }))} />
            </label>
            <label htmlFor="text">
                <p>Text</p>
                <input type="text" value={shareInfo.text} id="text" placeholder='text' onChange={e => setShareInfo(p => ({ ...p, text: e.target.value }))} />
            </label>
            <label htmlFor="url">
                <p>URL</p>
                <input type="text" value={shareInfo.url} id='url' placeholder='url' onChange={e => setShareInfo(p => ({ ...p, url: e.target.value }))} />
            </label>
            <button className='bg-red-400 rounded-lg p-2' onClick={async () => { try { await navigator.share(shareInfo) } catch (e) { alert(`Error while sharing: ${(e as Error).message}`) } }}>Share</button>
        </div>
    )
}

export default SharePage