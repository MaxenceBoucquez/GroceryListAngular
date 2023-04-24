import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiconfigService {

  constructor( private http:HttpClient) { }


}
