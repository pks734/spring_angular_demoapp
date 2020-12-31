import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromService = '';
  constructor(private route:ActivatedRoute, private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];

  }
  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSucessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSucessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }


  handleSucessfulResponse(response: HelloWorldBean){
    this.welcomeMessageFromService = response.message;
    //console.log(response);
    //console.log(response.message);
  }
  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message;
  }

}
 