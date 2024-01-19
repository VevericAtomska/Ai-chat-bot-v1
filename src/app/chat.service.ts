import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class ChatbotService {

 private apiUrl = 'http://localhost:3000/webhook';

 constructor(private http: HttpClient) { }

 sendMessage(userMessage: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.apiUrl, { message: userMessage }, { headers });
  }

}