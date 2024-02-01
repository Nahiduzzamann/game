interface RootObject {
    error: number;
    response: Response[];
    response_provider_logos: Responseproviderlogos;
    currency: string;
}
interface Responseproviderlogos {
    casino: Casino[];
    livecasino: Livecasino[];
    sportsbook: Sportsbook[];
}
interface Sportsbook {
    name: string;
    system: string;
    image_black: string;
    image_white: string;
    image_colored: string;
}
interface Livecasino {
    name: string;
    system: string;
    image_black: string;
    image_white: string;
    image_colored: string;
    image_small_color: string;
    image_small_gray: string;
}
interface Casino {
    name: string;
    system: string;
    image_black?: string;
    image_white?: string;
    image_colored?: string;
    image_small_color?: string;
    image_small_gray?: string;
}
interface Response {
    id: string;
    name: string;
    type: string;
    subcategory: string;
    details: string;
    new: string;
    system: string;
    position: string;
    category: string;
    licence?: string;
    plays: string;
    rtp?: string;
    wagering?: string;
    gamename: string;
    report: string;
    mobile: boolean;
    release_date?: string;
    additional: Additional;
    id_hash: string;
    id_parent: string;
    id_hash_parent: string;
    freerounds_supported: boolean;
    featurebuy_supported: boolean;
    has_jackpot: boolean;
    provider: string;
    provider_name: string;
    play_for_fun_supported: boolean;
    image: string;
    image_preview: string;
    image_filled: string;
    image_portrait: string;
    image_square: string;
    image_background: string;
    image_bw: string;
}
interface Additional {
    aspect_ratio?: string;
    width?: string;
    height?: string;
    scale_up: boolean;
    scale_down: boolean;
    stretching: boolean;
    html5: boolean;
    volatility?: string;
    max_exposure?: string;
    megaways: boolean;
    bonusbuy: boolean;
    jackpot_type?: string;
}
export default RootObject

export interface Welcome10 {
    id:                     string;
    name:                   string;
    type:                   string;
    subcategory:            string;
    details:                string;
    new:                    string;
    system:                 string;
    position:               string;
    category:               string;
    licence:                string;
    plays:                  string;
    rtp:                    string;
    wagering:               null;
    gamename:               string;
    report:                 string;
    mobile:                 boolean;
    release_date:           null;
    additional:             { [key: string]: boolean | null };
    id_hash:                string;
    id_parent:              string;
    id_hash_parent:         string;
    freerounds_supported:   boolean;
    featurebuy_supported:   boolean;
    has_jackpot:            boolean;
    provider:               string;
    provider_name:          string;
    play_for_fun_supported: boolean;
    image:                  string;
    image_preview:          string;
    image_filled:           string;
    image_portrait:         string;
    image_square:           string;
    image_background:       string;
    image_bw:               string;
}