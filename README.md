# 📌 BankApp - Installation & Setup Guide

## 🚀 Live Angular Project
✅ **Open the live Angular project on Vercel:**  
🔗 [Click here to access BankApp Client](https://bank-app-client.vercel.app/)

## 🛠️ Clone .NET Backend Repository
✅ **Clone the BankApp .NET Backend repository:**  
🔗 [Click here to clone BankApp Backend](https://github.com/gautamjain572/BankApp-Client)

```sh
git clone https://github.com/gautamjain572/BankApp-Client.git
cd BankApp-Client
```

## 🏦 Setup Database in SQL Server
✅ **Create a new database in SQL Server** and run the required commands:  
🔗 [Click here to access SQL commands & stored procedures](https://github.com/gautamjain572/SQL-Server-Management-Studio/blob/main/BankApp%20DummyData.sql)

### Steps:
1. Open **SQL Server Management Studio (SSMS)**
2. Create a new database named `BankApp`
3. Execute all SQL commands and stored procedures from the above link

## 🔧 Configure Connection Strings
✅ **Update Connection Strings in .NET project:**
1. Open **appsettings.json** in the .NET project
2. Replace the default connection string with your own SQL Server details

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=BankApp;Trusted_Connection=True;"
}
```

✅ **You're all set! 🎉 Now, run the .NET backend and start testing the API.** 🚀
