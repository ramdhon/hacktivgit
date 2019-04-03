# hacktivgit app
HACKTIVGIT API built with Express and Axios

List of user routes:
| Route                     | HTTP   | Description                        |
|---------------------------|--------|------------------------------------|
| /users                    | GET    | Get all authenticated user's repos |
| /users                    | POST   | Created authenticated user's repo  |
| /users/:owner/:repoName   | DELETE | Delete specific repo by auth user  |
| /users/starred            | GET    | Get all starred auth user's repos  |
| /users/starred            | POST   | Search spec starred repo           |
| /users/:owner/repos       | GET    | Get all an user's repos            |
| /staring/:owner/:repoName | GET    | Staring repo (redirected)          |
| /staring/:owner/:repoName | PUT    | Star repo                          |
| /staring/:owner/:repoName | DELETE | Unstar repo                        |


## Usage
Make sure you have Node.js and npm installed in your computer and then run these commands:
```console
$ npm install
$ npm start
```

Access the API via `http://localhost:3000/users`