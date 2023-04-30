function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://pixelfy.ai</loc>
       </url>
     <url>
       <loc>https://pixelfy.ai/tos</loc>
     </url>
    <url>
        <loc>https://pixelfy.ai/privacy-policy</loc>
     </url>
   </urlset>
 `
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export const getServerSideProps = async (context) => {
    const { res } = context

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap()

    res.setHeader("Content-Type", "text/xml")
    // we send the XML to the browser
    res.write(sitemap)
    res.end()

    return {
        props: {},
    }
}

export default SiteMap
