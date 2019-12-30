# Task 2

To start the project use - `npm run dev`.  
To fix eslint issus use - `npm run lint`.

To get all the users use endpoint - `/` with `GET` method.  
To get exact user use - `/get/:id` with 'GET' method. Where `:id` is id of a user (for example 'wow' or 'hey').  
To create a user use - `/create` endpoint with 'POST' method. Send user information (object with id, login, password, age, isDeselected fields) via `application/json` in request body.  
To update a user use - `/update` endpoint with 'PUT' method. Send user information (object with id, login, password, age, isDeselected fields) via `application/json` in request body.  
To delete a user use - `/delete/:id` with 'DELETE' method. Where `:id` is id of a user (for example 'wow' or 'hey').
