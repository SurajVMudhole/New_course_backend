const EventEmitter = require("events");
class UserEvents extends EventEmitter {
  CreatePost(content) {
    console.log("Post is created");
    this.emit("postCreated");
  }
}
