import { Component, OnInit , Input } from '@angular/core';
import *  as DecoupledDocumentEditor from '../../../external-modules/ckeditor';
import { Router ,ActivatedRoute , Params } from '@angular/router';



@Component({
  selector: 'app-document-data-page',
  templateUrl: './document-data-page.component.html',
  styleUrls: ['./document-data-page.component.css']
})

export class DocumentDataPageComponent implements OnInit { 

    @Input() public placeHolders:any[] = [] ;
    rows = [];
    templateHtml: string;

   // columns = [{ prop: 'S.No:' }, { name: 'Gender' }, { name: 'Company', sortable: false }];

   columns: any[]=[];
    
    constructor(private router: Router,private activatedRoute: ActivatedRoute) { 

        this.activatedRoute.queryParams.subscribe(params => {
            const data = params['data'];
            console.log("---->>>>"+data);
            this.placeHolders=data;
            this.templateHtml = params['template'];
          });  
        console.log("----"+this.placeHolders);
        this.columns[0] = { prop: 'id'};
        this.placeHolders.forEach((value,index) => {
            this.columns[index+1] = {"name": value};
        });
        
        // rows
        this.rows = [
            { id: 1, name: 'Austin', gender: 'Male', company: 'Swimlane' , city: 'hyd' },
            { id: 2, name: 'Dany', gender: 'Male', company: 'KFC' , city: 'kolkata'},
            { id: 3, name: 'Molly', gender: 'Female', company: 'Burger King' , city: 'Delhi'}
            ];
    }
    
    public submit() {
        console.log('---- submit-generate ---');
        this.router.navigate(['/document/generate'],{ queryParams: { data: JSON.stringify(this.rows) , template : this.templateHtml} });
      }
    
    
      prev() {
          this.router.navigate(['/document/template']);
      }
    
    

    /**
     * This is Overrided method for OnInit
     */
    ngOnInit() {
    }
}