# Bridge Finance Network

Hackathon app for turning a small-business borrower file into a lender-ready capital packet.

The current product surface includes:

- One-page borrower workflow: request, checklist, lender match, packet
- Live readiness score driven by documents, revenue, amount, and urgency
- Ranked lender recommendations with match reasons, pricing, and speed
- Demo packet preview with generate/export/send actions
- Optional FastAPI auth stub for Supabase-backed login/register work

## Frontend

This is a Next.js project.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Backend

Run the FastAPI server:

```bash
uvicorn backend.app.main:app --reload
```

The frontend is demo-safe without backend configuration. Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` if you want the auth endpoints to call Supabase.

Demo API routes:

- `GET /health`
- `GET /demo/borrower`
- `GET /demo/lenders`
- `GET /demo/packet`
