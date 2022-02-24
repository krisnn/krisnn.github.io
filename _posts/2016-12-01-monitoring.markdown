---
title: "Monitoring"
layout: post
date: 2016-12-01 22:00
image: "/assets/img/projects.webp"
headerImage: true
projects: true
hidden: true # don't count this post in blog pagination
description: "This is a project under development."
category: project
author: sergiotocalini
externalLink: false
tag:
- monitoring
- devops
- devsecops
---
{:.justified}
{% capture admonition_message %}
This is a live document that has work in progress content. Meaning that I will
be updating this document with new content.
{% endcapture %}
{% include admonition.html icon="warning" title="Attention" message=admonition_message %}

# Table of Contents
{:.no_toc}

1. TOC
{:toc}

# Introduction

{:.justified}
This project is focused on how to define a strategy for monitoring systems, this
will allow us measure the healthiness of applications, databases, among others.
Also we will talk about how to design extensions and how to be flexible on deploying
those plugins and how to autoregister them.

{:.justified}
For this <b>PoC</b> (Proof of Concept), we will use <b>Zabbix</b> as a base monitoring
system, as it allows to use some embed features that we can take advantage of.

{:.justified}
In addition, this PoC will also show how to extend the monitoring system tool
capabilities using extensions and how to create new extensions to cover more services.

{:.justified}
The minimum requirements for this project are the following:

Purpose       | Nodes | vCPU | Memory | Disk   |
:-----------: | :---: | :--: | :----: | :----: |
Zabbix Server | 1     | 1    | 8 GB   | 250 GB |

{:.justified}
{% capture admonition_message %}
Please consider to upgrade those requirements depending on the infrastructure that
you are considering to monitor. Also I will generate a post on how to have a high
availabity Zabbix monitoring system.
{% endcapture %}
{% include admonition.html icon="hint" title="Hint" message=admonition_message %}


# What is the purpose of using extensions?

{:.justified}
To be able to monitor services, applications or databases, sometimes we will need
to create some extensions to be fully cover by our monitoring system. Despite the
effort of the communities that provide them, there will be cases that we will
need to generate our owns. In this section, I will provide you the modules that I
needed to create over the time to fulfil those requirements, also I will try to
explain how to create your plugins and how I achieved the deployment automation
for them.

# What are the existing extensions?

{:.justified}
So far I was able to create more than 25 plugins to cover different applications,
operative system information, databases, automation tools, among others. Please
feel free to propose new plugins or even to modify mine on their github repository.
Please take into account that as I am the owner of those projects I will try to
keep them clean and I will be the only person who can define the roadmap of them
but you are free to create your own fork.

Service / App   | Extension   |
--------------- | :---------: |
ArangoDB        | [aranix]    |
Bind            | [bindix]    |
Docker          | [zocker]    |
Dovecot         | [doveix]    |
Elasticsearch   | [elasix]    |
GlusterFS       | [glusix]    |
HAProxy         | [habbixy]   |
IPSec           | [zipsec]    |
Java Springboot | [zaring]    |
Jenkins         | [jenkix]    |
KVM             | [virbix]    |
Keepalived      | [keepax]    |
Logstash        | [lostix]    |
MSSQL           | [msqlix]    |
MySQL           | [mysbix]    |
Nginx           | [znginx]    |
OpenLDAP        | [zaldap]    |
OpenVPN         | [zaovpn]    |
Oracle DB       | [zabora]    |
PostgreSQL      | [zapgix]    |
Python Gunicorn | [gunbix]    |
Redis           | [zedisx]    |
Seafile         | [seabix]    |
Splunk          | [spluix]    |
UNIX / Linux    | [custix]    |
Windows         | [custiw]    |

{:.justified}
There are some plugins that also help the monitoring system to gather information
and then generate an inventory base on this information. Taking advantage of the
inventory system feature, I was able to also create an application that gathers
this data from the monitoring system and provides some nice dashboards and very
useful information when you have several datacenters and a huge environment.

# How can we create a new extension?

{:.justified}
In order to extend the monitoring system capabilities we can follow these procedure
to ensure the automation processes is able to handle them.

{:.center}
<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;url&quot;:&quot;https://drive.google.com/uc?id=1zrSKdgPsxItMiU-QIE0X5AmD0rAEY5W6&amp;export=download&quot;}"></div>
<script type="text/javascript" src="https://app.diagrams.net/embed2.js?&fetch=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1zrSKdgPsxItMiU-QIE0X5AmD0rAEY5W6%26export%3Ddownload"></script>
<script type="text/javascript" src="https://www.draw.io/js/viewer-static.min.js"></script>

# How to deploy an extension?

{:.justified}
There are different ways to deploy every extension in an environment, manually
or it can be integrated with an automation process as we describe on the workflow
above. For the purpose of this post we will show you the manual steps.

{:.justified}
After seen the detailed steps of the workflow describe above, performing the
manual process should be similar. Let's take as an example the <b>mysbix</b>
extension (<i>MySQL</i>): as a first step we need to connect to the database
server and do a git clone from the plugin repository. Once we are on the local
directory where we did the clone, we should use the installation script provided
by the extension. In this particular case, we can execute the deployment script
called <b>deploy_zabbix.sh</b>. If the installation was succesful, we will need
to restart the zabbix-agent to load this extension on the agent.

``` bash
~# git clone https://github.com/sergiotocalini/mysbix.git
~# sudo ./mysbix/deploy_zabbix.sh -u "monitor" -p "changeme" -o "localhost"
~# sudo systemctl restart zabbix-agent
```

{:.justified}
{% capture admonition_message %}
Please take this as an example and I would also like to recommend you to check
the dependencies that the plugins may have.
{% endcapture %}
{% include admonition.html icon="hint" title="Hint" message=admonition_message %}

{:.justified}
In addition to this, we will need to upload the Zabbix template on the web
interface, usually this templates can be found on the same repository and
depending on the Zabbix version that we are using there can be slide changes
on them. For the purpose of this example, the extension provides the template
<b>3.4</b> for Zabbix ([zbx3.4_template_db_mysql.xml][mysbix-template]).

# Why it is important to define extensions following these practices?

{:.justified}
The way we define plugins has an important role when we are trying to deploy them
in large scale environments. It will also allow us to maintain those environments
in a reliable and stable way.

{:.justified}
If we are able to manage the plugins following the steps we described above, we can
deploy them regularly using a configuration management tool, such as, ansible, chef,
puppet, saltstack, etc.

{:.justified}
In this way we will have a monitoring system that will be flexible enough to have
everything automated and where we can base our SLAs.

# How to define an automation process?

{:.justified}
If we are able to follow these practices we will be also able to define an automation
process to handle the whole monitoring system and the services that we are measuring.
One way to do this is using Ansible, where we can provision the servers or applications
and adding them to the monitoring system with their plugins needed.

{:.justified}
Basically, we can pass parameters to the provisioning tool and it can take all the
needed extensions to proper monitor the servers and in this way we will be able to
maintain them too.

{:.justified}
{% capture admonition_message %}
Please note that this is a conceptual example and if you're interested in having more
insights about the automation tools and how to provision your infrastructure, please
feel free to contact me and we can start a collaboration. To have more information
please visit the extension repositories.
{% endcapture %}
{% include admonition.html icon="note" title="Note" message=admonition_message %}

# Conclusion

{:.justified}
As a conclusion, our takeaways are that making a strong focus on automation, following
a DevOps approach, will always help us to keep our monitoring system and our full
infrastructure up to date, making our systems more reliable and protected from any
attack that they could be exposed.

{:.justfied}
After this implementation, we will be ready to start defining <b>SLIs</b> (Service
Level Indicators), <b>SLOs</b> (Service Level Objetives) and <b>SLAs</b> (Service
Level Agreements). Starting a completly new journey and the way they interact with
different systems. For more information about these topics you can see the references.

{:.center}
<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;url&quot;:&quot;https://drive.google.com/uc?id=1mTSCKtSdGgXr4RW6yjfIQgnUTQ1pjXO9&amp;export=download&quot;}"></div>
<script type="text/javascript" src="https://app.diagrams.net/embed2.js?&amp;fetch=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1mTSCKtSdGgXr4RW6yjfIQgnUTQ1pjXO9%26export%3Ddownload"></script>
<script type="text/javascript" src="https://www.draw.io/js/viewer-static.min.js"></script>

# References

* [Youtube - class SRE implements DevOps][SREDevOps]
* [SRE fundamentals: SLIs, SLAs and SLOs][SREFundamentals]
* [SLA vs. SLO vs. SLI: Whats the difference?][SLAvsSLOvsSLI]

---
[aranix]: https://github.com/sergiotocalini/aranix
[bindix]: https://github.com/sergiotocalini/bindix
[custiw]: https://github.com/sergiotocalini/custiw
[custix]: https://github.com/sergiotocalini/custix
[doveix]: https://github.com/sergiotocalini/doveix
[elasix]: https://github.com/sergiotocalini/elasix
[glusix]: https://github.com/sergiotocalini/glusix
[gunbix]: https://github.com/sergiotocalini/gunbix
[habbixy]: https://github.com/sergiotocalini/habbixy
[jenkix]: https://github.com/sergiotocalini/jenkix
[keepax]: https://github.com/sergiotocalini/keepax
[lostix]: https://github.com/sergiotocalini/lostix
[msqlix]: https://github.com/sergiotocalini/msqlix
[mysbix]: https://github.com/sergiotocalini/mysbix
[seabix]: https://github.com/sergiotocalini/seabix
[spluix]: https://github.com/sergiotocalini/spluix
[virbix]: https://github.com/sergiotocalini/virbix
[zabora]: https://github.com/sergiotocalini/zabora
[zaldap]: https://github.com/sergiotocalini/zaldap
[zaovpn]: https://github.com/sergiotocalini/zaovpn
[zapgix]: https://github.com/sergiotocalini/zapgix
[zaring]: https://github.com/sergiotocalini/zaring
[zedisx]: https://github.com/sergiotocalini/zedisx
[zipsec]: https://github.com/sergiotocalini/zipsec
[znginx]: https://github.com/sergiotocalini/znginx
[zocker]: https://github.com/sergiotocalini/zocker
[mysbix-template]: https://github.com/sergiotocalini/mysbix/blob/master/zbx3.4_template_db_mysql.xml
[SREDevOps]: https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj
[SREFundamentals]: https://cloud.google.com/blog/products/gcp/sre-fundamentals-slis-slas-and-slos
[SLAvsSLOvsSLI]: https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli
