.. _DevelopmentSetup:

Docker Installation (for Linux Variants)
########################################

This section guides first-time contributors through installing FLINT development environment.

Before proceeding further, make sure you have setup the project using Git by following our `Git and GitHub Guide <git_and_github_guide.html>`_.
Also make sure you have the following prerequisites setup -

Prerequisites
-------------

* `Docker <../prerequisites/docker.html>`_

Now that you have all the necessary prerequisites, you can proceed with the Installation.

Setup Docker Container
----------------------

Containers are a simple way to build FLINT and all required dependencies. Before setting up, it is recommended to install the `FLINT.example <FLINT.example_installation.html>`_ repository first.

Building the containers
-----------------------

The build has been split into two Dockerfiles, the first to get and build required libraries. The second to get and build the moja FLINT libraries and CLI program.
::

    # working from the examples folder "flint/tree/master/Examples/docker"

    # build the base
    docker build -f Dockerfile.base.ubuntu.18.04 --build-arg NUM_CPU=4 -t moja/baseimage:ubuntu-18.04 .

    # build the flint container
    docker build  -f Dockerfile.flint.ubuntu.18.04 --build-arg NUM_CPU=4 --build-arg FLINT_BRANCH=master -t moja/flint:ubuntu-18.04 .

    docker build  -f Dockerfile.flint.ubuntu.18.04 --build-arg NUM_CPU=4 --build-arg GITHUB_AT=XXXX --build-arg FLINT_BRANCH=master -t moja/flint:ubuntu-18.04 .

How to use the final container depends on the task. However, the following command will bash into the flint container and allow you to use the CLI program.
::

    # run bash on the flint container
    docker run --rm -ti moja/flint:ubuntu-18.04 bash

Once in, you should be able to run the CLI program moja.cli
::

    # run CLI
    moja.cli --help

That should respond with the following options:

Allowed options
---------------

::

  General options:
    -h [ --help ]          produce a help message
    --help-section arg     produce a help message for a named section
    -v [ --version ]       output the version number

  Commandline only options:
    --logging_config arg   path to Moja logging config file
    --config_file arg      path to Moja run config file
    --provider_file arg    path to Moja data provider config file

  Configuration file options:
    --config arg           path to Moja project config files
    --config_provider arg  path to Moja project config files for data providers
