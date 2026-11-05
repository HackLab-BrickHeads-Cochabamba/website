/** Shared public URLs for the four indexable pages. */
export const usePublicPageSeo = (path: string) => {
  const origin = "https://hacklab.brickheads.space";
  const url = `${origin}${path}`;
  const image = `${origin}/images/social-preview.png`;

  useHead({ link: [{ rel: "canonical", href: url }] });
  useSeoMeta({
    ogUrl: url,
    ogType: "website",
    ogSiteName: "HackLab BrickHeads",
    ogLocale: "es_BO",
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: "image/png",
    ogImageAlt: "HackLab BrickHeads — comunidad de conocimiento abierto en Cochabamba, Bolivia",
    twitterCard: "summary_large_image",
    twitterImage: image,
    twitterImageAlt: "HackLab BrickHeads — Cochabamba, Bolivia",
  });
};
