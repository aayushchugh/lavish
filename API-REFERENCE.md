<h1 align='center'>API Reference</h1>

<div style='color: orangered; font-weight: bold; border: 2px solid orangered;' align='center'>⚠️ Api key should be in `Authorization` header in every request</div>

<h1 align='center'>Auth</h1>

<h2>Signup</h2>

```http
  GET /api/auth/signup
```

<h2>Request</h2>

| Body        | Description                      |
| :---------- | :------------------------------- |
| `fname`     | **Required**. First name of user |
| `lname`     | **Required**. Last name of user  |
| `email`     | **Required**. Email of user      |
| `password`  | **Required**. Password of user   |
| `cpassword` | **Required**. Confirm password   |

<h3>Response</h3>

| Status | Message                                                          | Data          |
| :----- | :--------------------------------------------------------------- | :------------ |
| `400`  | fname, lname, email, password, cpassword every field is required | -             |
| `400`  | Password and Confirm Password do not match                       | -             |
| `409`  | User already exists                                              | -             |
| `201`  | User created successfully                                        | user object   |
| `500`  | Internal server error                                            | error message |
