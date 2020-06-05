import { Component, OnInit } from '@angular/core';
import *  as DecoupledDocumentEditor from '../../../external-modules/ckeditor';



@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})

export class CreatePageComponent implements OnInit {
  public Editor = DecoupledDocumentEditor;
  public placeHolders = ["First Name", "Date","city"];
  public model = {
	  name: 'John',
	  surname: 'Doe',
    description: '<p>A <b>really</b> nice fellow...,,dddd</p>',
	};
  constructor() { 

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




  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

}
