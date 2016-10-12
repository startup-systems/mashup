# Mashup project

This project is open-ended!

* [AJAX demos](https://github.com/advanced-js/deck/tree/gh-pages/demos/ajax)
* [inspiration?](http://www.programmableweb.com/mashups)

## Requirements

* Build a site that uses data from at least one external API in an interesting, interactive way. (**80%**)
* HTML validation (using the [Nu HTML Checker](https://validator.w3.org/nu/)) must pass. (**10%**)
* JavaScript linting (using the configured [JSHint](http://jshint.com/about/)) must pass. (**10%**)
* Replace this README with a description of the project.

### Extra credit

Too easy?

* Build in an [object-oriented](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript) way (**10%**)
* Add fancy interactivity/animations (**10%**)

If you do either of these, please let Aidan know so he can take a look.

## Tips

* The JS code should be **non-trivial**. That being said... start simple! (Just get the data to show up on the page.)
* No server-side coding is required, but feel free to create a backend in whatever language if you like, if you need one.
* You are welcome to use any 3rd-party libraries/frameworks – just load them from a CDN (e.g. [cdnjs](http://cdnjs.com)), or put them under the [`vendor/`](vendor/) folder.
* **Do not commit the `client_secret` (or anything else from an API that says "token" or "secret")**, as a hacker could use this to make requests on behalf of you.

## Finding an API

A couple things to look for in an API (or at least the endpoints you're using) for this project:

* Make sure it doesn't require authentication/authorization (e.g. [OAuth](http://oauth.net/)) - at least for the endpoints that you want to use - so that you don't need a server.
* If the API doesn't support cross-domain requests (JSONP or CORS), you will need to use [JSONProxy](https://jsonp.afeld.me/).

Here is a [list of API suggestions](https://gist.github.com/afeld/4952991).

## Running tests locally

Within this repository directory in your [virtual machine](https://github.com/startup-systems/vm):

1. [Install Node.js 6.x.](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
1. Install the project dependencies.

    ```bash
    npm install
    ```

1. Run the tests.

    ```bash
    npm test -s
    ```
