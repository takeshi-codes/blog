---
date: '2021-06-07'
title: 'Devise Reset Password Issues with Hotwire'
description:
  'I recently ran into an issue with Devise password resets and Hotwire'
---

The last Rails app I created, [OurGroceries](https://github.com/thisisdylandev/ourgroceries), was made to mess around with and learn Hotwire. Hotwire is by far a super nift and amazing piece of technology, used to create reactive and real-time applications in Rails without the need for a SPA/SPA-like JavaScript Framework.  OurGroceries is super simple, and honestly HotWire is probably overkill for it, but it was a learning project, not some fancy SaaS app I'm trying to make money off of.

However, when I was close to the finish line, I ran into a very odd error, I couldn't get the password reset form to work. I would follow the link generated in the email, type in a new password, then nothing changes, and I would still be on the reset password form page with the form still filled out. The following errors would be in the logs:

```
Started POST "/users/password" for ::1 at 2021-05-19 22:25:52 -0500
Processing by Devise::PasswordsController#create as TURBO_STREAM
  Parameters: {"authenticity_token"=>"[FILTERED]", "user"=>{"reset_password_token"=>"[FILTERED]", "password"=>"[FILTERED]", "password_confirmation"=>"[FILTERED]"}, "commit"=>"Change my password"}
  Rendering layout layouts/application.html.erb
  Rendering users/passwords/new.html.erb within layouts/application
  Rendered users/shared/_error_messages.html.erb (Duration: 1.1ms | Allocations: 516)
  Rendered users/shared/_links.html.erb (Duration: 0.3ms | Allocations: 161)
  Rendered users/passwords/new.html.erb within layouts/application (Duration: 4.5ms | Allocations: 2025)
[Webpacker] Everything's up-to-date. Nothing to do
  Rendered shared/_navbar.html.erb (Duration: 0.3ms | Allocations: 158)
  Rendered layout layouts/application.html.erb (Duration: 11.6ms | Allocations: 6971)
Completed 200 OK in 17ms (Views: 12.6ms | ActiveRecord: 0.0ms | Allocations: 9605)
```

I wound up posting on the rails subreddit, and some wonderful stranger pointed me in the right direction. They stated: `That 'as TURBO_STREAM' pops out at me. I'm not sure how Devise and Turbo play together` and linked me to a StackOverflow post that I somehow missed in all my hours of googling. 

The fix was super straightforward and simple, it's actually a [known issue with Devise with a PR open for it](https://github.com/heartcombo/devise/pull/5340). All I needed to do was add `html: {'data-turbo' => "false"}` to the `form_for` in the forms that were giving me problems, and then everything started working! 

This is my first blog post on trying to explain a fix or technical issue, so I'd love feedback! Hit me up on the twitters at [@thisisdylandev](https://twitter.com/thisisdylandev)

Well, that's all for now 👋