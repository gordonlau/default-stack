# Default Stack Template

A modern, full-stack web application template built with **Astro**, **React**, and **Node.js**. This starter kit integrates robust tools for database management, validation, and styling.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/) (SSR with Node.js adapter)
- **UI Library:** [React](https://react.dev/)
- **Island Routing:** [wouter](https://github.com/molefrog/wouter)
- **UI Components:** [Mantine](https://mantine.dev/)
- **Styling:** [styled-components](https://styled-components.com/) and direct style objects (CSS-in-JS)
- **Database:** PostgreSQL with [Kysely](https://kysely.dev/) (Type-safe SQL query builder)
- **Testing:** [Vitest](https://vitest.dev/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Validation:** [Zod](https://zod.dev/)
- **State Management:** [Zustand](https://zustand.docs.pmnd.rs/) and [Nano Stores](https://github.com/nanostores/nanostores)
- **Data Fetching:** [@tanstack/react-query](https://tanstack.com/query/latest)
- **Formatting:** [Prettier](https://prettier.io/)

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (preferred package manager)
- PostgreSQL database

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd default-stack
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Environment Configuration

Copy the sample environment file to `.env`:

```bash
cp .env.sample .env
```

Update `.env` with your PostgreSQL credentials.
**Note:** The application code expects the following variables (ensure these match your `.env`):

```env
POSTGRES_DATABASE=your_database_name
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_HOST=localhost
```

### 4. Database Setup

Ensure your PostgreSQL server is running and the database specified in `POSTGRES_DATABASE` exists.

To generate TypeScript types from your database schema (powered by `kysely-codegen`):

```bash
pnpm run kysely-codegen
```

### 5. Run the development server

```bash
pnpm dev
```

The app will be available at `http://localhost:8080`.

## 📜 Available Scripts

| Script                | Description                                              |
| :-------------------- | :------------------------------------------------------- |
| `pnpm dev`            | Starts the local development server                      |
| `pnpm build`          | Builds the project for production                        |
| `pnpm preview`        | Previews the production build locally                    |
| `pnpm start`          | Same as `pnpm preview`                                   |
| `pnpm test`           | Runs tests using Vitest                                  |
| `pnpm kysely-codegen` | Generates TypeScript interfaces from the database schema |
| `pnpm lint`           | Formats code using Prettier                              |

## 📂 Project Structure

```text
/
├── public/          # Static assets
├── src/
│   ├── actions/     # Server actions (Zod validation, etc.)
│   ├── assets/      # Source assets (images, fonts)
│   ├── components/  # React components
│   ├── integrations/# Third-party integrations (DB connection)
│   ├── layouts/     # Astro layouts
│   ├── models/      # TypeScript types (DB schema)
│   ├── pages/       # Astro pages/routes
│   └── services/    # Business logic
├── astro.config.mjs # Astro configuration
└── package.json     # Project dependencies and scripts
```
