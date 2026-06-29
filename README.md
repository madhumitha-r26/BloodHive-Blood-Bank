Since your project also includes a **React Admin Login Interface**, the README should describe both the **backend API** and the **frontend admin panel**.

---

# 🩸 Blood Donor Management System

A full-stack **Blood Donor Management System** built using **React, Node.js, Express, and MongoDB**. The application allows users to register as blood donors, search donors by blood group, and enables administrators to manage donor records through a secure admin dashboard.

---

## 🚀 Features

### 👥 Donor Management

* Register new blood donors.
* Prevent duplicate donor registrations using email validation.
* View all registered donors.
* Filter donors by blood group.
* Delete donor records.

### 🔐 Admin Authentication

* Admin login interface built with React.
* Credential-based authentication.
* Protected access to the admin dashboard.
* Redirects authenticated administrators to the dashboard.

### 🌐 User-Friendly Interface

* Responsive frontend built with React.
* Modern UI components using Material UI icons.
* Interactive forms and modal-based login system.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Material UI Icons
* Tailwind CSS / DaisyUI

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📂 Features Overview

### 🩸 Donor Registration

Allows users to register as blood donors by submitting their information.

* Stores donor details in MongoDB.
* Checks for duplicate email registrations.
* Returns success/error responses.

### 🔍 Donor Search

Users can search donors based on blood group.

Supported filtering:

```http
GET /donors?blood_group=A+
```

### ❌ Donor Deletion

Administrators can remove donor records from the database.

```http
DELETE /donors/:id
```

### 🔐 Admin Login

The system includes an admin login modal implemented in React.

**Default Credentials**

```text
Email: admin@gmail.com
Password: admin123
```

Upon successful authentication:

```text
/dashboard
```

is opened for donor management.

---

## 📂 API Endpoints

### Register Donor

```http
POST /register
```

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "blood_group": "A+",
  "phone": "9876543210"
}
```

#### Response

```json
{
  "message": "Donor registered successfully"
}
```

---

### Get Donors

Retrieve all donors:

```http
GET /donors
```

Filter by blood group:

```http
GET /donors?blood_group=O+
```

---

### Delete Donor

```http
DELETE /donors/:id
```

Example:

```http
DELETE /donors/65f123456789
```

---


## ▶️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd Blood-Donor-Management-System
```

---

### Backend Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Start backend server:

```bash
npm start
```

---

### Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run React application:

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:5173
```

---

## 🔄 Application Workflow

1. User registers as a blood donor.
2. Donor information is stored in MongoDB.
3. Users search donors based on blood group.
4. Administrator logs in using admin credentials.
5. Admin accesses the dashboard.
6. Admin views and manages donor records.
7. Admin can delete outdated donor entries.

---

## 🔮 Future Enhancements

* JWT Authentication
* Role-Based Access Control
* Update Donor Information
* Search Donors by Location
* Blood Request Module
* Email/SMS Notifications
* Dashboard Analytics
* Mobile Responsive Enhancements

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Madhu**

Built using **React, Node.js, Express, and MongoDB** to simplify blood donor registration, donor search, and administrative management.
