import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-basic-info-page',
  templateUrl: './basic-info-page.page.html',
  styleUrls: ['./basic-info-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BasicInfoPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
