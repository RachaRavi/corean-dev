import { Component, OnInit , Input } from '@angular/core';
import *  as DecoupledDocumentEditor from '../../../external-modules/ckeditor';
import { Router ,ActivatedRoute , Params } from '@angular/router';


@Component({
  selector: 'app-document-template-page',
  templateUrl: './document-template-page.component.html',
  styleUrls: ['./document-template-page.component.css']
})

export class DocumentTemplatePageComponent implements OnInit { 

    public Editor = DecoupledDocumentEditor;
    @Input() public placeHolders:any ;
    public model = {
        name: 'John',
        surname: 'Doe',
      description: '<p>Hello,</p><p>This is,</p><p>ok.</p>',
      };
    constructor(private router: Router,private activatedRoute: ActivatedRoute) { 
        this.activatedRoute.queryParams.subscribe(params => {
            const data = params['data'];
            console.log("---->>>>"+data);
            this.placeHolders=data;
          });  
        console.log("----"+this.placeHolders);
      DecoupledDocumentEditor.defaultConfig = {
        toolbar: [ 
        'exportPdf',
        '|',  
        'heading',
        '|',
        'fontSize',
        'fontFamily',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'highlight',
        '|',
        'alignment',
        '|',
        'numberedList',
        'bulletedList',
        '|',
        'indent',
        'outdent',
        '|',
        'todoList',
        'link',
        'blockQuote',
        'imageUpload',
        'insertTable',
        'mediaEmbed',
        '|',
        'undo',
        'redo',
        'pageBreak',
        '|',
        'placeholder'
      ],
    
        // This value must be kept in sync with the language defined in webpack.config.js.
        language: 'en',
        placeholderProps: {
          types: this.placeHolders,
          }
    };
  
    }
  
    ngOnInit() {
    }
  
    public submit() {
      console.log('---- submit ---');
      alert(this.model.description);
    }
  
  
    prev() {
        this.router.navigate(['/document']);
    }
  
    public onReady( editor ) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }

    /**
     * Next page
     */
    next() {
        console.log("document template --> next()");
        this.router.navigate(['/document/data'],{ queryParams: { data: this.placeHolders , template: this.model.description } } );
        //setTimeout(function() {    }.bind(this), 3000);
      }
  
}