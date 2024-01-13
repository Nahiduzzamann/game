export type GameTypes = Root2[]

export interface Root2 {
  content: Content
  _id: string
  status: string
  microtime: number
  dateTime: string
  error: string
}

export interface Content {
  gameLabels: string[]
  gameTitles: string[]
  gameList: GameList[]
}

export interface GameList {
  _id: string
  id: string
  name: string
  name_cn: string
  name_kr: string
  img: string
  label: string
  device: string
  title: string
  categories: string
  flash: string
  vertical: string
  bm: string
  demo: string
  localhost: string
  rewriterule: string
  lines: string
  width: string
  wager: string
  bonus: string
  exitButton: string
  disableReload: string
  menu: string
  system_name2: string
}

export interface Providers{
    title:string,
    image:string,
    icon:string,
    slag:string
}