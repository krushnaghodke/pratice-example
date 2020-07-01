import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent{
   serverId = 10;
   serverStatus = 'Online';

   getServerStatus(){
     return this.serverStatus;
   }
   allowCreateServer = false;
   constructor() {
     setTimeout(() => {
       this.allowCreateServer = true;
     },2000);
   }

   serverCreateMessage = 'No server created';

   onServerCreate(){
     this.serverCreateMessage = 'Server created';
   }
}
