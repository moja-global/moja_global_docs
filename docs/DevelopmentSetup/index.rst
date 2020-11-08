.. _DevelopmentSetup:

FLINT Development Setup
#######################

This section guides first-time contributors through installing FLINT development environment on Windows and Ubuntu.

The recommended method for installing the FLINT development environment is on Windows using cmake, vcpkg and Visual Studio 2017 or 2019. Inorder to setup FLINT on Linux based systems, Docker containers are preferred. This method creates containers which are a simple way to build FLINT and all required dependencies.

**Before Setting Up FLINT**

- Please make sure that all the prerequisites required have been installed and configured correctly.
- The repository has been forked and cloned following the Git and Github guide `here <git_and_github_guide.html>`_ .
- It is highly recommended to first setup the FLINT.example repository to get an overview of how FLINT works since the software might seem a bit complex at first sight. The instructions for setting up FLINT.example repository can be found `here <FLINT.example_installation.html>`_.

**Datasets for FLINT**

After setting up FLINT, the next step can be to explore and run FLINT on different datasets. We have a collection of publicly available Opensource datasets for you to choose from and run on FLINT `here <https://github.com/moja-global/Land_Sector_Datasets>`_.

These datasets have been used by many countries and are effective in real-world scenarios. For each dataset information is provided on content and license.
Proper permissions have been cited for all the datasets and we urge you to follow the license for every dataset before proceeding to work with it.

If you have another dataset on your mind that would be beneficial for FLINT, please feel free to reach out to us on info@moja.global to share details about this dataset.

**Working with Data**

Contents:

.. toctree::
  :maxdepth: 1

  git_and_github_guide
  windows_installation
  docker_installation
  FLINT.example_installation
