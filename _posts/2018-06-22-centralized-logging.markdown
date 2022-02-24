---
title: "Centralized Logging"
layout: post
date: 2018-06-22 22:00
image: "/assets/img/projects.webp"
headerImage: true
projects: true
hidden: true
description: "This is a project under development."
category: project
author: sergiotocalini
externalLink: false
tag:
- monitoring
- security
- devops
- devsecops
- logs
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

{:.center}
<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;url&quot;:&quot;https://drive.google.com/uc?id=1JLnC7CTaZQZQiY7kWUVcMJOlBRMKSF7a&amp;export=download&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/embed2.js?&fetch=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1JLnC7CTaZQZQiY7kWUVcMJOlBRMKSF7a%26export%3Ddownload"></script>
<script type="text/javascript" src="https://www.draw.io/js/viewer-static.min.js"></script>

# Introduction

{:.justified}
The purpose of this project is to centralize logs from all the servers,
applications and devices that we have on our infrastructure. We will give
minimum requirements recommendation and how you should deploy, monitor and
visualise the logs. For this particular case we will use <b>ELK</b>
(Elasticsearch, Logstash & Kibana) and <b>Rsyslog</b> resources.


# Minimum Requirements

| Service       | Nodes | vCPU | Memory | Disk   |
| :-----------: | :---: | :--: | :----: | :----: |
| Elasticsearch | 3     | 1    | 4 GB   | 50 GB  |
| Logstash      | 1     | 1    | 2 GB   | 50 GB  |
| :-----------: | :---: | :--: | :----: | :----: |
| Total         | 4     | 4    | 14 GB  | 200 GB |

# Monitoring


# Conclusion
This project can covered many other services.

# References
* [AWS Solution: Centralized Logging][link01]
* [Digital Ocean: How to centralize logs with Rsyslog, Logstash and Elasticsearch on Ubuntu 14.04][link02]

---
[diagram]: //www.lucidchart.com/publicSegments/view/b45fc179-ca8e-4bb4-995f-24920303fbc1/image.png
[ansible-playbooks]: https://github.com/sergiotocalini/ansible-playbooks
[link01]: //www.digitalocean.com/community/tutorials/how-to-centralize-logs-with-rsyslog-logstash-and-elasticsearch-on-ubuntu-14-04
[link02]: //aws.amazon.com/solutions/implementations/centralized-logging/
