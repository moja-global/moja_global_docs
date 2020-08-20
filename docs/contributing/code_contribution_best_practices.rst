.. _contributing:

Code Contribution Best Practices
################################

This guide is to inform new contributors about the best practices followed by moja global. Before making any contribution please go through these guidelines to ensure your contribution can be merged with minimal changes.

Commit Guidelines
-----------------

* Make sure your commit is passing all the tests. If your commit is failing tests then please try to fix the same commit instead of making a new commit by using `git --amend`
* Every commit should be directed to solve a single problem instead of trying to solve multiple issues at once. This encourages simplicity and also makes it easier for the reviewers to review.
* If the code introduced in the commit decreases the coverage/requires tests, don't forget to add them too.

Although it’s encouraged to make commits following these guidelines but incase you missed, you can always fix your history using `git rebase -i`.

Commit Message Guidelines
----------------------------

* Keep the commit message short but concise explaining your changes and the problem you are trying to solve.
* Try to write the commit messages in an imperative tone for example:- 'Fix', 'Update', 'Add' instead of 'Fixed', 'Updated', 'Added'.
* Reference the issue solved in the commit message, for example:- `Fixes #8293: Add login api unit tests`. This will automatically close the issue referenced when your pull request gets merged.

Code Style & Conventions
------------------------

This section will focus on the style guidelines and conventions used by moja global across its repositories.

Depending on the language of the repository you are working on, we have an array of tools and checks to ensure that the Code Style is not violated to promote further maintainability of code.

We encourage you to add the mentioned tools as plugins in your editor.

- C++ Repositories (FLINT/):
- Python Repositories ():
- Javascript Repositories ()
