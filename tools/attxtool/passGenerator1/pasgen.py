# -*- coding:utf -8 -*-
#!/usr/bin/python3

import random
import os 
import colorama
from colorama import Fore, Back

colorama.init()

lib = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789_'
spec = '!@#$%^&*()-+=[]:;<>,./|?`~'

print(Fore.GREEN+'''╭━━━┳━━━┳━━━┳━━━┳╮╭╮╭┳━━━┳━━━┳━━━┳━━━╮ ╭━━━┳━━━┳━╮ ╭┳━━━┳━━━┳━━━┳━━━━┳━━━┳━━━╮
┃╭━╮┃╭━╮┃╭━╮┃╭━╮┃┃┃┃┃┃╭━╮┃╭━╮┣╮╭╮┃╭━╮┃ ┃╭━╮┃╭━━┫ ╰╮┃┃╭━━┫╭━╮┃╭━╮┃╭╮╭╮┃╭━╮┃╭━╮┃
┃╰━╯┃┃ ┃┃╰━━┫╰━━┫┃┃┃┃┃┃ ┃┃╰━╯┃┃┃┃┃╰━━╮ ┃┃ ╰┫╰━━┫╭╮╰╯┃╰━━┫╰━╯┃┃ ┃┣╯┃┃╰┫┃ ┃┃╰━╯┃
┃╭━━┫╰━╯┣━━╮┣━━╮┃╰╯╰╯┃┃ ┃┃╭╮╭╯┃┃┃┣━━╮┃ ┃┃╭━┫╭━━┫┃╰╮ ┃╭━━┫╭╮╭┫╰━╯┃ ┃┃ ┃┃ ┃┃╭╮╭╯
┃┃  ┃╭━╮┃╰━╯┃╰━╯┣╮╭╮╭┫╰━╯┃┃┃╰┳╯╰╯┃╰━╯┃ ┃╰┻━┃╰━━┫┃ ┃ ┃╰━━┫┃┃╰┫╭━╮┃ ┃┃ ┃╰━╯┃┃┃╰╮
╰╯  ╰╯ ╰┻━━━┻━━━╯╰╯╰╯╰━━━┻╯╰━┻━━━┻━━━╯ ╰━━━┻━━━┻╯ ╰━┻━━━┻╯╰━┻╯ ╰╯ ╰╯ ╰━━━┻╯╰━╯
''')

def ex():
	param=input('Exit? yes/no: ')
	if param == 'yes':
		exit(0)
	elif param == 'no':
		poo()
	else:
		print('ERROR: invalid value')
		ex()

def poo():
	print(Fore.GREEN+'''
╭━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
┃1) Generate password(s)    ┃
┃2) Print saved password(s) ┃
┃3) Delete saved password(s)┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━╯ 
	''')

	ans=input('>> ')

	if ans == '1':
		ans2=input('Save password(s)? yes/no: ')
		if ans2 == 'yes':
			sym = input('Use special characters? yes/no: ')
			if sym == 'no':
				number = int(input('Number of passwords: '))
				length = int(input('Length: '))
				for n in range(number):
				    password = ''
				    for i in range(length):
				        password += random.choice(lib)
				    with open('pas.txt', 'a') as file:
		    			file.write(password)
		    			file.write('\n')
				    print(password)
				print('Saved!')
				ex()

			elif sym == 'yes':
				number = int(input('Number of passwords: '))
				length = int(input('Length: '))
				for n in range(number):
				    password = ''
				    for i in range(length):
				        password += random.choice(lib)
				        password += random.choice(spec)
				    with open('pas.txt', 'a') as file:
		    			file.write(password)
		    			file.write('\n')
				    print(password)
				print('Saved!')
				ex()	

		elif ans2 == 'no':
			sym = input('Use special characters? yes/no: ')
			if sym == 'yes':
				number = int(input('Number of passwords: '))
				length = int(input('Length: '))

				for n in range(number):
				    password = ''
				    for i in range(length):
				        password += random.choice(lib)
				        password += random.choice(spec)
				    print(password)
				input()
				ex()
			elif sym == 'no':
				number = int(input('Number of passwords: '))
				length = int(input('Length: '))

				for n in range(number):
				    password = ''
				    for i in range(length):
				        password += random.choice(lib)
				    print(password)
				input()
				ex()

	elif ans == '2':
		print('')
		with open(r"pas.txt", "r") as file:
		    for line in file:
		        print('>',line)
		    ex()

	elif ans == '3':
		if os.path.exists("pas.txt"):
			os.remove("pas.txt")
			print("Deleted!")
			ex()
		else:
			print("The file does not exist")
			ex()

	else:
		print('ERROR: invalid value')
		ex()

if __name__=='__main__':
	poo()