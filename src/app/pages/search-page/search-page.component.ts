import { Component, inject } from '@angular/core';
import { ApiYoutubeService } from '../../services/api-youtube.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Video } from '../../models/video';

@Component({
  selector: 'app-search-page',
  imports: [],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  videos: Array<Video> = [];
  constructor( private  readonly apiYoutubeService: ApiYoutubeService) {}

rechercher(search: string) {
  this.videos = []
  this.apiYoutubeService.fetchVideos(search).subscribe({
    next: (response: any) => {
      const videosFormatees: Video[] = response.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        url: item.snippet.thumbnails.high.url
      }));

      this.videos.push(...videosFormatees);
      console.log(this.videos);
    },
    error: (error: Error) => {
      console.error(error);
    }
  });
}

//comment récupérer une vidéo
  

}
