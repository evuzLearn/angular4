import {
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL,
  YoutubeSearchService
} from '../services/youtube-search.service';

export const youtubeSearchInjectable: Array<any> = [
  { provide: YoutubeSearchService, useClass: YoutubeSearchService },
  { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
  { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
]
