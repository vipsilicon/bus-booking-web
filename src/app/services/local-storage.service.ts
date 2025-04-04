import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private user = 'user';

  constructor() { }

  saveUserData(user:any){
    localStorage.setItem(this.user, user);
  }

  getUserData():any {
    const user = localStorage.getItem(this.user);
    return user ? JSON.parse(user) : null;
  }

  clearUserData():void {
    localStorage.removeItem(this.user);
  }
}
