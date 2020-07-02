import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent{
  username = '';

  onUserNameUpdate(event: Event){
    return this.username = (<HTMLInputElement>event.target).value;
  }

  onFormButtonClick(){
    this.username = '';
  }
}


