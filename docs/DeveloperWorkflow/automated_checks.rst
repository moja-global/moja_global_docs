.. _DeveloperWorkflow:

Automated Checks for pull requests
==================================

In order to maintain the code quality and coverage of our repositories,
moja global deploys a series of tools. These tools include our
Continuous Integration Setup that runs a complete test suite, Automated
Code quality checks as well as Coverage tracking tools.

This section focuses on how these automated tests are setup and how may
they be configured on our GitHub repositories. Currently only the
following checks are available in our `FLINT.data_processing`_
repository.

Continuous Integration
----------------------

moja global uses `GitHub Actions`_ for Continuous Integration. GitHub
Actions creates an environment based on the Operating System of your
choice (Linux in our case) and runs our test suite. This Continuous
Integration script is triggered by every pull request and only passes
when all the tests run successfully. This script also uploads our
coverage report to `Codecov`_ for tracking the coverage compared to our
base coverage percentage.

-  In order to view the pull request build, please click on the
   **Details** link of the ``Python application / build (push)`` tab.

.. figure:: ../images/all_checks.png
   :alt: GitHub pull request Checks
   :align: center
   :width: 600px

   GitHub pull request Checks

-  In the case where tests fail, we can debug the problem from going
   through the console output as displayed here.

.. figure:: ../images/build.png
   :alt: GitHub actions Pull Request Build Console
   :align: center
   :width: 600px

   GitHub actions Pull Request Build Console

\* After analysis of the test failure, you may then try to debug the
test locally as well by running the command:-:

::

   python -m unittest discover tests -v

-  Sometimes tests may also fail if your pull request is not rebased to
   the latest master. So it is recommended to take a rebase before
   creating the pull request.
-  If you are still facing issues with the test failure, please reach
   out to the maintainers of the repository.

Code Coverage Check
-------------------

moja global uses `Codecov`_ as a tool for tracking coverage of our
application. As mentioned above, the Continuous Integration script
uploads the coverage report to Codecov. Codecov then compares the
coverage percentage to that of our base pull request and asserts if the
Code coverage has increased/decreased. After evaluation, the CodeCov bot
comments on the pull request with the details of our pull request
coverage.

If the coverage percentage remains same or higher than before, the check
passes. Else if the percentage becomes lower, the check fails.

-  In order to debug and understand the failure of this check you may
   click on the **Details** tab of the ``codecov/project`` check under
   Checks tab.

.. figure:: ../images/all_checks.png
   :alt: GitHub pull request Checks
   :align: center
   :width: 600px

.. _FLINT.data_processing: https://github.com/moja-global/FLINT.Data_Preprocessing
.. _GitHub Actions: https://github.com/features/actions
.. _Codecov: https://codecov.io/
