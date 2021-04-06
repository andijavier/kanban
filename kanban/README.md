# kanban-server
server API for  site to implement agile and DevOps software development.

# My Kanban App Server
My Kanban App is an application to manage your Project. This app has : 
* RESTful endpoint for Kanban's CRUD operation
* JSON formatted response
&nbsp;
## RESTful endpoints
### POST /register
> Post/Create an account
_Request Header_
```
not needed
```
_Request Body_
```
{
  "email": "<your-email>",
  "password": "<your-password>",
  "username": "<your-username>",
  "organization": "<your-organization>"
}
```
_Response (201)_
```
{
  "id": "<your-id>",
  "username": "<your-username>".
  "email": "<your-email>",
  "OrganizationId": "<your-OrganizationId>"
}
```
_Response (500)_
```
{
  "message": "<err.message>"
}
```

### POST /login
> Post login to an account
_Request Header_
```
not needed
```
_Request Body_
```
{
  "email": "<your-email>",
  "password": "<your-password>",
}
```
_Response (200)_
```
{
  "access_token": ""<your access token>"",
}
```
_Response (500)_
```
{
  "message": "<err.message>"
}
```

### POST /googlelogin
> Post login to a googleaccount
_Request Header_
```
not needed
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
  "access_token": ""<your access token>"",
}
```
_Response (500)_
```
{
  "message": "<err.message>"
}
```
### GET /taks
> Get all taks
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
not needed
```
_Response (200)_
```
[
  {
    "id": "<your-id>",
    "title": "<kanban's title>",
    "category": "<kanban's category>",
    "UserId": "<your UserId>",
    "OrganizationId": "<your OrganizationId>",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  },
  {
    "id": "<your-id>",
    "title": "<kanban's title>",
    "category": "<kanban's category>",
    "UserId": "<your UserId>",
    "OrganizationId": "<your OrganizationId>",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  }
]
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```

### GET /taks/:id
> Get taks by id
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
id=[integer]
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
  "id": "<your-id>",
  "title": "<kanban's title>",
  "category": "<kanban's category>",
  "UserId": "<your UserId>",
  "OrganizationId": "<your OrganizationId>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```

### POST /taks
> Post/create taks 
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
not needed
```
_Request Body_
```
{
  "title": "<kanban's title>",
  "category": "<kanban's category>",
}
```
_Response (200)_
```
{
  "id": "<your-id>",
  "title": "<kanban's title>",
  "category": "<kanban's category>",
  "UserId": "<your UserId>",
  "OrganizationId": "<your OrganizationId>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```
_Response (400 - Validation Error)_
```
[
  "<returned error message>"
]
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```

### PUT /taks/:id
> Put/replace taks by id
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
id=[integer]
```
_Request Body_
```
{
  "title": "<kanban's title>",
  "category": "<kanban's category>",
}
```
_Response (200)_
```
{
  "id": "<your-id>",
  "title": "<kanban's title>",
  "category": "<kanban's category>",
  "UserId": "<your UserId>",
  "OrganizationId": "<your OrganizationId>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```
_Response (400 - Validation Error)_
```
[
  "<returned error message>"
]
```
_Response (404 - not found)_
```
{
  "message": "not found"
}
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```

### PATCH /taks/:id
> Patch/modify taks by id
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
id=[integer]
```
_Request Body_
```
{
  "category": "<kanban's category>"
}
```
_Response (200)_
```
{
  "id": "<your-id>",
  "title": "<kanban's title>",
  "category": "<kanban's category>",
  "UserId": "<your UserId>",
  "OrganizationId": "<your OrganizationId>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```
_Response (400 - Validation Error)_
```
[
  "<returned error message>"
]
```
_Response (404 - not found)_
```
{
  "message": "not found"
}
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```

### DELETE /taks/:id
> Delete taks by id
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
id=[integer]
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
  "message": "task success to delete"
}
```
_Response (404 - not found)_
```
{
  "message": "not found"
}
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```