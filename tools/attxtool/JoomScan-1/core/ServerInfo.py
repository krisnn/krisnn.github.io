import requests, socket
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:36.0) Gecko/20100101 Firefox/36.0',
                       'Accept': '*/*'}

def ServerName(url, proxy):
    try:
        A = requests.get('http://' + url, timeout=5, headers=headers, proxies=proxy)
        return A.headers['server']
    except Exception, e:
        return 'unknown'

def Server_Ip(url):
    try:
        if '/' in url:
            url = str(url).split('/')[0]
        return socket.gethostbyname(url)
    except:
        return 'unknown'