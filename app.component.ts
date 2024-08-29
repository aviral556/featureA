import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chatMessages: string[] = [];
  apiUrl = 'https://apps.gcpwkshpdev.com/chat/v2';

  constructor(private http: HttpClient) {}

  sendRequest(jsonPayload: string) {
    this.http.post(this.apiUrl, jsonPayload, { headers: { 'Content-Type': 'application/json' } })
      .subscribe(
        (response: any) => {
          const messages = response.results.map((result: any) => result.part.text).join('\n');
          this.chatMessages.push(messages);
        },
        (error) => {
          console.error('API error:', error);
          this.chatMessages.push('Error fetching response. Please try again.');
        }
      );
  }

  onSubmit(searchInput: HTMLInputElement) {
    const jsonPayload = searchInput.value;
    if (jsonPayload.trim()) {
      this.sendRequest(jsonPayload);
      searchInput.value = ''; // Clear the input after sending
    }
  }
}

