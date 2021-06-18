export const getGifs = async (category) => {
    const apikey = 'weh46AZ7ZbcImJTNSBKGlUy7pSFgRtM3';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apikey}`
    const { data } = await (await fetch(url)).json()
    const gifs = data.map(({ id, title, images }) => {
        return {
            id,
            title,
            url: images?.downsized_medium.url,
        }
    })
    return gifs;
}