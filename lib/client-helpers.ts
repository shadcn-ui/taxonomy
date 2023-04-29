export async function downloadImage(url: string, imageName: string) {
    const a = document.createElement("a")
    a.href = await toDataURL(url)
    a.download = imageName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

export function toDataURL(url: string) {
    return fetch(url)
        .then((response) => {
            return response.blob()
        })
        .then((blob) => {
            return URL.createObjectURL(blob)
        })
}
