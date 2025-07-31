# 💳 Credit Manager App

A centralized dashboard to monitor, track, and optimize multiple credit card accounts across different banks. Designed for personal finance nerds who want to stop jumping between apps and start making smarter spending decisions.

---

## 🚀 Features (MVP)

- **Unified Dashboard**: See all your credit cards in one place
- **Spending Overview**: Visual breakdown of total and per-card usage
- **Recurring Payments**: Track recurring transactions per card
- **Per-Card View**: Drill down into individual card spending and limits
- **Spending Summary**: Weekly/monthly overview across all cards

---

## 🔒 Planned Features (Future)

- 💡 Smart Card Suggestions: Use the best card for each category (gas, food, etc.)
- 📈 Credit Utilization Tips: Get recommendations for increasing your score
- 💼 Salary Tracker: Suggest credit limit increases when income rises
- 🔐 Premium Mode: Lock AI-powered features behind a subscription tier

---

## 🛠️ Tech Stack

### Backend
- Node.js + Express
- Supabase (PostgreSQL, Auth)
- dotenv

### Frontend
- LynxJS

### DevOps / Tools
- Docker (planned)
- GitHub
- VS Code

---

## 📦 Installation

### Prerequisites
- Node.js & npm
- Supabase account
- Git

### Clone & Setup

```bash
git clone https://github.com/YOUR_USERNAME/credit-manager-app.git
cd credit-manager-app/server
npm install

Environment Setup
Create a .env file in the /server directory with your Supabase credentials:

SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
PORT=5000

You can use .env.example to see how it's structured.

📌 Notes
🔐 No secret keys or production credentials are stored in the repo

🧩 Core version is open-source; advanced features may be offered in a future premium tier

👨‍💻 Author
Halis Yuksel

GitHub: HaSYuksel

LinkedIn: linkedin.com/in/halisyuksel

📄 License
This project is licensed under the MIT License.

MIT License

Copyright (c) 2024 Halis Yuksel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY...


