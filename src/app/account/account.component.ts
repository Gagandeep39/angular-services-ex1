import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;  //Used to indetify this element when passing data back to parent 


  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status)
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
    console.log("Executed")
  }

  constructor(private loggingService : LoggingService, private accountsService : AccountsService){}
}
