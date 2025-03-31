# E-com-springboot-project
# E-Commerce Spring Boot Project

## 📌 Project Overview
This is a full-stack **E-Commerce Web Application** built using **Spring Boot** for the backend and **React.js** for the frontend. The project allows users to browse products, add items to their cart, and proceed with secure checkout.

## 🛠️ Tech Stack
### **Backend**
- Java (Spring Boot)
- Spring MVC
- Spring Data JPA (Hibernate)
- Spring Security (JWT Authentication)
- MySQL (Database)
- Maven (Dependency Management)

### **Frontend**
- React.js
- Redux (State Management)
- Tailwind CSS / Bootstrap
- Axios (API Calls)

## 🎯 Features
- 🛍️ **User Authentication** (JWT-based login & signup)
- 📦 **Product Management** (CRUD operations)
- 🛒 **Shopping Cart & Checkout**
- 💳 **Payment Integration** (Razorpay/Stripe - Future Enhancement)
- ⚡ **Admin Dashboard** (Manage products, orders, and users)
- 🔍 **Search & Filters** (Category-based browsing)

## 🚀 Installation & Setup
### **Clone the Repository**
```sh
git clone https://github.com/raguramkumar2003/E-com-springboot-project.git
cd E-com-springboot-project
```

### **Backend Setup**
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies and run the server:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```
3. Application will start at: `http://localhost:8080`

### **Frontend Setup**
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies and run the React app:
   ```sh
   npm install
   npm start
   ```
3. Open `http://localhost:3000` in your browser.

## 📜 API Endpoints
| Method | Endpoint          | Description         |
|--------|------------------|---------------------|
| GET    | `/products`      | Get all products   |
| POST   | `/cart/add`      | Add to cart        |
| POST   | `/user/register` | Register user      |
| POST   | `/user/login`    | User authentication |

## 👨‍💻 Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added a new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## 📄 License
This project is **MIT Licensed**.

---
📢 **Need Help?** Feel free to contact me at [raguramkumar2003@gmail.com](mailto:raguramkumar2003@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/raguramkumar2003).

