import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  getQuote() {
    this.router.navigate(['/contact']);
  }

  callEmergency() {
    const phoneNumber = '8143487336';
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText(phoneNumber);
      alert('Phone number copied to clipboard: ' + phoneNumber);
    }
  }

  onImageError(event: any) {
    console.log('Image failed to load:', event.target.src);
    event.target.style.display = 'none';
  }
}
