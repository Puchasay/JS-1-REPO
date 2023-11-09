//Object literals, key value pair (name & crystal), better to write the key with camel case previousOwner
//or snake case previous_owner as a key on object, best is with snake case, coz writing like this wont work previous-owner

let user = {
  name: "crystal",
  age: 27,
  email: "crystalmain@gmail.com",
  blogs: [
    { title: "10 things to do in Bali", likes: 300 },
    { title: "best recipes of banana cakes", likes: 200 },
  ],
  login: function () {
    //login is an object method same thing like string method name.toUpperCase()
    console.log("The user logged in");
  },
  logout: function () {
    console.log("The user logged out");
  },
  logBlogs() {
    this.blogs.forEach((blog) => {
      console.log(`The blog with title: ${blog.title} has ${blog.likes} likes`);
    });
  },
  /* logBlogs() {
    //We can write like this also: logBlogs() {
    //console.log(this.blogs);
    console.log("This user have 2 blogs:");
    this.blogs.forEach((blog) => {
      //this.blogs is an array, then blog is parameter
      console.log(blog);
    }); //this refers to user object
  }, */
};

user.logBlogs();
//name is key  & "crystal" is value. name & crystal we call it as properties

//You can invoke the login by or calling this method by, then it will log the console on rad 10 :
user.login();

console.log(user);
console.log(user.name); //it returns crystal

//wanna rewrite the properties
user.age = 35;
console.log(user.age);

//bisa juga tulis begini:
console.log(user["name"]); //it returns crystal  or rewerite like this:

user["name"] = "Tomjerry";

console.log(typeof user); //it returns Object
