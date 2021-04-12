import requests
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:36.0) Gecko/20100101 Firefox/36.0',
                       'Accept': '*/*'}


def CheckAdmin(url, proxy):
    try:
        GetInfo = requests.get('http://' + url + '/robots.txt', headers=headers, proxies=proxy, timeout=5).text
        if 'Disallow: /administrator/' in GetInfo or 'Joomla site' in GetInfo:
            return url + '/administrator/index.php'
        else:
            getInfo3 = requests.get('http://' + url + '/administrator/', headers=headers,
                                    proxies=proxy, timeout=5)
            if '/administrator/index.php" method="post" id="form-login"' in getInfo3:
                return url + '/administrator/index.php'
            else:
                return 'unknown'
    except Exception, e:
        print('Error: ' + str(e))

