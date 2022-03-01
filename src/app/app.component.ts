import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  redColor = false;
  headerTag='h4';
  ngModelText = '';
  condition = false;
  displayText=true;

  numbers = [ ...Array(10).keys() ];

  currentStyles = {
    'font-style':  'italic',
    'font-size':   '24px',
  };

  title = 'directives-example';

}
