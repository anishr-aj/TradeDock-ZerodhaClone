TradeDock is a full-stack, demo-grade trading platform inspired by Zerodha.
Built for learning and portfolio demo purposes — NOT for real trading.
Use at your own risk. Sensitive financial or regulatory features (real money, order routing to exchanges, KYC, etc.) are intentionally omitted.

Table of contents

Project overview

Live demo / Screenshots

Key features

Tech stack

Architecture

Getting started (local development)

Environment variables

Database setup & seed

Running tests

API reference (examples)

Deployment

Security & disclaimers

Contributing

License & credits

Contact

Project overview

TradeDock is a learning/presentation project that simulates a trading platform experience similar to Zerodha: user registration & auth, portfolio view, watchlist, placing simulated orders (market/limit), charting (mock/candles), order book, and trade history. The app is intended for students and developers to study a full-stack implementation of trading UI, websockets/real-time updates (simulated), and backend order handling.

Live demo / Screenshots

Placeholder: Replace with your hosted demo URL and screenshots.

Demo: https://your-demo-url.example.com

Screenshots folder: /assets/screenshots/

Add GIF or short clip of placing an order and portfolio update.

Key features

User authentication (JWT + refresh tokens)

Interactive dashboard: portfolio, P&L, holdings

Watchlist & market data feed (simulated)

Place simulated orders: market, limit, cancel

Order history & trade blotter

Candlestick chart integration (placeholder for chart library)

WebSocket/mocked real-time price feed

Role-based access & admin panel (seeded users)

RESTful backend API + client-side React hooks

Docker + docker-compose setup for full-stack run

Tech stack

Frontend

React (Vite or Create React App)

React Router

Redux / Zustand (or React Query) for state

Charting: Chart.js / Recharts / TradingVue (placeholder)

CSS: Tailwind / SASS / CSS Modules

Backend

Node.js + Express (or NestJS)

WebSocket: ws / socket.io

ORM: Prisma / Sequelize / TypeORM (or raw SQL)

Auth: JWT

DB: PostgreSQL (recommended) or MySQL / SQLite for dev

Tests: Jest / Supertest

Dev tooling

Docker & docker-compose

ESLint, Prettier

GitHub Actions (optional CI)

Architecture
[React (client)] <--REST/WS--> [Express API server] <---> [Postgres DB]
                                          \
                                           `--> Simulated Market Engine (WS feed / price generator)

Getting started (local development)

Assumes node and docker installed. Replace package manager commands (npm) with yarn if you prefer.

Clone

git clone https://github.com/<your-username>/tradedock.git
cd tradedock


Create .env files

Create .env in the root for backend (see section below).

Create .env or use REACT_APP_ prefixed vars for frontend.

Start with Docker (recommended)

# builds app + db + market-sim
docker-compose up --build


This will start:

Backend at http://localhost:4000

Frontend at http://localhost:3000

Postgres at localhost:5432

Or run services locally (no Docker)

# backend
cd server
npm install
cp .env.example .env        # fill values
npm run dev                 # nodemon/ts-node

# frontend
cd ../client
npm install
cp .env.example .env        # fill values
npm run dev                 # Vite/React dev server

Environment variables
Backend .env (example)
# server/.env
PORT=4000
NODE_ENV=development

# JWT
JWT_ACCESS_SECRET=supersecret_access_key
JWT_REFRESH_SECRET=supersecret_refresh_key
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d

# Database (Postgres example)
DATABASE_URL=postgresql://postgres:password@db:5432/tradedock

# Websocket / market sim
MARKET_SIM_ENABLED=true

Frontend .env (example)
# client/.env
REACT_APP_API_URL=http://localhost:4000/api
REACT_APP_WS_URL=ws://localhost:4000
REACT_APP_ENV=development

Database setup & seed

If using Docker, the DB will be created automatically. For local Postgres:

Create DB

createdb tradedock


Run migrations (Prisma example)

cd server
npx prisma migrate dev --name init
npx prisma db seed      # if seed script configured


Seed sample users & instruments
Add a seed script that creates:

Admin user: admin@tradedock.test / password: Admin123

Demo user: demo@tradedock.test / password: Demo123

Instruments table with sample tickers (e.g., AAPL, INFY, TCS) and initial prices.

SQL seed example

INSERT INTO users (email, password_hash, role) VALUES ('demo@tradedock.test', '<bcrypt-hash>', 'user');
INSERT INTO instruments (symbol, name, price) VALUES ('AAPL', 'Apple Inc', 175.25);

Running tests

Backend unit & integration tests (Jest + Supertest):

cd server
npm run test


Frontend tests (React Testing Library):

cd client
npm run test

API reference (examples)

Base: POST /api/auth/login etc. Example endpoints:

Auth

POST /api/auth/register — register user { name, email, password }

POST /api/auth/login — login returns { accessToken, refreshToken }

POST /api/auth/refresh — refresh access token

POST /api/auth/logout — revoke refresh token

Market / instruments

GET /api/instruments — list instruments & last price

GET /api/instruments/:symbol — instrument detail

Orders

POST /api/orders — place order { symbol, side, type, qty, price? }

GET /api/orders — user order history

POST /api/orders/:id/cancel — cancel order

Portfolio

GET /api/portfolio — holdings & P&L

GET /api/trades — executed trades

WebSocket

Connect to ws endpoint for real-time price updates and order updates. Example message types:

subscribe { type: 'subscribe', symbols: ['AAPL'] }

order:update (server -> client) for order state changes

Make sure to protect endpoints with JWT middleware for authenticated routes.

Example order flow (simulated)

Client places order POST /api/orders.

Backend validates, creates order in DB with status pending.

Market simulator (or matching engine) processes orders and emits order:executed or order:partially_filled over WebSocket.

Client receives WS event and updates UI (portfolio & order book).

Deployment

Typical workflow:

Build frontend: npm run build (client)

Serve frontend via static host (Netlify/Vercel) or serve build from backend (Express static middleware).

Deploy backend to Heroku / Render / AWS / DigitalOcean. Use managed Postgres.

Use environment variables on the host, and ensure WebSocket support where needed.

Docker compose (prod)

Create docker-compose.prod.yml with proper volumes, secrets, and NODE_ENV=production.

Use docker stack deploy or cloud container services.

Security & disclaimers

TradeDock is a demo; DO NOT connect it to real broker APIs or use with real funds.

Passwords must be hashed (bcrypt) and never stored as plain text.

Use HTTPS and secure cookies in production.

Rotate JWT secrets and use secure refresh token storage.

Comply with legal regulations before integrating with real financial services.

Contributing

Contributions welcome!

Fork repo ➜ create feature branch ➜ open PR with description.

Follow code style (ESLint + Prettier).

Write tests for new features.

Use issues for feature requests / bugs.

Suggested labels:

good first issue — easy onboarding tasks

enhancement — new feature proposals

bug — unexpected behavior

Roadmap / Ideas

Integrate real market data (public sandbox APIs) — with strict disclaimers.

Add chart indicators (SMA, EMA, RSI).

Paper trading with virtual currency.

Multi-currency support.

Performance & load testing for matching engine.

Known limitations

Not production-ready for real trading.

Market feed is simulated by default.

No KYC / payment rails.

Not audited for security or regulatory compliance.

License & credits

MIT License — see LICENSE file.
Inspired by popular retail broker UIs (e.g., Zerodha) for learning and demonstration purposes.

Contact

Created by: Anish Raj
Email: anishrajyadav97@gmail.com
