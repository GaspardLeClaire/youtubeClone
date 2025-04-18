import { Component, input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Video } from '../../models/video';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  username: string = '';
  constructor(private authService: AuthService) { }

  ngOnInit() {
    const currentUser = this.authService.currentUserValue;
    console.log(currentUser)
    if (currentUser) {
      this.username = currentUser.username;
    }
  }
}
