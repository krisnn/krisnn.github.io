import requests
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:36.0) Gecko/20100101 Firefox/36.0',
                       'Accept': '*/*'}


def CheckCms(url, proxy):
    try:
        Getinf = requests.get('http://' + url + '/media/system/js/tabs.js', headers=headers, proxies=proxy, timeout=5).text
        if '@package		Joomla!' in Getinf:
            return 'Joomla'
        else:
            GetInfo = requests.get('http://' + url + '/robots.txt', headers=headers, proxies=proxy, timeout=5).text
            if 'Disallow: /administrator/' in GetInfo or 'Joomla site' in GetInfo:
                return 'Joomla'
            else:
                GetInfo2 = requests.get('http://' + url, headers=headers, proxies=proxy, timeout=5).text
                if 'name="option" value="com_users"' in GetInfo2:
                    return 'Joomla'
                else:
                    getInfo3 = requests.get('http://' + url + '/administrator/language/en-GB/en-GB.xml', headers=headers,
                                            proxies=proxy, timeout=5)
                    if 'Joomla! Project' in getInfo3:
                        return 'Joomla'
                    else:
                        return 'unknown'
    except Exception, e:
        print('Error: ' + str(e))

