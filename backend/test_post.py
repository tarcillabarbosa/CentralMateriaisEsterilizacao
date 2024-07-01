import requests

url = 'http://localhost:8000/api/cadastro'
headers = {'Content-Type': 'application/json'}
data = {
    'nome': 'Produto B',
    'descricao': 'Material Cirúrgico'
}

response = requests.post(url, headers=headers, json=data)

print(response.json())
