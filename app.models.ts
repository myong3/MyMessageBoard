export class MessageModel {
  name: string;
  content: string;
  time: string;

  constructor(name: string, content: string) {
    this.name = name;
    this.content = content;
    this.time = new Date().toString();
  }
}
