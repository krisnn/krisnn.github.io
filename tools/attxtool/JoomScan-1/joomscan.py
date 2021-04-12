import sys, os, time, random
from core import admin_pageFinder
from core import backup_check
from core import cms
from core import CompChecker
from core import ServerInfo
from core import version


class MainJoomScan(object):
    def __init__(self):
        self.r = '\033[31m'
        self.g = '\033[32m'
        self.y = '\033[33m'
        self.b = '\033[34m'
        self.m = '\033[35m'
        self.c = '\033[36m'
        self.w = '\033[37m'
        self.rr = '\033[39m'
        proxy = None
        try:
            os.mkdir('results')
        except:
            pass
        flag = True
        self.cls()
        self.print_logo()
        while flag == True:
            target = raw_input('{} WebToolz/ICG_JoomSCAN/TargET{}>>{} '.format(self.w, self.c, self.y))
            if '.' in target or '/' in target:
                if target.startswith('http://'):
                    target = target.replace('http://', '')
                elif target.startswith('https://'):
                    target = target.replace('https://', '')
                else:
                    pass
                Check_CMS = cms.CheckCms(target, proxy)
                if Check_CMS == 'Joomla':
                    x = target
                    if '/' in target:
                        x = str(target).split('/')[0]
                    with open('results/' + x + '.txt', 'a') as xx:
                        xx.write('\n===================================================\nTarget: {} \nCMS: Joomla\n'.format(target))
                        print(self.g + '    ===========================================================' + self.rr)
                        print(self.c + '        CMS: {}'.format(self.w + Check_CMS) + self.rr)
                        Nameserver = ServerInfo.ServerName(target, proxy)
                        print(self.c + '        Server: {}'.format(self.w + Nameserver) + self.rr)
                        ipserv = ServerInfo.Server_Ip(target)
                        print(self.c + '        IP: {}'.format(self.w + ipserv) + self.rr)
                        verjom = version.CheckVersion(target, proxy)
                        print(self.c + '        Joomla Version: {}'.format(self.w + verjom) + self.rr)
                        adminpage = admin_pageFinder.CheckAdmin(target, proxy)
                        print(self.c + '        Admin Page: {}'.format(self.w + adminpage) + self.rr)
                        xx.write('Server: {} \nIP: {}\nversion Joomla: {}\nAdmin PAge: {}\n'.format(Nameserver, ipserv, verjom, adminpage))
                        backups = backup_check.backChecker(target, proxy)
                        xx.write('Backups: {}\nInstalled Components:\n'.format(str(backups)))
                        print(self.c + '        Backups: {}'.format(self.w + str(backups)) + self.rr)
                        print(self.c + '        Installed Components: ' + self.rr)
                        comps = CompChecker.CompChecker(target, proxy)
                        for plug in comps:
                            print(self.y + '                              {}'.format(self.y + str(plug)) + self.rr)
                            xx.write('                              {}\n'.format(str(plug)))
                else:
                    print(self.g + '    ===========================================================' + self.rr)
                    print(self.r + '    Error: {}'.format(self.w + ' Oh, Sorry Target is Not Joomla!') + self.rr)
            elif target == 'exit' or target == 'Exit' or target == 'q' or target == '0':
                flag = False
            elif target == 'cls' or target == 'clear' or target == 'Clear' or target == 'c':
                self.cls()
                self.print_logo()


    def cls(self):
        linux = 'clear'
        windows = 'cls'
        os.system([linux, windows][os.name == 'nt'])

    def TimeStarT(self):
        return self.g + 'Time: ' + self.w + str(time.asctime()) + self.rr

    def print_logo(self):
        clear = "\x1b[0m"
        r = '\033[31m'
        g = '\033[32m'
        y = '\033[33m'
        b = '\033[34m'
        m = '\033[35m'
        c = '\033[36m'
        w = '\033[37m'
        rr = '\033[39m'

        x = """
           {}         _____   White Hat Hackers       ______                               
           {}        |     \    IraN-cyber.NeT       /      \  Github.com/04x              
           {}         \$$$$$  ______   ______ ____  |  $$$$$$\  _______  ______   _______  
           {}           | $$ /      \ |      \    \ | $$___\$$ /       \|      \ |       \ 
           {}      __   | $$|  $$$$$$\| $$$$$$\$$$$\ \$$    \ |  $$$$$$$ \$$$$$$\| $$$$$$$|
           {}     |  \  | $$| $$  | $$| $$ | $$ | $$ _\$$$$$$\| $$      /      $$| $$  | $$
           {}     | $$__| $$| $$__/ $$| $$ | $$ | $$|  \__| $$| $$_____|  $$$$$$$| $$  | $$
           {}      \$$    $$ \$$    $$| $$ | $$ | $$ \$$    $$ \$$     |\$$    $$| $$  | $$ 
           {}       \$$$$$$   \$$$$$$  \$$  \$$  \$$  \$$$$$$   \$$$$$$$ \$$$$$$$ \$$   \$$


    """.format(g, g, g, w, w, w, r, r, r)
        print(x)



MainJoomScan()
