import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageURL!: string;
  bouton!: string;

  ngOnInit(): void {
    this.title = "Archibald";
    this.imageURL = "https://animalaxy.fr/wp-content/uploads/2019/01/iStock-1067074306-758x505.jpg";
    this.description = "Mon meilleur ami depuis toujours";
    this.createdDate = new Date();
    this.snaps = 6;
    this.bouton = "Snap!";
  }

  onSnap() {
    if (this.bouton == "Snap!") {
      this.snaps++;
      this.bouton = "Oops... déSnap!";
    }
    else {
      this.snaps--;
      this.bouton = "Snap!";
    }
  }
}