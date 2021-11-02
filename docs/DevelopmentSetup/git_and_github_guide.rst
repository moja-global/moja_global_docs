.. _DevelopmentSetup:

Git and Github guide
====================

This guide is to help new contributors setup git, github and navigate
their way through making contributions to moja global repositories. It
covers the entire process of contributing right from installing git to
opening pull requests.

Setup this project using Git
----------------------------

Before setting up this project using Git make sure you have installed
and configured git by following the instructions `here`_.

Fork and Clone this project
---------------------------

-  In your browser, visit https://github.com/moja-global/FLINT. In the
   upper left corner, there is a **Fork** button. Please click on it to
   create a fork/copy of the repository on your profile.

\* In the terminal screen, clone this repo by running the command where
``your-username`` represents your Github username. :

::

   git clone https://github.com/<your-username>/FLINT/

\* Enter into the newly created project folder by running the command :

::

   cd FLINT

\* Configure upstream for the fork so that git can sync work from the
upstream if it is updated by running the command :

::

   git remote add upstream https://github.com/moja-global/FLINT/

\* Check if upstream is configured by running the command and check if
upstream is shown or not. :

::

   git remote -v

\* Make sure you've switched to the ``develop`` Branch for the FLINT Installation to be updated, it consists of all the latest changes. :

::

   git checkout develop

-  Now, the project is setup using Git. Please carry on with
   instructions on how to set this up on `Windows`_ or `Linux`_ here.
   You can revisit this section when you are ready to make a
   contribution.

Claim an issue
--------------

This section will demonstrate how to claim an issue to work on using
botmojaglobal.

To work on an issue, claim it by adding a comment with
``@botmojaglobal claim`` to the issue thread. botmojaglobal is a GitHub
workflow bot forked from the `zulipbot`_; it will assign you to the
issue and label the issue as ``in progress``. Some additional notes:

-  You can only claim issues with the ``Good for newcomers`` or
   ``Help Wanted`` labels. botmojaglobal will give you an error if you
   try to claim an issue without one of those labels.
-  Please feel free to ask questions on how to approach the issue or if
   the tests are failing. The maintainers/reviewers will try to get back
   to you as soon as possible. You can reach us on the moja-global
   `slack`_, or through Github.
-  If your pull request has some requested changes, after working on it
   don't forget to leave a comment asking for a review since the
   reviewers aren't notified when a pull request is updated.

Make a contribution
-------------------

This section will show you step-by-step how to make a contribution to
FLINT using git.

-  FLINT stable branch is **develop**. Releases are scheduled
   periodically when codebase is production-ready and the ``develop``
   branch is merged into the ``master`` branch.

.. _here: https://support.atlassian.com/bitbucket-cloud/docs/install-and-set-up-git/
.. _Windows: windows_installation.html
.. _Linux: docker_installation.html
.. _zulipbot: https://github.com/zulip/zulipbot/
.. _slack: https://mojaglobal.slack.com
