import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Playlist, Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class LocaleStorageService {

  constructor() { }

  users:Array<User> = JSON.parse(localStorage.getItem('users') || '[]');
  playlists:Array<Playlist> = JSON.parse(localStorage.getItem('playlist') || '[]')

  getListUsers():Array<User>{
    return this.users;
  }

  getUser(email: string, password: string): User | null {
    let userFound = this.users.find(existingUser => existingUser.email === email && existingUser.password === password);
    if (userFound) {
      return userFound;
    } else {
      return null;
    }
  }

  addUser(user: User): boolean {
    console.log(user);
    let userFound = this.users.find(existingUser => existingUser.email === user.email);
    if (userFound === undefined) {
      user.id = 
      this.users.push(user);
      localStorage.setItem('users', JSON.stringify(this.users));
      return true;
    }
    return false;
  }

  getListPlaylists():Array<Playlist>{
    return this.playlists
  }

  getPlaylist(userEmail:string):Playlist | null{
    let playlistFound = this.playlists.find(existingPlaylist => existingPlaylist.userEmail === userEmail);
    if (playlistFound) {
      return playlistFound;
    } else {
      return null;
    }
  }

  deletePlaylist(userEmail:string){
    let oldPlaylists = this.playlists;
    let newPlaylists = oldPlaylists.find(existingPlaylist => existingPlaylist.userEmail != userEmail)
    localStorage.setItem('playlists', JSON.stringify(newPlaylists));
  }

  addPlaylist(plyalist:Playlist){
    this.playlists.push(plyalist)
    localStorage.setItem('playlists', JSON.stringify(this.playlists));
  }


  AddVideoToPlaylist(userEmail:string,video:Video):boolean{
    let playlist:Playlist | null = this.getPlaylist(userEmail);
    this.deletePlaylist(userEmail);
    if(playlist != null){
      playlist.videos.push(video);
      this.addPlaylist(playlist);
    }else{
      let videos:Array<Video> = []
      videos.push(video);
      playlist = {userEmail: userEmail, videos: videos}
      this.addPlaylist(playlist)
    }

    return true;
  }

}
