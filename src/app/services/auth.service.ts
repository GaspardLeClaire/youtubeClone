import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocaleStorageService } from './locale-storage.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // Gestion de la navigation dynamique
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || 'null'));
  public currentUser$: Observable<any> = this.currentUserSubject.asObservable();
  private readonly localeStorage:LocaleStorageService = inject(LocaleStorageService);
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    const user:User|null= this.localeStorage.getUser(email,password)
    sessionStorage.setItem('currentUser', JSON.stringify({id:user?.id, username: user?.username, email:user?.email}));
    this.currentUserSubject.next(user);
    return user;
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    // Met à jour le currentUserSubject avec null (BehaviorSubject)
    this.currentUserSubject.next(null);
  }

  register(user: User) {
    return this.localeStorage.addUser(user);
  }
}
