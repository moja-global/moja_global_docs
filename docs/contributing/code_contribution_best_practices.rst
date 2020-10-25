.. _contributing:

Code Contribution Best Practices
################################

This guide is to inform new contributors about the best practices followed by moja global. Before making any contribution please go through these guidelines to ensure your contribution can be merged with minimal changes.

Commit Guidelines
-----------------

* Make sure your commit is passing all the tests. If your commit is failing tests then please try to fix the same commit instead of making a new commit by using ``git --amend``
* Every commit should be directed to solve a single problem instead of trying to solve multiple issues at once. This encourages simplicity and also makes it easier for the reviewers to review.
* If the code introduced in the commit decreases the coverage/requires tests, don't forget to add them too.

Although it’s encouraged to make commits following these guidelines but incase you missed, you can always fix your history using ``git rebase -i``.

Commit Message Guidelines
----------------------------

* Keep the commit message short but concise explaining your changes and the problem you are trying to solve.
* Try to write the commit messages in an imperative tone for example:- 'Fix', 'Update', 'Add' instead of 'Fixed', 'Updated', 'Added'.
* Reference the issue solved in the commit message, for example:- ``Fixes #8293: Add login api unit tests``. This will automatically close the issue referenced when your pull request gets merged.

Developer Certificate of Origin
-------------------------------

moja global follows `Developer Certificate of Origin(DCO) <https://developercertificate.org/>`_ as a method to certify that the contribution you have submitted was created in whole or in part by you and you
have the right to submit it under the open source license to moja global.

To apply this, please sign off all your commit messages with a line like this:

``Signed-off-by: Random J Developer <random@developer.example.org>``

Alternatively, you may also add the ``--signoff`` flag to the ``git commit`` command that will automatically add this line to your commit message.

Code Style & Conventions
------------------------

This section will focus on the style guidelines and conventions used by moja global across its repositories.

Depending on the language of the repository you are working on, we have an array of tools and checks to ensure that the Code Style is not violated to promote further maintainability of code.

We encourage you to add the mentioned tools as plugins in your editor.

- **C++ Repositories**:

  moja global follows the C++ style guide developed by Google for their open-source projects. The google style guide is aimed at enable coders to utilise the power of C++ while at the same time managing the potential complexity that can arise when coding in C++.

  The style guide can be found at: https://google.github.io/styleguide/cppguide.html

  It is possible that exceptions to the google style guide may be specified, in which case they will be listed here. Currently there are no exceptions.

  - Coding enforcement: We know that the style guides are long and detailed and not always easy to adhere to. As such, the intention is to use `Clang-Tidy <http://clang.llvm.org/extra/clang-tidy/>`_ as a tool to check and correct code formatting as determined by the Google C++ style guide. This will be implemented as an automated check through the Continuous Integration system.


- **Python Repositories**:

  moja global follows the Python Style guide PEP8 that provides coding conventions for Python code. It is fairly common for Python code to follow this style guide. It’s a great place to start since it’s already well-defined.

  This guide can be found at : https://www.python.org/dev/peps/pep-0008/

  - Coding enforcement: In order to enforce the PEP8 conventions along with error detection, `Pylint <https://www.pylint.org/>`_ as a tool can be used and can be integrated with your editor as well. This will be implemented as an automated check through the Continuous Integration system.
