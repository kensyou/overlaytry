import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-preview-overlay',
  template: `
    <h1>
      file-preview-overlay works!
    </h1>
  `,
  styles: [`    :host {
    display: block;
    background: white;
  }

  h1 {
    margin: 0;
    padding: 1em;
  }`]
})
export class FilePreviewOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
