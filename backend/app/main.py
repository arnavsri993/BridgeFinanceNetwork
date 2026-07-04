import os

from dotenv import load_dotenv
from fastapi import FastAPI
from supabase import create_client

app = FastAPI(title="Bridge Finance Network")

load_dotenv()

supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY") or os.getenv("SUPABASE_ANON_KEY")
supabase = create_client(supabase_url, supabase_key) if supabase_url and supabase_key else None

DEMO_BORROWER = {
    "name": "Riverside Bakery Co.",
    "capital_need": 85000,
    "monthly_revenue": 68000,
    "use_of_funds": "Wholesale expansion and payroll runway.",
    "urgent": True,
    "documents": [
        {"id": "bank", "label": "Bank statements", "status": "ready"},
        {"id": "tax", "label": "Tax returns", "status": "ready"},
        {"id": "debt", "label": "Debt schedule", "status": "ready"},
        {"id": "story", "label": "Revenue note", "status": "missing"},
    ],
}

DEMO_LENDERS = [
    {
        "name": "Mercury Community Bank",
        "product": "Working capital line",
        "match": 99,
        "amount": "$65k-$145k",
        "cost": "8.4-10.1% APR",
        "speed": "2 days",
        "best_for": "Lowest friction for a clean local business packet.",
    },
    {
        "name": "Northstar Growth Credit",
        "product": "Revenue-based advance",
        "match": 98,
        "amount": "$35k-$105k",
        "cost": "1.08x repayment cap",
        "speed": "same day",
        "best_for": "Fast runway if the borrower needs money this week.",
    },
    {
        "name": "Harbor Equipment Finance",
        "product": "Equipment loan",
        "match": 75,
        "amount": "$25k-$80k",
        "cost": "9.2-11.6% APR",
        "speed": "4 days",
        "best_for": "Useful if the ask shifts to a delivery van or oven.",
    },
    {
        "name": "Civic Bridge Fund",
        "product": "SBA prep package",
        "match": 61,
        "amount": "$110k-$260k",
        "cost": "7.8-9.5% APR",
        "speed": "9 days",
        "best_for": "Best total cost when timing is flexible.",
    },
]


def calculate_readiness(borrower: dict) -> int:
    ready_documents = sum(1 for item in borrower["documents"] if item["status"] == "ready")
    score = 48 + ready_documents * 10 + borrower["monthly_revenue"] / 3600
    score -= borrower["capital_need"] / 12000
    return max(34, min(98, round(score)))


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "message": "Bridge Finance Network API is running."}


@app.get("/demo/borrower")
def demo_borrower() -> dict:
    return {**DEMO_BORROWER, "readiness_score": calculate_readiness(DEMO_BORROWER)}


@app.get("/demo/lenders")
def demo_lenders() -> dict:
    return {"lenders": DEMO_LENDERS}


@app.get("/demo/packet")
def demo_packet() -> dict:
    borrower = demo_borrower()
    top_lender = DEMO_LENDERS[0]

    return {
        "borrower": borrower["name"],
        "readiness_score": borrower["readiness_score"],
        "recommended_lender": top_lender["name"],
        "recommended_product": top_lender["product"],
        "summary": (
            f"{borrower['name']} is requesting ${borrower['capital_need']:,} for "
            f"{borrower['use_of_funds'].lower()} The best first route is "
            f"{top_lender['product'].lower()} through {top_lender['name']}."
        ),
        "next_action": "Add the revenue note, generate the packet, and send the lender intro.",
    }


@app.post("/auth/login")
def login(payload: dict) -> dict:
    email = payload.get("email")
    password = payload.get("password")

    if not email or not password:
        return {"error": "Email and password are required."}

    if supabase is None:
        return {"error": "Supabase is not configured."}

    try:
        response = supabase.auth.sign_in_with_password(
            {
                "email": email,
                "password": password,
            }
        )
        return {"message": "User logged in successfully.", "data": response}
    except Exception as e:
        return {"error": str(e)}


@app.post("/auth/register")
def register(payload: dict) -> dict:
    email = payload.get("email")
    password = payload.get("password")

    if not email or not password:
        return {"error": "Email and password are required."}

    if supabase is None:
        return {"error": "Supabase is not configured."}

    try:
        response = supabase.auth.sign_up(
            {
                "email": email,
                "password": password,
            }
        )
        return {"message": "User registered successfully.", "data": response}
    except Exception as e:
        return {"error": str(e)}
