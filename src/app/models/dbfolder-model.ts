export class DBFolderModel {
    id:number=-1;
    time:string="";
    user:string="";
    component:string="";
    version:string="";
    revision :string="";
    diff :string="";
    name=""
    size: number=0;
    type: string="";
    lastModified: string="";
    isFolder:boolean=false;
    isActive:boolean=false;
    
    constructor(){}
    toString(){
        return `id:${this.id}\n 
        time:${this.time}\n
        user:${this.user}\n
        component:${this.component}\n
        version:${this.version}\n
        revision:${this.revision}\n
        diff:${this.diff}\n
        `
    }
}
