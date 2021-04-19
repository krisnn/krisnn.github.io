Smart Password Generator
=========================================================================

Author and developer: Aleksandr Suvorov

-------------------------------------------------------------------------
What's news?
-------------------------------------------------------------------------

New interface.

-------------------------------------------------------------------------
Install:
-------------------------------------------------------------------------

`pip install smartpassgen`

`smartpassgen`

`smartpassgen --help`

`smartpassgen smart`

`smartpassgen gen`

`smartpassgen default`

-------------------------------------------------------------------------
Download:
-------------------------------------------------------------------------

1. Download from  https://github.com/mysmarthub/smartpassgen or run the command:

`wget https://github.com/mysmarthub/smartpassgen/archive/master.zip`

or

`git clone https://github.com/mysmarthub/smartpassgen/`

2. Find the file requirements.txt and install the dependencies:

`pip install -r requirements.txt`

Launch:

`python3 smartpassgen.py`

`python3 smartpassgen.py smart`

`python3 smartpassgen.py gen`

`python3 smartpassgen.py default`

`python3 smartpassgen.py --help`

-------------------------------------------------------------------------
Termux support:
-------------------------------------------------------------------------
You can easily use the utility with Termux on mobile phones and tablets.

1. Install Termux
2. pkg install python
3. pip install smartpassgen
4. smartpassgen --help

-------------------------------------------------------------------------
Description:
-------------------------------------------------------------------------
A package of modules for creating smart
password generators.
A console utility for generating smart passwords.


You can generate smart, complex passwords linked to a secret phrase,
or a username and a secret phrase.
You don't need to write down, remember,
or encrypt your passwords, you don't need to store
them somewhere in your head, in a file, or on a piece of paper.
You can always get them or restore them using
a secret phrase or a username and a secret phrase,
since when using a secret phrase or a secret phrase and a username ,
the passwords will always be the same.
If you change your username or secret phrase,
your password will also change.


Package of modules:
-------------------------------------------------------------------------
You can use this package to create
smart password generators.

generator.py - smart password generator.


    from smartpassgen import generator

    my_generator = generator.Passgen()
    help(my_generator)


-------------------------------------------------------------------------
Help:
-------------------------------------------------------------------------


    Usage: smartpassgen.py [OPTIONS] COMMAND [ARGS]...

      Smart Password Generator - console utility for generating data complex
      and smart passwords.

      install:

      pip install smartpassgen

      Use:

      smartpassgen

      or

      python smartpassgen.py

      - Three complex password generators are available to you:

      1. Smart password generator - smart password generator. Allows you to
      generate complex passwords linked to a username and a secret phrase. Using
      your username and secret phrase, you can get or restore your password at
      any time.

      2. Password generator - a more simplified complex password generator.
      Allows you to generate complex passwords linked to a secret phrase. Using
      a username and a secret phrase, you can at any time you will be able to
      get or restore the password.

      3. Default password generator - complex password generator without
      bindings and the possibility of recovery.

      You can run the utility without commands or arguments. The utility will
      show a menu for selecting and using the desired generator.

      You also have three commands available to run each generator separately:

      To get help for any of the commands, use:

      smartpassgen [command] --help

      1. smartpassgen.py gen [options]
      Launch Password generator.
      Use options:
      -s secret phrase
      -l password length
      -not prohibiting the use of dashes and underscores during generation
      --help getting help on command

      2. smartpassgen.py smart [options]
      Launch Smart password generator.
      Use options:
      -n username or name/title
      -s secret phrase
      -l password length
      -not prohibiting the use of dashes and underscores during generation
      --help getting help on command

      3. smartpassgen.py default [параметры]
      Launch Default password generator.
      Use options:
      -l password length
      -not prohibiting the use of dashes and underscores during generation
      --help getting help on command

      Url: https://github.com/mysmarthub/smartpassgen/

      Donate: https://yoomoney.ru/to/4100115206129186

      Donate: https://paypal.me/myhackband

      Help: https://github.com/mysmarthub/smartpassgen/blob/master/README.md

      Copyright © 2020-2021 Aleksandr Suvorov

    Options:
      -v, --version  Displays the version of the program and exits.
      --help         Show this message and exit.

    Commands:
      default  Regular Password Generator
      gen      Password generator with binding to a secret phrase
      smart    Password generator with binding to a secret phrase and login

Help for smartpassgen gen:
-------------------------------------------------------------------------

    Usage: smartpassgen.py gen [OPTIONS]

      Password generator with binding to a secret phrase

    Options:
      -s, --secret TEXT           Secret phrase
      -l, --length INTEGER RANGE  Password length
      -not, --not-chars           Do not use dashes or underscores
      --help                      Show this message and exit.

Help for smartpassgen smart:
-------------------------------------------------------------------------
    Usage: smartpassgen.py smart [OPTIONS]

      Password generator with binding to a secret phrase and login

    Options:
      -n, --name TEXT             Name or login
      -s, --secret TEXT           Secret phrase
      -l, --length INTEGER RANGE  Password length
      -not, --not-chars           Do not use dashes or underscores
      --help                      Show this message and exit.


Help for smartpassgen default:
-------------------------------------------------------------------------

    Usage: smartpassgen.py default [OPTIONS]

      Regular Password Generator

    Options:
      -l, --length INTEGER RANGE  Password length
      -not, --not-chars           Do not use dashes or underscores
      --help                      Show this message and exit.


-------------------------------------------------------------------------
Help the project financially:
-------------------------------------------------------------------------
https://yoomoney.ru/to/4100115206129186

Visa: 4048 0250 0089 5923

https://paypal.me/myhackband

-------------------------------------------------------------------------
Links:
-------------------------------------------------------------------------
https://github.com/mysmarthub/smartpassgen/

https://pypi.org/project/smartpassgen/

-------------------------------------------------------------------------
Disclaimer of liability:
-------------------------------------------------------------------------
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

-------------------------------------------------------------------------
Support:
-------------------------------------------------------------------------
Email: mysmarthub@ya.ru
    -----------------------------------------------------------------------------
        Licensed under the terms of the BSD 3-Clause License
        (see LICENSE for details)
        https://github.com/mysmarthub
        Copyright © 2020-2021 Aleksandr Suvorov
    -----------------------------------------------------------------------------

-------------------------------------------------------------------------
Dependencies:
-------------------------------------------------------------------------

Uses Click:

https://github.com/pallets/click

by license

https://github.com/pallets/click/blob/master/LICENSE.rst
