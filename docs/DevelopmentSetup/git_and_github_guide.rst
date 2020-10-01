.. _DevelopmentSetup:

Git and Github guide
####################

This guide is to help new contributors setup git, github and navigate their way through making contributions to moja global repositories.
It covers the entire process of contributing right from installing git to opening pull requests.

Setup this project using Git
----------------------------

Before setting up this project using Git make sure you have installed and configured git by following the instructions `here <https://support.atlassian.com/bitbucket-cloud/docs/install-and-set-up-git/>`_.


Fork and Clone this project
----------------------------

* In your browser, visit https://github.com/moja-global/FLINT. In the upper left corner, there is a **Fork** button. Please click on it to create a fork/copy of the repository on your profile.
* In the terminal screen, clone this repo by running the command where ``your-username`` represents your Github username.
::

    git clone https://github.com/<your-username>/FLINT/

* Enter into the newly created project folder by running the command
::

    cd FLINT

* Configure upstream for the fork so that git can sync work from the upstream if it is updated by running the command
::

    git remote add upstream https://github.com/moja-global/FLINT/

* Check if upstream is configured by running the command and check if upstream is shown or not.
::

    git remote -v

* Now, the project is setup using Git. Please carry on with instructions on how to set this up on `Windows <windows_installation.html>`_ or `Linux <docker_installation.html>`_ here. You can revisit this section when you are ready to make a contribution.

Claim an issue
--------------

This section will demonstrate how to claim an issue to work on using botmojaglobal.

To work on an issue, claim it by adding a comment with ``@botmojaglobal claim`` to the issue thread. botmojaglobal is a GitHub workflow bot forked from the `zulipbot <https://github.com/zulip/zulipbot/>`_; it will assign you to the issue and label the issue as ``in progress``. Some additional notes:

* You can only claim issues with the ``Good for newcomers`` or ``Help Wanted`` labels. botmojaglobal will give you an error if you try to claim an issue without one of those labels.

* Please feel free to ask questions on how to approach the issue or if the tests are failing. The maintainers/reviewers will try to get back to you as soon as possible. You can reach us on the moja-global `slack <https://mojaglobal.slack.com>`_, or through Github.

* If your pull request has some requested changes, after working on it don't forget to leave a comment asking for a review since the reviewers aren't notified when a pull request is updated.

Make a contribution
-------------------

This section will show you step-by-step how to make a contribution to FLINT using git.

* FLINT stable branch is **develop**. Releases are scheduled periodically when codebase is production-ready and develop is merged into master.
  develop branch is the latest updated branch and should be used as a base branch for development. All pull requests should be against develop branch only.
  Make sure you are in the project directory and checkout to develop branch with this command.
::

    git checkout develop

* Choose an issue to work on. We have issues specifically labelled ``Good for newcomers`` and ``Help Wanted`` for new contributors to claim. Before starting to work on any issue, make sure you have claimed it.
* Create a new feature branch from develop branch to work on. The feature branch should have a short name that is relevant to the issue that you will be working on. For example, if you are working on improving documentation in the readme for adding a badge, the branch can be name ``add_badge_readme``.
::

    git checkout -b <feature-branch-name>

* Work on the task. Add tests and documentation for your changes if required. When you are done with your changes, you can check all the files changes using the following command.
::

    git status

* Add the relevant files and commit the changes. Please make sure that only those files required for this contribution are added. You can later modify your pull request to add other files as per your requirement.
::

  git add <file> <file> ...

* While committing the changes, make sure your commit message follows our commit-message guidelines mentioned here.
::

  git commit -m "relevant commit message"

* Make sure your fork is in sync with the latest changes of develop. For this rebase your branch against the latest develop by following the commands below.
::

    git checkout develop
    git pull origin develop
    git checkout <your-branch-name>
    git rebase develop

* Incase there are any merge conflicts on running the rebase command, follow this guide to resolve them.
* You can now push your changes onto your feature branch using the command below.
::

  git push origin <your-branch-name>


Create a pull request for your contribution
-------------------------------------------

You can now create a pull request to get your changes merged into the upstream develop branch. Follow this step-by-step guide to create a pull request on Github.

* Navigate to the pull requests tab under FLINT. Click on the **New pull request** button. Compare your feature branch against the **develop** branch to create the pull request. Fill the pull request template by linking the issue number solved.
* Incase your pull request is a work in progress, don't forget to add "WIP" in the title of your pull request to let the maintainers know that the pull request is not ready for review yet.
* Please be patient, someone from our team will review your pull request shortly and provide feedback. Incase there are changes requested, you can follow the section below on how to update/modify your pull request.
* Also make sure that your pull request is in sync with the latest develop at all times.

NOTE: Don't forget to get credits for your contributions once it gets merged by following this guide `here <contributing/index>`_.

Modify your pull request
------------------------

Incase your pull request needs further changes, you can update your pull request by following the steps below.

* Checkout on your feature branch of the pull request.
* Add the changes as required and commit using the amend flag. This will update the last commit thus keeping the commit history clean and within a single commit.
::

    git add <file1> <file2>
    git commit -amend

* Push this onto your feature branch but this time with force flag. This will update the pull request automatically. The reviewer won't be notified about this updation, so leave a comment in your pull request if you want a review.
::

  git push origin <your-branch-name> --force
