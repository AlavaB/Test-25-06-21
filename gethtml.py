# Code de récupération d'une page HTML avec Python
# Source Stack Overflow
import requests

url = 'https://www.google.com/'
r = requests.get(url)
r.text