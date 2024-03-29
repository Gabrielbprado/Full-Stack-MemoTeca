import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { thoughts } from '../thoughts-Model/thoughts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

    private readonly API = 'http://localhost:3000/api/thought';
  constructor(private http: HttpClient) { }
  
  GetAll(page:number,query: string,favorite: boolean) :Observable<thoughts[]>
  {
    
    if (favorite) 
    {
    const url = `${this.API}/get/favorite`;
    let params = new HttpParams().set('page', page.toString()).set('query', query);
    return this.http.get<thoughts[]>(url, { params });
} else 
{
  let params = new HttpParams().set('page', page.toString()).set('query', query);
  return this.http.get<thoughts[]>(this.API, { params });
}
    
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
    return this.http.put<thoughts>(url,thought);
  }

  FavoriteThoughts(thought: thoughts) :Observable<thoughts>
  {
 
    const url = `${this.API}/favorite/${thought.id}`;
    return this.http.patch<thoughts>(url,thought);
  }

 
}
