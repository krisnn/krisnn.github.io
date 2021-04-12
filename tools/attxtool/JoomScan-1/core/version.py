import requests, re
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:36.0) Gecko/20100101 Firefox/36.0',
                       'Accept': '*/*'}


def CheckVersion(url, proxy):
    try:
        GetInfo = requests.get('http://' + url + '/administrator/language/en-GB/en-GB.xml', headers=headers,
                               proxies=proxy, timeout=5).text
        if 'Joomla! Project' in GetInfo:
            version = re.findall('<version>(.*)</version>', GetInfo)
            return str(version[0])
        else:
            GetInfo2 = requests.get('http://' + url + '/administrator/language/en-GB/install.xml', headers=headers,
                                    proxies=proxy, timeout=5).text

            if 'Joomla! Project' in GetInfo2:
                version = re.findall('<version>(.*)</version>', GetInfo2)
                return str(version[0])
            else:
                GetInfo3 = requests.get('http://' + url + '/administrator/manifests/files/joomla.xml', headers=headers,
                                        proxies=proxy, timeout=5).text
                if 'Joomla! Project' in GetInfo3:
                    version = re.findall('<version>(.*)</version>', GetInfo2)
                    return str(version[0])
                else:
                    return 'unknown'
    except Exception, e:
        print('Error: ' + str(e))




