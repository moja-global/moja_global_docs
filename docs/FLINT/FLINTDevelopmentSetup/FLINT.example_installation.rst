.. _DevelopmentSetup:

FLINT.example
=============

The FLINT.example gives an example of how to build and run libraries
using the FLINT framework. It is recommended to practice running
simulations using FLINT.example repository after the FLINT core
installation is completed. This will help you to familiarise yourself
with FLINT and help you to understand how FLINT works.

The Docker file used here can be found in the ``Dockerfile`` file at the
root of the repository. This Docker file builds from the image
``mojaglobal/flint:bionic`` which can be found in docker hub.

There are 3 different environments listed in this document to build and
run the examples:

-  **Windows - Visual Studio 2019**: develop, run and debug
-  **Visual Studio Code**: develop, run and debug
-  **Docker**: run only

We currently have four different sample runs:

-  **Test Module sample** - Point level
-  **RothC sample** - Point level
-  **Chapman richards** - Point sample
-  **Chapman richards** - Spatial sample

The FLINT.example repository is available `here`_ under the moja global
organisation on GitHub. organisation on GitHub. Before proceeding to the instructions for
installing FLINT.example, please follow the following steps to clone
this repository on your fork:

::

   git clone https://github.com/<your-username>/FLINT.example.git

For more instructions on our GitHub fork, clone and pull request
practices, refer our `Git and GitHub Guide`_.

.. _here: https://github.com/moja-global/FLINT.Example
.. _Git and GitHub Guide: https://docs.moja.global/en/latest/DevelopmentSetup/git_and_github_guide.html#make-a-contribution

Contents:

.. toctree::
  :maxdepth: 1

  visual_studio_win_example
  visual_studio_example
  docker_installation_example
