
export interface ServiceCard {
  title: string;
  items: string[];
  gradient: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isFeatured?: boolean;
}

export type DSPIconName = 
  | '7digital'
  | 'agedi'
  | 'alimusic'
  | 'amazon' 
  | 'anghami' 
  | 'audiomack'
  | 'awa'
  | 'bandcamp'
  | 'boomplay' 
  | 'canva'
  | 'capcut'
  | 'deezer'
  | 'douyin'
  | 'facebook'
  | 'flo'
  | 'gaana' 
  | 'hook'
  | 'hungama'
  | 'iheart'
  | 'imusica'
  | 'itunes' 
  | 'jaxsta'
  | 'joox'
  | 'kkbox'
  | 'kuaishou'
  | 'kugou'
  | 'kuwo'
  | 'lickd'
  | 'linemusic'
  | 'lissen'
  | 'mixcloud'
  | 'moov'
  | 'napster'
  | 'netease'
  | 'nuuday'
  | 'pandora'
  | 'peloton'
  | 'qobuz'
  | 'saavn' 
  | 'shazam'
  | 'snap'
  | 'soundcloud'
  | 'soundexchange'
  | 'spotify' 
  | 'tencent'
  | 'tidal' 
  | 'tiktok' 
  | 'trebel'
  | 'tuneglobal'
  | 'vevo'
  | 'vkmusic'
  | 'wechat'
  | 'youtube-music' 
  | 'youtube'
  | 'jiosaavn';
