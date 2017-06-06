import { SearchResult } from './../search-result.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export const YOUTUBE_API_KEY = 'AIzaSyANY1CJ9DVDD-ciFbOHbbv4T8mewCD21H8';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YoutubeSearchService {
  apiKey: string  = 'AIzaSyANY1CJ9DVDD-ciFbOHbbv4T8mewCD21H8';
  apiUrl: string = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: Http) {   
  }

  search(query: string): Observable<SearchResult[]> {

    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    
    const queryUrl = `${this.apiUrl}?${params}`;
    console.log(queryUrl);
    
    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).items.map((item) => {
          console.log(item);
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });

  }

}

