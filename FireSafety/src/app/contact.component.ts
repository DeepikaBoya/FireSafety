import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  onSubmit() {
    const subject = `Fire Safety Inquiry - ${this.formData.service}`;
    const body = `Name: ${this.formData.name}%0D%0AEmail: ${this.formData.email}%0D%0APhone: ${this.formData.phone}%0D%0AService: ${this.formData.service}%0D%0AMessage: ${this.formData.message}`;
    
    try {
      window.location.href = `mailto:srijaifiresafety@gmail.com?subject=${subject}&body=${body}`;
    } catch (error) {
      
      const emailText = `To: srijaifiresafety@gmail.com\nSubject: ${subject}\n\n${body.replace(/%0D%0A/g, '\n')}`;
      navigator.clipboard.writeText(emailText);
      alert('Email client not found. Email details copied to clipboard. Please paste in your email app.');
    }
  }
}