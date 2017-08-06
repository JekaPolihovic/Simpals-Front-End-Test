import posts from "./../resources/posts.json";

// API Posts static class
export default class ApiPosts {
  // get a list of posts
  static getList() {
    return posts.collection
  }
}
