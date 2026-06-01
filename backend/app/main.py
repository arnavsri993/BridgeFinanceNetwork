from fastapi import FastAPI

app = FastAPI(title="BFN")


@app.get("/health")
def health() -> dict[str, str]:
	return {"status": "ok", "message": "it works"}


# auth endpoints
@app.post("/auth/login")
def login(payload: dict) -> dict:
	email = payload.get("email")
	password = payload.get("password")

	if not email or not password:
		return {"error": "Email and password are required."}
	
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
	# get the email and password sign up from the request body
	email = payload.get("email")
	password = payload.get("password")

	if not email or not password:
		return {"error": "Email and password are required."}
	
	# create a new user in supabase
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
	
	
