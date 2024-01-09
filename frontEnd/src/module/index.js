import getCategory from "./getCategory"
const  url="http://localhost:3100/api"
const getGamesCategory=await getCategory(url)
export {url,getGamesCategory}
