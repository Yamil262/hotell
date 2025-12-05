import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-firebase',
  standalone: false,
  templateUrl: './firebase.html',
  styleUrl: './firebase.css',
})
export class Firebase {
      public dataFirebase: any[] = [];

  private httpClient = inject(HttpClient);

  ngOnInit() {
    this.getFirebaseData();
  }

  getFirebaseData() {
    this.httpClient
      .get('https://dormir-42bd6-default-rtdb.firebaseio.com/.json')
      .subscribe((data: any) => {

        this.dataFirebase = data.hotel || [];

      });
  }
}