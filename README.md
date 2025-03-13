# ✨ BankApp - Angular & .NET 7 Integration ✨

BankApp is a web-based banking system built using **Angular 12** for the frontend and **.NET 7** for the backend. It allows users to manage banks, create accounts, deposit, and withdraw money securely. 🏦💳

## Features ✨

✅ **Bank Management** - Add and view banks.  
✅ **Account Management** - Create and view accounts.  
✅ **Deposit Money** - Deposit funds securely.  
✅ **Withdraw Money** - Withdraw funds with ATM authentication.  
✅ **Bootstrap UI** - Clean and responsive design.  
✅ **Reactive Forms & Validation** - Ensures correct data entry.  
✅ **REST API Integration** - Connected with .NET 7 backend.

## Technologies Used 🛠️

- **Frontend:** Angular 12, TypeScript, Bootstrap  
- **Backend:** .NET 7, C#, Entity Framework  
- **Database:** SQL Server  
- **HTTP Client:** Angular HttpClient for API communication  

## Installation & Setup 🚀

### Prerequisites 📌
- Node.js & Angular CLI installed  
- .NET 7 SDK installed  
- SQL Server database setup  

### Steps to Run the Project 🏃‍♂️

1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/your-repo/bankapp.git
cd bankapp
```

2️⃣ **Install Dependencies**  
```sh
npm install
```

3️⃣ **Run Angular App**  
```sh
ng serve
```

4️⃣ **Run .NET Backend**  
```sh
dotnet run
```

5️⃣ **Open the App** in Browser 🌐
```
http://localhost:4200
```

## Folder Structure 📂
```
BankApp/
│-- src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── add-bank/
│   │   │   ├── get-banks/
│   │   │   ├── create-account/
│   │   │   ├── get-accounts/
│   │   │   ├── deposit/
│   │   │   ├── withdraw/
│   │   ├── services/
│   │   │   ├── bank.service.ts
│   │   │   ├── account.service.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   ├── assets/
│   ├── environments/
│-- backend/
│   ├── Controllers/
│   │   ├── BankController.cs
│   │   ├── AccountController.cs
│   ├── Models/
│   ├── Services/
│   ├── Program.cs
│   ├── appsettings.json
│-- README.md
```

## API Endpoints 🔗

### Bank API 🏦
- **Add Bank:** `POST /api/Bank/Add-Bank`
- **Get Banks:** `GET /api/Bank/Get-All-Banks`

### Account API 👤
- **Create Account:** `POST /api/Account/Add-AccountHolders-details`
- **Get Accounts:** `GET /api/Account/Get-AccountHolders-details`

### Transactions API 💰
- **Deposit:** `POST /api/Account/Deposit-Amount`
- **Withdraw:** `POST /api/Account/Withdraw-Amount`

## Author ✍️
- **Gautam Jain**  
- 🔗 [LinkedIn]((https://www.linkedin.com/in/gautamjain572/))

---

🚀 **Happy Coding!** 🎉

