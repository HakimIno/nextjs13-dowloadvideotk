const tiktok = require('tiktok-scraper-without-watermark')


export const ssstik = (url: string) => {
    tiktok.tiktokdownload(url)
        .then((result: any) => {
            console.log(result)
        })
        .catch((e: any) => console.log(e))
};
