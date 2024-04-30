Restaurant Order Management System 🍽️ 


This project implements a simple web-based order management system for a restaurant. It allows users to input orders for different tables and view them in real-time. Additionally, users can delete orders from each table.

Technologies Used:

HTML: Provides the structure of the web page.

CSS: Styles the HTML elements for better presentation (not included in the provided code snippet).

JavaScript: Handles the dynamic behavior of the webpage, including order submission and deletion.

Axios: A promise-based HTTP client for making AJAX requests, used here for communicating with a RESTful API.

CRUD CRUD API: A mock API service used for storing order data.


Key Features:
Order Submission: Users can input the price and name of a dish, along with selecting the table number for the order. On submission, the order is added to the respective table's list.

Real-time Updates: Upon submission, the order is immediately added to the corresponding table's list without the need for page refresh.

Order Deletion: Each order entry includes a delete button. Clicking this button removes the order from the table's list and also deletes it from the server.

Data Persistence: Order data is stored in a mock API provided by CRUD CRUD, ensuring data persistence even after page reloads.


How to Use:

Clone the repository to your local machine.

Open the index.html file in a web browser.

Fill in the order details (dish price, name, and table number) and click "Add to bill" to submit the order.

To delete an order, click the "delete" button next to the respective order entry.



Additional Notes:

The provided code uses event listeners to handle form submission and deletion, ensuring a smooth user experience.

Upon page load, existing orders are fetched from the server and displayed accordingly using the window.addEventListener('DOMContentLoaded') function.
Contributing:

Contributions to this project are welcome! Feel free to fork the repository, make changes, and submit pull requests.


