---
title: About
layout: page
---
<img src="{{ site.url }}/{{ site.picture }}" alt="Profile" class="profile-img"/>
<header class="header-home annimate">
  <h1 class="title">Norman Kristiono</h1>
  <h2 class="description">Full-Stack Developer / DevOps Engineer</h2>
  {% include social-links.html %}
</header>

{:.justified}
Sergio has strong experience on building distributed systems and defining
application lifecycles. He has worked in several projects for banks,
pharmaceutics, payment systems and airports supporting different countries.

{:.justified}
He enjoys designing and implementing reliable system architectures to make the
interaction with the customers more efficient and productive. Also he defines
and adopts patterns and best practices to transform process in more agile cycles.

{:.justified}
He is goal oriented, reliable team player, who is always ready to provide the
best professional support.

<div id="profile-badges">
  <ul class="badges-list">
    {% for cert in site.data.certifications %}
    <li class="badge-row" role="row">
      <div class="badge-content col col-12" role="cell">
    	<a title="{{ cert.name }}" href="{{ cert.url }}">
    	  <div>
    	    <img src="{{ cert.badge }}"/>
    	  </div>
    	</a>
      </div>
    </li>
    {% endfor %}
  </ul>
</div>

{:.justified}
There are some portals where you can have almost every badge you have earned on
your profile available to share with your network and can help you also to define
your career path: [youracclaim][youracclaim], [credential][credential], etc.


[youracclaim]: https://www.youracclaim.com/users/sergiotocalini
[credential]: https://googlecloudcertified.credential.net/profile/a7bd30f3134493a90e5388ff618babaf577ce422
