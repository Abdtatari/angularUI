import { Component, ViewChild } from '@angular/core';
import { Stack } from '../stack';
import { Router } from '@angular/router';
import {GitLabService} from '../services/gitAPI/git-lab.service'
import { DBService } from '../services/database/db.service';
import { Parser } from '@angular/compiler';
import { DBFolderModel } from '../models/dbfolder-model';
import { Repository } from '../models/gitlabModels/repository';
import { FormControl, FormGroup } from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ComponentChildren } from '../models/component-children';

@Component({
  selector: 'app-component-table',
  templateUrl: './component-table.component.html',
  styleUrls: ['./component-table.component.css']
})
export class ComponentTableComponent {
onChange($event: Event) {

}
  parents: Stack<DBFolderModel[]> | undefined;
   displayedColumns: string[] | undefined;
   dataSource = new MatTableDataSource<DBFolderModel>();
   childrendataSource = new MatTableDataSource<ComponentChildren>();
   childrendisplayedColumns: string[] | undefined;

   backIcon :string | undefined;
   showForm=false;
   isLoading = false;
   level=0;
  constructor(private router: Router,private gitLabService: GitLabService,private dbService: DBService) {}
  ngOnInit() {
    this.parents=new Stack<DBFolderModel[]>;
    this.displayedColumns= ["icon",'Name', 'Size', 'Type', 'LastModified','Options'];
    this.childrendisplayedColumns=["name"];
    this.backIcon='history';
    this.loadData();
  }
  loadData(){
    this.isLoading=true;
    this.dbService.getFiles().subscribe((componentList) =>{
      this.dataSource.data=componentList;
      this.isLoading=false;
  }); 
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource!.paginator = this.paginator;
  }

  inside(parentID:string){
    this.parents!.push(this.dataSource!.data);
    this.level+=1;
    if (this.level==2){
      this.displayedColumns= ["icon",'Name','version','revision','LastModified','Options'];
    }
    else {
      this.displayedColumns= ["icon",'Name', 'Size', 'Type', 'LastModified','Options'];
    }
    if (this.level>=3){
      this.dbService.getChildrenFolders(parentID).subscribe((childList)=>{
        this.childrendataSource.data=childList;
      });
    }
    this.backIcon="keyboard_backspace"
    this.dataSource.data=[]
    this.isLoading=true;
    this.dbService.getFilesInsideParent(parentID).subscribe((componentList) =>{
      this.dataSource.data=componentList;
      this.isLoading=false;
  }); 
  }
  backFrom(){
    this.level-=1;
    if (this.parents!.isEmpty()){
      this.goToHistory(0);
    }
    else{
      if (this.level==2){
        this.displayedColumns= ["icon",'Name','version','revision','LastModified','Options'];
      }
      else {
        this.displayedColumns= ["icon",'Name', 'Size', 'Type', 'LastModified','Options'];
      }
      this.dataSource.data=this.parents!.pop()!;
      if(this.parents!.isEmpty()){
        this.backIcon='history';
      }
    }
  }

  goToHistory(id:number) {
    this.router.navigate(["/history"] ,{ state: { theID: id } });
  }

  
  printGitlab(){
      this.gitLabService.getCommits("45538356").subscribe((commitList) =>{
       for(var i=0;i<commitList.length;i++){
          console.log(commitList[i].id)
       }
   }); 
  }
  createAccount(name:FormControl,gender:FormControl,desc:FormControl,session:FormControl,data:any){
    if (name.valid && gender.valid && desc.valid && session.valid){
      var account = {
        "name": name.value,
        "description": desc.value,
        "gender":gender.value,
        "session":session.value,
    };
    this.dbService.sendAccountInfo(account)
        .subscribe((response)=>{
         if (response){
          alert("account created successfully\n " +JSON.stringify(account))

         }
         else{
          alert("account not created")
         }
        })
    }
  }
  getIcon(element : DBFolderModel):String{
    let icon='<img src="./assets/file.png" alt="file">';
    if (element.isFolder){
      icon ='<img src="./assets/folder.png" alt="folder">';
      if (this.level==2) {
        icon = '<img src="./assets/component.png" alt="component">';
        if (element.isActive) {
          icon = '<img src="./assets/active.png" alt="active">';
        }
     }
    }
    return icon;
  }
  formVisibility(){
    this.showForm= !this.showForm;
  }
}
