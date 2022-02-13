.. _DeveloperWorkflow:

Reviewing a contribution
========================

moja global welcomes all contributors to review each others pull
requests and suggest changes. If you have been contributing to moja
global repositories, we highly encourage you to review pull requests as
well. Here's a guide on how to get started!

Quoting GitHub documentation: "Reviews allow for discussion of proposed
changes and help ensure that the changes meet the repository’s
contributing guidelines and other quality standards.".

As an open source organisation, reviewing pull requests can help to
build a deeper understanding of the codebase and also incorporate good
code practices.

General Guidelines for reviewing
--------------------------------

-  While suggesting changes in the pull requests, the key is to direct
   your suggestions towards the code and not at the **author**. This promotes
   a healthy discussion instead of making someone feel that their code
   wasn't up to the mark.
-  Make sure the pull request is rebased and is in sync with the latest
   target branch. For providing the author instructions on how to do
   that, please direct them to our `pull request section of Git and
   GitHub guide`_.
-  Make sure the pull request is directed to the correct target branch.
-  Make sure the feature branch, the commit message and the pull request
   title is concise and appropriate. For providing the author
   instructions on how to do that, please direct them to our `commit
   message section of Code Contribution Best Practices`_.
-  Make sure the commits added in the pull request are clean and few in
   number. This will help us in keeping the commit history clean.
-  If the number of files changed in a pull request is quite high, it
   might be a good idea to ask the author to split the pull request into
   smaller ones if possible.
-  Check whether all PR checks are passing or not. If not, you may also
   help the author debug these checks and help them contribute.

Things to look out for in a pull request
----------------------------------------

Performance
~~~~~~~~~~~

If the code changes in the pull request can be optimised in terms of
Time/Memory Complexity, feel free to suggest these changes in the pull
request. You may use benchmarking tools to find out the difference in
Execution Time of the PR code vs the proposed changes.

Code Style and conventions
~~~~~~~~~~~~~~~~~~~~~~~~~~

If the code is not properly formatted or doesn't follow the `style guide
here`_ , please make sure to suggest changes in the pull request for the
same. Following code style and conventions promotes readability and
maintainability of code in the longer run.

.. _pull request section of Git and GitHub guide: https://docs.moja.global/en/latest/DevelopmentSetup/git_and_github_guide.html#make-a-contribution
.. _commit message section of Code Contribution Best Practices: https://docs.moja.global/en/latest/contributing/code_contribution_best_practices.html#commit-message-guidelines
.. _style guide here: https://docs.moja.global/en/latest/contributing/code_contribution_best_practices.html#code-style-conventions

Documentation
=============

If the code introduces new Features or improves upon existing features
that might require documentation to support the change, then don't
forget to suggest changes in the pull request to add the same. Proper
documentation promotes clarity and makes it easier for future
contributors to work on the same feature. For a more detailed guide on
how documentation is to be added for any change, please checkout
`documentation section here`_.

Tests
=====

If the code requires additional tests to support its validity, please
make sure that proper tests have been added. Also make sure the tests
added cover edge cases and test various scenarios instead of the most
commonly used ones.

Design
======

If the code changes introduce design changes in terms of UI/UX, please
ask for screenshots/gif supporting this change. Feel free to ask for
screenshots on devices with different screen sizes such as mobile/tablet
view to get a better idea if the design promotes responsiveness.
Responsive design helps the application to be more accessible to people
thus reaching a wider audience.

What to do if you are not sure
------------------------------

As a reviewer, it might be difficult sometimes to figure out whether the
pull request changes will work or not. So in times of doubt, the best
way to review is to checkout the contributors branch and manually test
the pull request. Here is detailed guide on `manual testing of a pr`_.

.. _documentation section here: https://docs.moja.global/en/latest/contributing/code_contribution_best_practices.html#writing-documentation
.. _manual testing of a pr: https://docs.moja.global/en/latest/DeveloperWorkflow/manual_testing_pr.html