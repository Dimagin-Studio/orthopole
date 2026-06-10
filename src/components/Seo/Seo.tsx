const SITE_URL = "https://orthopole.be"
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/photos-site-web/devanture.jpeg`

type SeoProps = {
    title: string
    description: string
    path: string
    image?: string
    noindex?: boolean
}

export default function Seo({ title, description, path, image, noindex }: SeoProps) {
    const url = `${SITE_URL}${path}`
    const ogImage = image ?? DEFAULT_OG_IMAGE

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            {noindex && <meta name="robots" content="noindex, follow" />}

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Orthopole" />
            <meta property="og:locale" content="fr_BE" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </>
    )
}
