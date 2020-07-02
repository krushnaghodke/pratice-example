import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
      .online{
        color: white;
      }
  `]
})

export class ServerComponent{
  username = '';
  serverName = '';
  text = false;
  isUserCreated = false;
  serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  servers = ['server 1', 'server 2', 'server 3', 'server 4'];
  log = [];

  onUserNameUpdate(event: Event){
    return this.username = (<HTMLInputElement>event.target).value;
  }

  onFormButtonClick(){
    this.isUserCreated = true;
   // this.username = '';
  }

  onCreateServer(){
    this.servers.push(this.serverName);
  }
  getColor(){
    return this.serverStatus == 'online' ? 'green' : 'red';
  }

  ontoggleStatus(){
    this.text = !this.text;
    console.log(this.log);
    this.log.push(new Date());
  }

}


