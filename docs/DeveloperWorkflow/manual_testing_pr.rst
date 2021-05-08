.. _DeveloperWorkflow:

Manually testing a pull request
###############################

This guide is aimed at both authors and reviewers of pull requests to properly test the pull request before merging.

* Checkout to the Pull Request branch by running this command where <author> is the GitHub username of the PR author
::

git clone https://github.com/<author>/<repository-name>/
git checkout <branch-name>

* Run the application locally and try to verify if the issue raised has been solved completely by the Pull Request changes.
* If the changes are design specific, try to test the PR in different screen sizes to check if the design is responsive.
* Always keep the console/debugger window open to catch any warnings/errors that might otherwise go unnoticed.
* If the application facilitates multiple user sign up, check with different users to catch any permission/security related issues.
