# -*- coding: utf-8 -*-
# -----------------------------------------------------------------------------
# Licensed under the terms of the BSD 3-Clause License
# (see LICENSE.txt for details)
# https://github.com/mysmarthub/smartpassgen/
# Copyright © 2020-2021 Aleksandr Suvorov
# -----------------------------------------------------------------------------
"""
A generator of smart and complex passwords with the

ability to bind to a username and secret phrase.
Getting and restoring passwords,
storing them in a calculated state.
"""
import hashlib
import os
import random
import string


class PassGen:
    """A generator of smart and complex passwords"""
    @staticmethod
    def hash_data(text: str):
        """Getting the hash of a string"""
        text = str(text)
        sha = hashlib.sha3_512(text.encode('utf-8'))
        return sha.hexdigest()

    @staticmethod
    def generate(seed=None, length=30, chars=True, strong='') -> str:
        """
        Password Generator

        :param seed: <str> we use our seed to recover a smart password
        :param length: <int> password length
        :param chars: <str> adding characters for password complexity
        :param strong: <str> adding rarely used characters for password complexity

        :return: <str> password string
        """
        length = 1000 if length > 1000 else length
        if seed:
            random.seed(str(seed))
        ch = string.ascii_letters + string.digits
        if chars:
            ch += '-_'
        if strong:
            ch += str(strong)
        return ''.join([random.choice(ch) for _ in range(length)])

    @staticmethod
    def __get_secret_key(login: str, secret: str) -> str:
        secret_key = PassGen.hash_data(
            PassGen.hash_data(login) + PassGen.hash_data(secret) + PassGen.hash_data(login+secret)
        )
        return secret_key

    @staticmethod
    def get_public_key(login: str, secret: str) -> str:
        """
        Generating a public key to store the password in the calculated state
        and the possibility of obtaining it and restoring it in the future.

        :param login: name or username, can be stored in memory or in plain text
        :param secret: secret phrase, should be remembered, can not be stored in plain text
            but there is no point in storing it encrypted, it will be required to get the password.
        :return: <str> hash a string consisting of a temporary key and a generated password
            required to verify the user's entered data when receiving the password.
        """
        # Generating a temporary key from the hash of the name/username
        # and the hash of the secret phrase
        secret_key = PassGen.__get_secret_key(login=login, secret=secret)
        # We generate a password using a temporary secret key as a seed
        password = PassGen.generate(seed=secret_key)
        # Make public key
        public_key = PassGen.hash_data(
            secret_key + PassGen.hash_data(password) + PassGen.hash_data(secret)
        )
        # Returning the public key
        return public_key

    @staticmethod
    def get_smart_password(login: str, secret: str, length: int, chars=True) -> str:
        """
        Smart Password Generator

        :param chars: The use of additional symbols when generating
        :param login: <str> the name or username specified when creating a new password
        :param secret: <str> secret phrase specified when creating a new password
        :param length: <int> password length
        :return: <str> smart password
        """
        secret_key = PassGen.__get_secret_key(login, secret)
        password = PassGen.hash_data(PassGen.generate(seed=secret_key, chars=chars))
        new_hash = PassGen.hash_data(secret_key+secret+password)
        return PassGen.generate(seed=new_hash, length=length, chars=chars)

    @staticmethod
    def check_key(login: str, secret: str, user_key: str) -> bool:
        """
        Verification of the validity of the data entered
        by the user to obtain a password.

        :param login: <str> the name or username specified when creating a new password
        :param secret: <str> secret phrase specified when creating a new password
        :param user_key: <str> user's public key
        :return: <bool> True if the keys match
        """
        # Generating a temporary key from the hash of the name/username
        # and the hash of the secret phrase
        key = PassGen.get_public_key(login=login, secret=secret)
        # Checking with the public key
        if key == user_key:
            return True
        return False

    @staticmethod
    def get_seed(b=32):
        return os.urandom(b)
