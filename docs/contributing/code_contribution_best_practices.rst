.. _contributing:

Code Contribution Best Practices
================================

This guide is to inform new contributors about the best practices
followed by moja global. Before making any contribution please go
through these guidelines to ensure your contribution can be merged with
minimal changes.

Commit Guidelines
-----------------

-  Make sure your commit is passing all the tests. If your commit is
   failing tests then please try to fix the same commit instead of
   making a new commit by using ``git --amend``
-  Every commit should be directed to solve a single problem instead of
   trying to solve multiple issues at once. This encourages simplicity
   and also makes it easier for the reviewers to review.
-  If the code introduced in the commit decreases the coverage/requires
   tests, don't forget to add them too.

Although it’s encouraged to make commits following these guidelines but
in case you missed, you can always fix your history using
``git rebase -i``.

Commit Message Guidelines
-------------------------

-  Keep the commit message short but concise explaining your changes and
   the problem you are trying to solve.
-  Try to write the commit messages in an imperative tone for example:-
   'Fix', 'Update', 'Add' instead of 'Fixed', 'Updated', 'Added'.
-  Reference the issue solved in the commit message, for example:-
   ``Fixes #8293: Add login api unit tests``. This will automatically
   close the issue referenced when your pull request gets merged.

Developer Certificate of Origin
-------------------------------

moja global follows `Developer Certificate of Origin(DCO)`_ as a method
to certify that the contribution you have submitted was created in whole
or in part by you and you have the right to submit it under the open
source license to moja global.

To apply this, please sign off all your commit messages with a line like
this:

``Signed-off-by: Random J Developer <random@developer.example.org>``

Alternatively, you may also add the ``--signoff`` flag to the
``git commit`` command that will automatically add this line to your
commit message.

Code Style & Conventions
------------------------

This section will focus on the style guidelines and conventions used by
moja global across its repositories.

Depending on the language of the repository you are working on, we have
an array of tools and checks to ensure that the Code Style is not
violated to promote further maintainability of code.

We encourage you to add the mentioned tools as plugins in your editor.

.. _Developer Certificate of Origin(DCO): https://developercertificate.org/

-  **C++ Repositories**:

   moja global follows the C++ style guide developed by Google for their
   open-source projects. The google style guide is aimed at enable
   coders to utilise the power of C++ while at the same time managing
   the potential complexity that can arise when coding in C++.

   The style guide can be found at:
   https://google.github.io/styleguide/cppguide.html

   It is possible that exceptions to the google style guide may be
   specified, in which case they will be listed here. Currently there
   are no exceptions.

   -  Coding enforcement: We know that the style guides are long and
      detailed and not always easy to adhere to. As such, the intention
      is to use `Clang-Tidy`_ as a tool to check and correct code
      formatting as determined by the Google C++ style guide. This will
      be implemented as an automated check through the Continuous
      Integration system.

-  **Python Repositories**:

   moja global follows the Python Style guide PEP8 that provides coding
   conventions for Python code. It is fairly common for Python code to
   follow this style guide. It’s a great place to start since it’s
   already well-defined.

   This guide can be found at :
   https://www.python.org/dev/peps/pep-0008/

   -  Coding enforcement: In order to enforce the PEP8 conventions along
      with error detection, `Pylint`_ as a tool can be used and can be
      integrated with your editor as well. This will be implemented as
      an automated check through the Continuous Integration system.

Writing Documentation
=====================

Whenever making a contribution, please add relevant documentation to
support your contribution. You may also refer to this section for a
guide on how to improve/add documentation for moja global. There are
five levels of documentation under moja global. Depending on your
contribution, you may choose to change docs in one or more of these
levels:

Documentation in the codebase
------------------------------

Whenever making a significant code change like adding a new function, it
is recommended to add documentation for the same in the codebase itself
in form of comments.

-  Before commenting in the code try to clarify the code with `better
   naming and structuring`_.
-  Use comments mainly to provide context to the reader of the code
-  Ensure comments are easy to maintain

Documentation in Markdown files
-------------------------

Whenever adding a contribution that requires future contributors to
refer that for installation and proper development of the repository, it
is recommended to include the contribution supporting docs in the
repository as ``.md`` files.

You may choose to include it in the ``README.md`` file if the change
requires immediate attention or you may make separate ``.md`` files as
per the guidelines below.

.. _Clang-Tidy: https://clang.llvm.org/extra/clang-tidy/
.. _Pylint: https://www.pylint.org/
.. _better naming and structuring: https://agoldis.medium.com/how-to-document-source-code-responsibly-2b2f303aa525

-  Modify the ``README.md`` file for documentation that changes the
   quick installation process, usage or description of the project.
-  Use separate md-files for documentation that needs change in any of
   the following :

   -  How-To information
   -  Plans
   -  Procedures
   -  Governance documents

-  Submit changes using a pull-request that will be reviewed by
   maintainers.

Documentation (readthedocs)
===========================

If the proposed contribution requires a change in the documentation that
you are currently reading on readthedocs, then follow these steps to
make the changes.

-  Fork and clone this docs repository from `here`_.
-  Since readthedocs follows ``.rst`` file structure, please make sure
   the format of your documentation is right.
-  Submit a pull request under the above mentioned repository for the
   same. You may also check how the documentation build looks under the
   Pull requests checks tab.

Documentation in the repository wiki
====================================

Use the repository wiki for information that can be changed by all
collaborators without review, including

   -  Tutorials
   -  Explanations
   -  Reference Information

-  Make changes and commit directly to the wiki

Since this mode of adding documentation does not require any review, we
urge you to proof-read and make sure the documentation added is accurate
and simple enough to understand.

Documentation in Google Docs-files
==================================

If your contribution involves changes in the following, you may change
the Google Docs for the collaborative development of documents (text
equivalent of features branches), including

   -  Science Designs
   -  Architecture
   -  Strategy

You may make changes/suggestions in line with the guidelines provided in
this `template document`_. The maintainer then may decide to
accept/reject the suggestions offered.

Documentation in PDF-files
==========================

If your contribution involves changes in the following, you may change
the PDF-files for documentation (text equivalent of a release),
including

   -  Science Designs
   -  Architecture
   -  Strategy
   -  Meeting notes

You may suggest changes to the document maintainer. Since these PDF
files are released on a version basis from the Google Doc equivalent
files, if there are any errors in the current PDF the changes pointed
out by you will only be released in the next version.

.. _here: https://github.com/moja-global/moja_global_docs
.. _template document: https://docs.google.com/document/d/1feo9G91bbjth9RZ4606Rag4tAdRxuYpfnlWecs-gbbY/edit?usp=sharing
