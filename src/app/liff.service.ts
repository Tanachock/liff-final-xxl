import { Injectable } from '@angular/core';
import liff from '@line/liff';

@Injectable({
  providedIn: 'root'
})
export class LiffService {

  constructor() { }

  lineliff(){
    liff.init({liffId:'2005412151-w4nvPAZm'}).then(()=>{
      if(!liff.isLoggedIn()){
        liff.login()
      }
    }).catch(console.error);
  }

  Lifflogout(){
    if (liff.isLoggedIn()) {
      liff.logout();
      liff.closeWindow();
    }
  }
}
