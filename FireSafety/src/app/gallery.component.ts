import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  showModal = false;
  modalImage = '';
  modalCaption = '';

  images = [
    { path: 'assets/image2.jpeg', caption: 'Fire safety installation project', type: 'image' },
    { path: 'assets/image3.jpeg', caption: 'Equipment maintenance work', type: 'image' },
    { path: 'assets/image4.jpeg', caption: 'Fire extinguisher installation', type: 'image' },
    { path: 'assets/image5.jpeg', caption: 'Safety system setup', type: 'image' },
    { path: 'assets/image6.jpeg', caption: 'Fire alarm system installation', type: 'image' },
    { path: 'assets/image7.jpeg', caption: 'Professional fire safety work', type: 'image' },
    { path: 'assets/image8.jpeg', caption: 'Equipment testing and maintenance', type: 'image' },
    { path: 'assets/image9.jpeg', caption: 'Fire safety consultation', type: 'image' },
    { path: 'assets/image10.jpeg', caption: 'Safety equipment installation', type: 'image' },
    { path: 'assets/image11.jpeg', caption: 'Fire prevention system setup', type: 'image' },
    { path: 'assets/image12.jpeg', caption: 'Professional installation work', type: 'image' },
    { path: 'assets/image13.jpeg', caption: 'Fire safety equipment maintenance', type: 'image' },
    { path: 'assets/image14.jpeg', caption: 'Safety system inspection', type: 'image' },
    { path: 'assets/image15.jpeg', caption: 'Fire equipment setup', type: 'image' },
    { path: 'assets/image16.jpeg', caption: 'Professional fire safety service', type: 'image' },
    { path: 'assets/image17.jpeg', caption: 'Fire alarm installation', type: 'image' },
    { path: 'assets/image18.jpeg', caption: 'Safety equipment maintenance', type: 'image' },
    { path: 'assets/image19.jpeg', caption: 'Fire safety project completion', type: 'image' },
    { path: 'assets/image20.jpeg', caption: 'Equipment testing work', type: 'image' },
    { path: 'assets/image21.jpeg', caption: 'Fire prevention installation', type: 'image' },
    { path: 'assets/image22.jpeg', caption: 'Latest fire safety project', type: 'image' },
    { path: 'assets/video.mp4', caption: 'Fire safety system demonstration', type: 'video' }
  ];
  
  openModal(imagePath: string, caption: string) {
    this.modalImage = imagePath;
    this.modalCaption = caption;
    this.showModal = true;
  }
  
  closeModal() {
    this.showModal = false;
  }
  
  onImageError(event: any) {
    console.log('Gallery image failed to load:', event.target.src);
    event.target.style.display = 'none';
  }
}
