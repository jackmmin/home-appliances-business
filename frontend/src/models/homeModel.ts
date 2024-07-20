export class HomeModel {
    public message: string;
  
    constructor() {
      this.message = "Hello, TypeScript MVC!";
    }
  
    public getMessage(): string {
      return this.message;
    }
  }
  