from pydantic import BaseModel
from typing import Literal

class Cadastro(BaseModel):
    nome: str
    descricao: Literal["Material Cirúrgico", "Material de Procedimento Padrão", "Material Descartável"]
