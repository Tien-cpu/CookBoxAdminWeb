import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class QuestionService {

    urlBase = "https://localhost:44300/api/questions";

    constructor(private http: HttpClient) {}

}
