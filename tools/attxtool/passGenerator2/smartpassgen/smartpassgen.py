#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# -----------------------------------------------------------------------------
# Licensed under the terms of the BSD 3-Clause License
# (see LICENSE.txt for details)
# https://github.com/mysmarthub/smartpassgen/
# Copyright © 2020-2021 Aleksandr Suvorov
# -----------------------------------------------------------------------------
"""
Smart Password Generator - generators are a smart and sophisticated password.

Smart password generator - smart password generator with the ability to
restore and bind to the login.

Password generator - password generator with the possibility of
recovery with reference to a secret phrase.

Default password generator - password generator without bindings
and the possibility of recovery, uses os.urandom to generate.
"""

import click

try:
    import generator
    import settings
except ModuleNotFoundError:
    from smartpassgen import generator, settings


def open_url(url: str):
    """
    Opens a link from the console.

    :param url: <str> - link.
    :return: - None.
    """
    click.launch(url)


def get_length(start: int = 4, end: int = 100) -> int:
    """
    Getting the password length.

    :param start: <int> - minimum length.
    :param end: <int> - maximum length.
    :return: <int> - the length obtained from the user by entering.
    """
    length = click.prompt(
        f'Password length ({start}-{end})',
        type=click.IntRange(start, end, clamp=True)
    )
    # If the user entered a length less than or greater than the allowed length,
    # the maximum allowed length will be returned.
    return length


def smart_print(text: str = '', char: str = '-', flag=False) -> str:
    """
    Smart printing based on the width of the console.

    :param flag: <bool> - if False-print to the console,
        True returns the formatted string.
    :param text: <str> - text to format.
    :param char: <str> - character to fill in.
    :return: <str> formatted string.
    """
    if not char:
        char = ' '
    columns, _ = click.get_terminal_size()
    if text:
        msg = f' {text} '.center(columns, char)
    else:
        msg = f''.center(columns, char)
    if not flag:
        click.echo(msg)
    else:
        return msg


def get_secret(min_length: int = 4) -> str:
    """
    Getting a secret phrase.

    :param min_length: <int> - minimum length of a secret phrase.
    :return: <str> - secret phrase received from the user by entering.
    """
    while 1:
        secret = click.prompt(
            f'Enter your secret phrase '
            f'(minimum length: {min_length})',
            type=str,
            hide_input=True
        )
        if len(secret) < min_length:
            click.echo()
            click.echo(
                'A mistake! The secret phrase is too short!'
            )
            continue
        return secret


def get_login(min_length: int = 4) -> str:
    """
    Getting a username from a user.

    :param min_length: <int> - minimum length of a .
    :return: <str> - a login is received from the user using input.
    """
    while 1:
        login = click.prompt(f'Enter a name or login '
                             f'(minimum length: {min_length})',
                             type=str)
        if len(login) < min_length:
            click.echo()
            click.echo(f'Error! The name or username is not '
                       f'may be shorter {min_length}')
            continue
        return login


def default_gen(length: int = 0, chars: bool = True) -> str:
    """
    Default Password Generator

    - Uses os. urandom for generation.

    :param length: <int> - password length
    :param chars: <bool> - If True for the generation of additional will be
        use dashes and underscores.
    :return: <str> - generated password.
    """
    seed = generator.PassGen.get_seed()
    if not length:
        length = get_length()
    return generator.PassGen.generate(
        seed=seed,
        length=length,
        chars=chars
    )


def pass_gen(secret: str = '', length: int = 0, chars: bool = True):
    """
    Password Generator

    - Uses a reference to the secret phrase to generate and
        re-acquisition and recovery capabilities.

    :param secret: <str> - secret phrase to generate and bind.
    :param length: <int> - password length.
    :param chars: <bool> - If True for the generation of additional will be.
    :return: generated password.
    """
    if not secret:
        secret = get_secret()
    if not length:
        length = get_length()
    login = generator.PassGen.hash_data(secret)
    password = generator.PassGen.get_smart_password(
        login=login,
        secret=secret,
        length=length,
        chars=chars
    )
    return password


def smart_pass_gen(login: str = '', secret: str = '', length: int = 0, chars: bool = True) -> str:
    """
    Smart Password Generator

    - Password generator with the ability to bind to a username and secret phrase,
        for the ability to store in a calculated state without physical storage,
        as well as receiving and restoring at any time.

    :param login: <str> - username or name to link to.
    :param secret: <str> - secret phrase to generate and bind.
    :param length: <int> - password length.
    :param chars: <bool> - If True for the generation of additional will be.
    :return: generated password.
    """
    if not login:
        login = get_login()
    if not secret:
        secret = get_secret()
    if not length:
        length = get_length()
    password = generator.PassGen.get_smart_password(
        login=login,
        secret=secret,
        length=length,
        chars=chars
    )
    return password


def print_version(ctx, param, value):
    """Print Version"""
    if not value or ctx.resilient_parsing:
        return
    click.echo(f'{settings.TITLE} '
               f'{settings.VERSION} | '
               f'{settings.COPYRIGHT}')
    ctx.exit()


def start_logo():
    """
    Displaying the logo at startup.
    :return:
    """
    smart_print('', '*')
    smart_print(f'{settings.TITLE} '
                f'v{settings.VERSION}', '=')


def end_logo():
    """
    Displaying the logo on completion.
    :return:
    """
    smart_print(f'{settings.YANDEX}', '-')
    smart_print(f'{settings.COPYRIGHT}', '=')
    smart_print('Program completed', '*')


def main_menu():
    """
    Main Menu.
    :return:
    """
    while 1:
        start_logo()
        smart_print('Main menu')
        click.echo('s: Smart Password Generator')
        click.echo('p: Password Generator')
        click.echo('d: Default Password Generator')
        click.echo('h: HELP url')
        click.echo('q: quit')
        char = click.getchar()
        smart_print()
        if char == 'q':
            break
        elif char == 's':
            smart_print('Smart Password Generator')
            password = smart_pass_gen()
        elif char == 'p':
            smart_print('Password Generator')
            password = pass_gen()
        elif char == 'd':
            smart_print('Default Password Generator')
            password = default_gen()
        elif char == 'h':
            smart_print('Open HELP url')
            open_url(settings.README_URL)
            click.echo(f'Open: {settings.README_URL}')
            continue
        else:
            click.echo('Invalid input!')
            continue
        smart_print('Your password:')
        click.echo(password)
        smart_print()
        input('Enter to continue...')
    click.echo('Exit...')
    end_logo()


@click.group(invoke_without_command=True)
@click.option('--version', '-v', is_flag=True, callback=print_version,
              help='Displays the version of the program and exits.',
              expose_value=False, is_eager=True)
@click.pass_context
def cli(ctx):
    """
    Smart Password Generator - console utility for generating data
    complex and smart passwords.

    install:

    pip install smartpassgen

    Use:

    smartpassgen

    or

    Download from github:

    https://github.com/mysmarthub/smartpassgen

    pip install -r requirements.txt

    python smartpassgen.py

    - Three complex password generators are available to you:

    1. Smart password generator - smart password generator.
    Allows you to generate complex passwords linked to a username and a secret phrase.
    Using your username and secret phrase, you can
    get or restore your password at any time.

    2. Password generator - a more simplified complex password generator.
    Allows you to generate complex passwords linked to a secret phrase.
    Using a username and a secret phrase, you can at any time
    you will be able to get or restore the password.

    3. Default password generator - complex password generator without bindings
    and the possibility of recovery.

    You can run the utility without commands or arguments.
    The utility will show a menu for selecting and using the desired generator.

    You also have three commands available to run each generator separately:

    To get help for any of the commands, use:

    smartpassgen [command] --help

    \b
    1. smartpassgen.py gen [options]
    Launch Password generator.
    Use options:
    -s secret phrase
    -l password length
    -not prohibiting the use of dashes and underscores during generation
    --help getting help on command

    \b
    2. smartpassgen.py smart [options]
    Launch Smart password generator.
    Use options:
    -n username or name/title
    -s secret phrase
    -l password length
    -not prohibiting the use of dashes and underscores during generation
    --help getting help on command

    \b
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
    """
    if ctx.invoked_subcommand == 'smart':
        start_logo()
        smart_print('Smart Password Generator')
    elif ctx.invoked_subcommand == 'gen':
        start_logo()
        smart_print('Password Generator')
    elif ctx.invoked_subcommand == 'default':
        start_logo()
        smart_print('Default Password Generator')
    else:
        main_menu()


@cli.resultcallback()
def process_result(result, **kwargs):
    smart_print('Your password:')
    click.echo(result)
    end_logo()


@cli.command()
@click.option('--length', '-l',
              prompt=True,
              help='Password length',
              type=click.IntRange(4, 100, clamp=True))
@click.option('--not-chars', '-not',
              is_flag=True,
              default=True,
              help='Do not use dashes or underscores')
def default(length, not_chars):
    """Regular Password Generator"""
    password = default_gen(length=length, chars=not_chars)
    return password


@cli.command()
@click.option('--secret', '-s', type=str,
              help='Secret phrase',
              prompt=True,
              hide_input=True,
              )
@click.option('--length', '-l',
              prompt=True,
              help='Password length',
              type=click.IntRange(4, 100, clamp=True))
@click.option('--not-chars', '-not',
              is_flag=True,
              default=True,
              help='Do not use dashes or underscores')
def gen(secret, length, not_chars):
    """Password generator with binding to a secret phrase"""
    password = pass_gen(secret=secret, length=length, chars=not_chars)
    return password


@cli.command()
@click.option('--name', '-n',
              type=str,
              help='Name or login',
              prompt='Name or Login')
@click.option('--secret', '-s', type=str,
              help='Secret phrase',
              prompt=True,
              hide_input=True,
              )
@click.option('--length', '-l',
              prompt=True,
              help='Password length',
              type=click.IntRange(4, 100, clamp=True))
@click.option('--not-chars', '-not',
              is_flag=True,
              default=True,
              help='Do not use dashes or underscores')
def smart(name, secret, length, not_chars):
    """Password generator with binding to a secret phrase and login"""
    password = smart_pass_gen(login=name, secret=secret, length=length, chars=not_chars)
    return password


if __name__ == '__main__':
    cli()
