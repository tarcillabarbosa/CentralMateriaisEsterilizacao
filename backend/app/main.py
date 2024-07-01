from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.models import Cadastro
from typing import List

app = FastAPI()

# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],  # Permite requisições de http://localhost:3001
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos HTTP (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

# In-memory storage for simplicity
cadastros: List[Cadastro] = []

@app.post("/api/cadastro")
async def create_cadastro(cadastro: Cadastro):
    cadastros.append(cadastro)
    return {"message": "Cadastro realizado com sucesso!"}

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/api/cadastros")
async def get_cadastros():
    return cadastros

@app.get("/api/cadastro/{cadastro_id}")
async def get_cadastro(cadastro_id: int):
    if cadastro_id < 0 or cadastro_id >= len(cadastros):
        raise HTTPException(status_code=404, detail="Cadastro não encontrado")
    return cadastros[cadastro_id]
