<h1 align='center'>API Reference</h1>

<h1 align='center'>Auth</h1>

<h2>Signup</h2>

```http
  POST /api/auth/signup
```

<h3>Request</h3>

| Body        | Description                      |
| :---------- | :------------------------------- |
| `fname`     | **Required**. First name of user |
| `lname`     | **Required**. Last name of user  |
| `email`     | **Required**. Email of user      |
| `password`  | **Required**. Password of user   |
| `cpassword` | **Required**. Confirm password   |

<h3>Response</h3>

| Status | Message                                                          | Data                |
| :----- | :--------------------------------------------------------------- | :------------------ |
| `400`  | fname, lname, email, password, cpassword every field is required | -                   |
| `400`  | Password and Confirm Password do not match                       | -                   |
| `409`  | User already exists                                              | -                   |
| `201`  | User created successfully                                        | user object + token |
| `500`  | Internal server error                                            | error message       |

<h2>Login</h2>

```http
  POST /api/auth/login
```

<h3>Request</h3>

| Body       | Description                    |
| :--------- | :----------------------------- |
| `email`    | **Required**. Email of user    |
| `password` | **Required**. Password of user |

<h3>Response</h3>

| Status | Message                      | Data                |
| :----- | :--------------------------- | :------------------ |
| `400`  | email, password are required | -                   |
| `404`  | User not found please signup | -                   |
| `401`  | Invalid credentials          | -                   |
| `200`  | User logged in successfully  | user object + token |
| `500`  | Internal server error        | error message       |
