# 🧑‍💼 Employee Management Frontend

This is the frontend part of the Employee Management System built with **React + Vite**, designed to work alongside the backend service. The UI supports full CRUD operations on employee records and is containerized for deployment.

---

## 📌 Overview

- **Frontend:** React (Vite)  
- **Backend:** A Spring Boot service (separate repo)  
- Designed for rapid development with an in-memory H2 DB (in backend) and ready for production DB like PostgreSQL.  
- Containerized via Docker for scalable deployment.

---

## 🧩 Features

- View list of all employees  
- Add new employees  
- Edit existing employee details  
- Delete employees  
- Responsive UI built with modern React and Vite  
- Integration with backend REST API endpoints  

---

## 🔧 Tech Stack

- React (Vite)  
- Axios (or Fetch) for API communication  
- CSS / UI library of your choice  
- Docker (for building and deploying the frontend)  
- Versioning via Git & GitHub  

---

## 📂 Getting Started

### Prerequisites  
- Node.js (v16+ recommended)  
- npm or yarn  
- Clone of backend repo and it running (or hosted)  

### Run Locally  
```bash
git clone https://github.com/wroxtaaar/employee-frontend.git
cd employee-frontend
npm install
npm run dev
