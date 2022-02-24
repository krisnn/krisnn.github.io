<p align="center">
  <a href="https://github.com/sergiotocalini/sergiotocalini.github.io/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/sergiotocalini/sergiotocalini.github.io">
  </a>
  <a href="https://sergiotocalini.github.io">
    <img src="https://img.shields.io/website/https/sergiotocalini.github.io.svg">
  </a>
</p>

<p align="center">
  <a href="https://www.buymeacoffee.com/sergiotocalini" rel="nofollow">
    <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
		 style="max-width:100%;" alt="Buy Me A Coffee">
  </a>
</p>

# sergiotocalini.github.io

Personal Website

# Deployment

``` bash
~# WORKSPACE="~/Develop/github/sergiotocalini"
~# mkdir -p "${WORKSPACE}"
~# git clone https://github.com/sergiotocalini/sergiotocalini.github.io "${WORKSPACE}"
~# docker run -d -e "JEKYLL_ENV=docker" -v "${WORKSPACE}/sergiotocalini.github.io":"/srv/jekyll" \
	          --name "sergiotocalini.github.io" -p "4000:4000" jekyll/jekyll:3.8 jekyll serve --draft
```
