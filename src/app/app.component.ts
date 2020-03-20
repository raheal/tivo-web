import { Component, OnInit } from '@angular/core';
import { WebSocketAPI } from './WebSocketAPI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tivo-download-service-web';

  webSocketAPI: WebSocketAPI;
  message: any;
  name: string;
  
  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new AppComponent());
    //- temporarily removed until the CORS issue is fixed -> this.webSocketAPI._connect();
  }
  
  connect(){
    this.webSocketAPI._connect();
  }
  
  disconnect(){
    this.webSocketAPI._disconnect();
  }
  
  sendMessage(){
    this.webSocketAPI._send(this.name);
  }
  
  handleMessage(message){
    this.message = message;
  }









}



