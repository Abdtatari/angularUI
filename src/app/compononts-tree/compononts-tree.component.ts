import { Component } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface projects {
  Name: string;
  Size: number;
  Type: string;
  LastModified: string;
  setting:string;
  childern:projects[];
}

const TREE_DATA: projects[] = [
  {
    Name: 'Fruit',
    Size:212,
    Type:"hu",
    LastModified:"settings",
    setting:'ddasa',
    childern:[
      {
        Name: 'Fruit',
        Size:212,
        Type:"hu",
        LastModified:"settings",
        setting:'ddasa',
        childern:[ 
          {
            Name: 'Fr212`uit',
            Size:212121,
            Type:"h21u",
            LastModified:"settings",
            setting:'ddd',
            childern:[ 
              {
                Name: 'Fr212`uit',
                Size:212121,
                Type:"h21u",
                LastModified:"settings",
                setting:'ddd',
                childern:[ 
                  {
                    Name: 'Fr212`uit',
                    Size:212121,
                    Type:"h21u",
                    LastModified:"settings",
                    setting:'ddd',
                    childern:[ 
                      {
                        Name: 'Fr212`uit',
                        Size:212121,
                        Type:"h21u",
                        LastModified:"settings",
                        setting:'ddd',
                        childern:[ 
              
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    Name: 'Fruit2',
    Size:212132,
    Type:"hvaxsau",
    LastModified:"settings2",
    setting:'ddaxsassa',
    childern:[
      {
        Name: 'Fr212`uit',
        Size:212121,
        Type:"h21u",
        LastModified:"settings",
        setting:'ddd',
        childern:[ 
        ]
      },
      {
        Name: 'Fr212`uit',
        Size:212121,
        Type:"h21u",
        LastModified:"settings",
        setting:'ddd',
        childern:[ 
        ]
      },
      {
        Name: 'Fr212`uit',
        Size:212121,
        Type:"h21u",
        LastModified:"settings",
        setting:'ddd',
        childern:[ 
          {
            Name: 'Fr212`uit',
            Size:212121,
            Type:"h21u",
            LastModified:"settings",
            setting:'ddd',
            childern:[ 
            ]
          },
          {
            Name: 'Fr212`uit',
            Size:212121,
            Type:"h21u",
            LastModified:"settings",
            setting:'ddd',
            childern:[ 
            ]
          }
        ]
      }
    ]
  },
];
@Component({
  selector: 'app-compononts-tree',
  templateUrl: './compononts-tree.component.html',
  styleUrls: ['./compononts-tree.component.css']
})
export class ComponontsTreeComponent {
  treeControl = new NestedTreeControl<projects>(node => node.childern);
  dataSource = new MatTreeNestedDataSource<projects>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: projects) => !!node.childern && node.childern.length > 0;
}
