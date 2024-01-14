import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { thoughts } from './thoughts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

    private readonly API = 'http://localhost:3000/api/thought';
  constructor(private http: HttpClient) { }
  
  GetAll() :Observable<thoughts[]>
  {
    return this.http.get<thoughts[]>(this.API);
  }

  GetId(id: Number) :Observable<thoughts>
  {
    const url = `${this.API}/${id}`;
    return this.http.get<thoughts>(url);
  }

  Post(thought: thoughts) :Observable<thoughts>
  {
    return this.http.post<thoughts>(this.API,thought);
  }

  Delete(id: Number) :Observable<thoughts>
  {
    const url = `${this.API}/${id}`;
    return this.http.delete<thoughts>(url);
  }

  Put(thought: thoughts) :Observable<thoughts>
  {
    const url = `${this.API}/${thought.id}`;
    console.log(`o Id é esse ak ${thought.id}`);
    return this.http.put<thoughts>(url,thought);
  }
}
