Restaurant Order Management System
This project is a simple web application for managing orders in a restaurant. It allows users to input the details of a dish order, such as the price, name of the dish, and table number, and displays the orders categorized by table number. Users can also delete orders from the system.

Features
Input form for adding new orders.
Display of orders categorized by table number.
Delete functionality for removing orders from the system.
Integration with a CRUD API for storing and retrieving order data.
Technologies Used
HTML
CSS (not included in this code snippet)
JavaScript
Axios for making HTTP requests
CRUD API (https://crudcrud.com/) for data storage
Usage
Clone the repository.
Open the index.html file in a web browser.
How It Works
The user fills out the order form with the price, name of the dish, and table number.
Upon submission of the form, an HTTP POST request is sent to the CRUD API to store the order data.
The order is then displayed in the corresponding table section based on its table number.
Each order is accompanied by a delete button. When clicked, it sends an HTTP DELETE request to the API to remove the order from the system.
Upon loading the page, existing orders are retrieved from the API and displayed accordingly.
