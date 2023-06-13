import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { DBService } from '../services/database/db.service';
import { GitLabService } from '../services/gitAPI/git-lab.service';
import { Location } from '@angular/common';

export interface historyModel {
  time: Date;
  user: string;
  Component: string;
  Version: string;
  id:number;
  Revision:string;
  Extra:string;
  url:string;
  actionName:string;
}
export interface urlParm {
  theID:number;
  navigationId:string;
}
const ELEMENT_DATA: historyModel[] = [];
@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css']
})

export class HistoryTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['time', 'user', 'Component', 'Version','Revision','actionName'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  isLoading = false;
  id=0;
  constructor(private location: Location,private _liveAnnouncer: LiveAnnouncer,private gitLabService: GitLabService,private dbService: DBService) {
    this.id = (location.getState() as urlParm).theID;
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.isLoading=true;
    this.dbService.getComponentHistory(this.id.toString()).subscribe((history) =>{
      this.dataSource.data=history;
      this.isLoading=false;
  }); 
  }
  ngAfterViewInit() {
    this.dataSource!.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.Component.toLowerCase().includes(filter) || data.user.toLowerCase().includes(filter)|| data.Version.toLowerCase().includes(filter)||data.Revision.toLowerCase().includes(filter)||data.actionName.toLowerCase().replace("_"," ").includes(filter);
    };
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
