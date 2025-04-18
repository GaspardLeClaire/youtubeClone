import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiYoutubeService {
  private readonly apiKey = ""
  private readonly apiUrl = "https://www.googleapis.com/youtube/v3/search"
  
  private readonly http: HttpClient = inject(HttpClient)

  fetchVideos(search:string) {
    const params = {
      part: 'snippet',
      q:search,
      type:'video',
      maxResult:20,
      key:this.apiKey
    } 

    return this.http.get(this.apiUrl,{params})
   
  }
}
