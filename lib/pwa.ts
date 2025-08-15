type ShareInfo = {
    title: string,
    text: string,
    url: string,
}
export const share = (shareInfo: ShareInfo) => navigator.share(shareInfo)