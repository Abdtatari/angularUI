import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { historyModel } from 'src/app/history-table/history-table.component';
import { DBFolderModel } from 'src/app/models/dbfolder-model';
import { SessionUser } from 'src/app/models/session-user';
import { ComponentChildren } from 'src/app/models/component-children'

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Basic ' + ('weblogic:12341234')
  })
};

@Injectable({
  providedIn: 'root'
})
export class DBService {
  private apiUrl;

  constructor(private http: HttpClient) { 
    this.apiUrl = 'http://128.141.83.230:7101/compHandler/resources';
  }

  getFiles() {
    return this.http.get<DBFolderModel[]>(`${this.apiUrl}/portlet/detectors`);
  }
  getFilesInsideParent(parentID:string) {
    return this.http.get<DBFolderModel[]>(`${this.apiUrl}/portlet/componets`+'?parentID='+ encodeURIComponent( JSON.stringify(parentID)));
  }
  getUserSession(){
    const headers = { 'content-type': 'application/json'}  
    return this.http.get<SessionUser>(`${this.apiUrl}/session/currentUser`, {withCredentials: true});
  }
  getComponentHistory(componentID:string){
    return this.http.get<historyModel[]>(`${this.apiUrl}/portlet/componentHistory`+'?id='+ encodeURIComponent(componentID));
  }
  sendAccountInfo(account:any){
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(`${this.apiUrl}/session/user`,JSON.stringify(account),{'headers':headers});
  }
  getChildrenFolders(parentID:string){
      return this.http.get<ComponentChildren[]>(`${this.apiUrl}/portlet/componenttChildren`+'?id='+ encodeURIComponent(parentID));
  }
}
