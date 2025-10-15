📈 TradeDock — Zerodha Clone (Full-Stack)

💡 TradeDock is a full-stack, demo-grade trading platform inspired by Zerodha.  
⚠️ Built for learning & portfolio demo purposes only — NOT for real trading....  

📑 Table of contents
 
📝 Project overview  
🌐 Live demo / Screenshots   
✨ Key features     
🛠️ Tech stack       
🏗️ Architectures      
⚡ Getting started (local development) -       
🔑 Environment variable    
🗄️ Database setup & seed
 
✅ Running tests
📡 API reference (examples)
🚀 Deployment 
🔒 Security & disclaimers
🤝 Contributing 
📜 License & credits
📬 Contact
📝 Project overview
 
TradeDock simulates a trading platform experience like Zerodha:
👤 User registration & login, 📊 portfolio view, 📝 order history, 📈 charts, and 🔔 real-time updates (simulated).

Perfect for students & developers to practice full-stack app building. 

🌐 Live demo / Screenshots

🔗 Demo URL: https://your-demo-url.example.com
🖼️ Screenshots stored in /assets/screenshots/
✨ Key features
🔐 JWT-based user authentication
📊 Dashboard: holdings, P&L, watchlist
💹 Place simulated orders (market, limit, cancel)
📜 Order history & trade blotter
📈 Candlestick chart integration
🔔 WebSocket-based price updates
🛠️ RESTful backend API
📦 Docker + docker-compose setup
🛠️ Tech stack

🎨 Frontend
⚛️ React (Vite / CRA)
🧭 React Router
🗂️ Redux / Zustand / React Query

📊 Chart.js / Recharts / TradingVue

🎨 TailwindCSS / SCSS

⚙️ Backend
🟢 Node.js + Express
🔌 WebSocket (ws / socket.io)
🗄️ PostgreSQL / MySQL
🔐 JWT Auth
🧪 Jest / Supertest
🧰 Dev toolings
🐳 Docker & docker-compose
📏 ESLint + Prettier
⚡ GitHub Actions CI
🏗️ Architecture
🖥️ React Client  <---- REST / WS ---->  🟢 Express API  <----> 🗄️ PostgreSQL
                                                  \
                                                   📡 Market Simulator

⚡ Getting started (local development)
1️⃣ Clone repo
git clone - get link on code section.
cd tradedock
2️⃣ Create .env files (see below)
3️⃣ Run with Docker 🐳

docker-compose up --build


🌍 Frontend: http://localhost:3000
🔙 Backend: http://localhost:4000
🗄️ Database: localhost:5432
🔑 Environment variables
Backend .env
PORT=4000
NODE_ENV=development
JWT_ACCESS_SECRET=supersecret_access_key
JWT_REFRESH_SECRET=supersecret_refresh_key
DATABASE_URL=postgresql://postgres:password@db:5432/tradedock 
MARKET_SIM_ENABLED=true

Frontend .env
REACT_APP_API_URL=http://localhost:4000/api
REACT_APP_WS_URL=ws://localhost:4000
🗄️ Database setup & seed

📦 docker-compose auto-creates DB

Or manually create:

createdb tradedock
npx prisma migrate dev --name init
npx prisma db seed


Seed users:
👤 demo@tradedock.test / Demo123
👤 admin@tradedock.test / Admin123

✅ Running tests

Backend 🧪
cd server
npm run test


Frontend 🧪

cd client
npm run test

📡 API reference (examples)
🔑 POST /api/auth/register
🔑 POST /api/auth/login
📈 GET /api/instruments
📝 POST /api/orders
📊 GET /api/portfolio

WebSocket:


🔔 Receive order status updates

🚀 Deployment

⚛️ Deploy frontend to Netlify/Vercel

🟢 Deploy backend to Render/Heroku/AWS

🐳 Use Docker for containerized deployment
🔒 Security & disclaimers

⚠️ Demo only, NOT for real trading

🔐 Passwords stored securely (bcrypt)
🔑 JWT tokens with refresh system
🌍 Use HTTPS in production
🤝 Contributing
🍴 Fork repo
🌱 Create feature branch
🛠️ Commit changes

📤 Open PR
📜 License & credits

📄 MIT License
🙏 Inspired by Zerodha (UI/UX reference only).
📬 Contact

👤 Author: Anish Raj
📧 Email: anishrajyadav97@gmail.com
