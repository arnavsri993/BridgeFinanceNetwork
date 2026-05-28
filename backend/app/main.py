from fastapi import FastAPI

app = FastAPI(title="BFN")


@app.get("/health")
def health() -> dict[str, str]:
	return {"status": "ok", "message": "it works"}