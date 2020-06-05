import { Component, OnInit , Input } from '@angular/core';
import *  as DecoupledDocumentEditor from '../../../external-modules/ckeditor';
import { Router ,ActivatedRoute , Params } from '@angular/router';
import * as  Mustache  from 'mustache';

@Component({
  selector: 'app-document-generate-page',
  templateUrl: './document-generate-page.component.html',
  styleUrls: ['./document-generate-page.component.css']
})

export class DocumentGeneratePageComponent implements OnInit { 

    public Editor = DecoupledDocumentEditor;
    templateHtml: string;
    placeholderValues: any[];

    finalDocs: string[] = [];
    finalHtml: string;

    public model = {
        content: '<p>Loading..</p>',
      };

    constructor(private router: Router,private activatedRoute: ActivatedRoute) { 

        this.activatedRoute.queryParams.subscribe(params => {
            const data = params['data']; 
            console.log("Final---->>>>"+data);
            const template = params['template'];
            console.log("Final---->>>>"+template);
            this.templateHtml = template;
            this.placeholderValues = JSON.parse(data);
          });
          
          
          console.log(this.placeholderValues[0].name);
          var output = Mustache.render(this.templateHtml.replace(/placeholder/g,"placeholder1"),this.placeholderValues[0]);
          console.log(output);
          this.model.content = output;

          var html = "";
          this.placeholderValues.forEach ((value,index) => {
            var out = Mustache.render(this.templateHtml.replace(/placeholder/g,"placeholder1"),value);
            if(index == 0) html = out ;
            else html = html + ' <div class="page-break" style="page-break-after:always;"><span style="display:none;">&nbsp;</span></div><p>&nbsp;</p><p>&nbsp;</p> ' + out;
          });

          this.finalHtml = html;

          this.buildCkeditor();
         
    }

    submit() {
        Mustache.render();
    }

    
    prev() {
        this.router.navigate(['/document/data']);
    }
    

    /**
     * This is Overrided method for OnInit
     */
    ngOnInit() {
    }

    buildCkeditor() {
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
            '|'
          ],
        
            // This value must be kept in sync with the language defined in webpack.config.js.
            language: 'en'
        };
    }

    public onReady( editor ) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }
}