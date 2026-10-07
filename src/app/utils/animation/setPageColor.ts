// Sets page background and browser UI color (address bar) so the loader blends with it on mobile
export function setPageColor(color: string) {
    document.documentElement.style.backgroundColor = color
    document.body.style.backgroundColor = color

    let meta = document.querySelector<HTMLMetaElement>(
        'meta[name="theme-color"]'
    )

    if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'theme-color'
        document.head.appendChild(meta)
    }

    meta.content = color
}
