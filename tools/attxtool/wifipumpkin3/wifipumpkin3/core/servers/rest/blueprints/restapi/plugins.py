from wifipumpkin3.core.utility.collection import SettingsINI
import wifipumpkin3.core.utility.constants as C
from wifipumpkin3 import PumpkinShell
from flask_restful import Resource
from flask import jsonify, request
from wifipumpkin3.core.servers.rest.ext.auth import token_required
from wifipumpkin3.core.servers.rest.ext.exceptions import exception

# This file is part of the wifipumpkin3 Open Source Project.
# wifipumpkin3 is licensed under the Apache 2.0.

# Copyright 2020 P0cL4bs Team - Marcos Bomfim (mh4x0f)

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

# http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


class MitmPluginsResource(Resource):
    config = SettingsINI.getInstance()
    key_name = "mitm_modules"

    def __init__(self):
        self.root = PumpkinShell.getInstance()
        super(MitmPluginsResource, self).__init__()

    @token_required
    def get(self):
        mitm_plugins = self.root.mitm_controller.getInfo(excluded=("Config"))
        for item in mitm_plugins:
            mitm_plugins[item]["Activate"] = self.config.get(
                self.key_name, mitm_plugins[item]["ID"], format=bool
            )
        return jsonify({"plugins": mitm_plugins})


class PluginsInfoResource(Resource):
    config = SettingsINI.getInstance()
    key_name = "mitm_modules"

    def __init__(self):
        self.root = PumpkinShell.getInstance()
        super(PluginsInfoResource, self).__init__()

    @token_required
    def get(self, plugin_name=None):
        if plugin_name:
            if not plugin_name in self.config.get_all_childname(self.key_name):
                return exception(
                    "Cannot found that attribute {} on {}!".format(
                        plugin_name, self.key_name
                    ),
                    code=400,
                ) 
        proxy_plugins = self.root.mitm_controller.getInfo(excluded=("Config"))
        for item in proxy_plugins:
            proxy_plugins[item]["Activate"] = self.config.get(
                self.key_name, proxy_plugins[item]["ID"], format=bool
            )
        return jsonify(proxy_plugins.get(plugin_name))

class SettingsPluginResource(Resource):
    config = SettingsINI.getInstance()
    key_name = "mitm_modules"

    @token_required
    def get(self, attribute=None):
        if attribute:
            if not attribute in self.config.get_all_childname(self.key_name):
                return exception(
                    "Cannot found that attribute {} on {}!".format(key, self.key_name),
                    code=400,
                )
            return jsonify({attribute: self.config.get(self.key_name, attribute)})
        data = {}
        for key in self.config.get_all_childname(self.key_name):
            data[key] = self.config.get(self.key_name, key)
        return jsonify(data)

    @token_required
    def post(self):
        data = request.get_json(force=True)
        for key, value in data.items():
            if not key in self.config.get_all_childname(self.key_name):
                return exception(
                    "Cannot found that attribute {} on {}!".format(key, self.key_name),
                    code=400,
                )
            self.config.set(self.key_name, key, value)
        return jsonify(data)


class SettingsPluginsResource(Resource):
    config = None
    key_name = "plugins"

    def create_config(self, plugin_id):
        plugin_settings_ini = C.ALL_CONFIGSINI.get(plugin_id)
        if plugin_settings_ini is None:
            return
        self.config = SettingsINI(plugin_settings_ini)

    @token_required
    def get(self, plugin_id=None):
        self.create_config(plugin_id)

        if self.config is None:
            return exception(
                "Cannot found plugin {} ini file.".format(plugin_id), code=400
            )
        data = {}

        for key in self.config.get_all_childname(self.key_name):
            data[key] = self.config.get(self.key_name, key)
            for sub_key in self.config.get_all_childname("set_{}".format(key)):
                if "set_{}".format(key) in list(data.keys()):
                    data["set_{}".format(key)].append(
                        {sub_key: self.config.get("set_{}".format(key), sub_key)}
                    )
                else:
                    data["set_{}".format(key)] = []
                    data["set_{}".format(key)].append(
                        {sub_key: self.config.get("set_{}".format(key), sub_key)}
                    )

        return jsonify(data)

    @token_required
    def post(self, plugin_id=None):
        data = request.get_json(force=True)
        self.create_config(plugin_id)
        if self.config is None:
            return exception(
                "Cannot found plugin {} ini file.".format(plugin_id), code=400
            )
        for key, value in data.items():
            if str(key).startswith("set_"):
                for item in value:
                    for sub_key, sub_value in item.items():
                        if not sub_key in self.config.get_all_childname(key):
                            return exception(
                                "Cannot found that attribute {} on {}!".format(
                                    sub_key, key
                                ),
                                code=400,
                            )
                        self.config.set(key, sub_key, sub_value)
            else:
                if not key in self.config.get_all_childname(self.key_name):
                    return exception(
                        "Cannot found that attribute {} on {}!".format(
                            key, self.key_name
                        ),
                        code=400,
                    )
                self.config.set(self.key_name, key, value)
        return jsonify(data)
