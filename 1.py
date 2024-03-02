import requests
import socket


response = requests.get('http://naver.com')
original_url = response.request.url
print("Original URL:", original_url)

parsed_url = response.url
print("Parsed URL:", parsed_url)

domain = 'www.naver.com'

# 도메인 이름의 IP 주소를 얻기 위해 DNS를 쿼리
ip_address = socket.gethostbyname(domain)

print("IP Address:", ip_address)