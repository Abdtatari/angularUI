import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {Project} from '../../models/gitlabModels/project'
import { Branch } from 'src/app/models/gitlabModels/branch';
import { Commit } from 'src/app/models/gitlabModels/commit';
import { Repository } from 'src/app/models/gitlabModels/repository';
@Injectable({
  providedIn: 'root'
})
export class GitLabService {
  //private apiUrl = 'https://gitlab.cern.ch/api/v4/projects/';
  private apiUrl;
  private accessToken;

  constructor(private http: HttpClient) { 
    this.apiUrl = 'https://gitlab.com/api/v4';
    this.accessToken = "glpat-8X-vWfMYtB3zYM1rkQuH";
  }

  getProjectMetaData(projectID :string) {
    return this.http.get<Project>(`${this.apiUrl}/projects/${projectID}`,{headers: new HttpHeaders().set('Authorization', 'Bearer '+this.accessToken)});
  }
  getRepoBranches(projectID :string):Observable<Branch[]>{
    return this.http.get<Branch[]>(`${this.apiUrl}/projects/${projectID}/repository/branches/`,{headers: new HttpHeaders().set('Authorization', 'Bearer '+this.accessToken)});
  }
  getCommits(projectID :string ):Observable<Commit[]>{ 
    return this.http.get<Commit[]>(`${this.apiUrl}/projects/${projectID}/repository/commits/`,
    {headers: new HttpHeaders().set('Authorization', 'Bearer '+this.accessToken)},)
  }
  getMetaData():Observable<Repository[]>{
    return this.http.get<Repository[]>(`${this.apiUrl}/metadata`,{headers: new HttpHeaders().set('Authorization', 'Bearer '+this.accessToken)});
  }

}
