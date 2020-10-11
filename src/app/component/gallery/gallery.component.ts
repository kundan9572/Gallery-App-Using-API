import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  image: any = [];

  constructor( private imageservice: ImageService) { }

  ngOnInit(): void {
  }

  getImage(){
    this.image = this.imageservice.getImage();
  }

}
