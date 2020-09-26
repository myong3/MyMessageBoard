import { Component } from '@angular/core';
import { MessageModel } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyMessageBoard';
  name = '';
  content = '';

  messages = new Array<MessageModel>();
  // 等同 messages: MessageModel[] = [];

  SendMessage() {
    const messagemodel = new MessageModel(this.name, this.content);

    this.messages.push(messagemodel);
  }
}
