# M03W07 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

1. plaintext passwords
2. plaintext cookies
3. plaintext protocol

<div></div>
<header>
<footer>


https://www.google.com/

http://localhost:9876/login

Man in the Middle (MitM)
Monster in the Middle

HTTPS HTTP Secure

### Hashing
* one way process
* plaintext password => hashing algo => random generated string (hash)
* bcrypt => blowfish cipher
* rainbow table attack
* salt => a randomly generated string that is added to the password before hashing
* plaintext password + salt => hashing algo => random generated string (hash)

### Encryption
* two way process
* encrypt, decrypt
* cookie-session middleware

* request
* encrypted cookie => cookie-session decrypt => plaintext cookie
* response
* set plaintext cookie => cookie-session encrypt => encrypted cookie


```js
// setting a cookie
res.cookie('cookieName', 'cookieValue');
req.session.cookieName = 'cookieValue';

// reading a cookie
req.cookies.cookieName;
req.session.cookieName;

// clearing cookies
res.clearCookie('cookieName');
req.session.cookieName = null; // clear only that cookie
req.session = null; // clear all cookies
```

### Asymmetric Encryption
* public key => available to everybody
* private key => decrypt the information

### REST
* REpresentational State Transfer
* RESTful architecture
* naming convention for routes
* all resources are plural
* actions are singular

POST /login
POST /logout

GET /all-the-something-elses
POST /create-a-new-something-else

Browse  GET   /dinosaurs
Read    GET   /dinosaurs/:id
Edit    POST  /dinosaurs/:id
Add     POST  /dinosaurs
Delete  POST  /dinosaurs/:id/delete

Browse  GET     /dinosaurs
Read    GET     /dinosaurs/:id
Edit    PATCH   /dinosaurs/:id
Add     POST    /dinosaurs
Delete  DELETE  /dinosaurs/:id

### More Methods
* PUT => replace a resource completely
* PATCH => replaces a piece of a resource
* DELETE => deletes a resource

AJAX

app.delete()

req.method === req.query._method
?_method=PUT

app.put

