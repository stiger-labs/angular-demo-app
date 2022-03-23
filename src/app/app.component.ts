import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AWSomeness cooking up';
  randomFact = '...';
  result:any;

  constructor(private appService: AppService) {}

  ngOnInit() {

    this.appService.getFact().subscribe(
      result => {
        this.result = result;
        this.randomFact = this.result.text;
      }
    )

  }

}
