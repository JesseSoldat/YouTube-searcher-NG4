import { 
  YoutubeSearchService,
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL 
} from './youtube-search.service';

export const youTubeSearchInjectables: Array<any> = [
  {provide: YoutubeSearchService, useClass: YoutubeSearchService},
  {provide: YOUTUBE_API_KEY, userValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, userValue: YOUTUBE_API_URL}
];