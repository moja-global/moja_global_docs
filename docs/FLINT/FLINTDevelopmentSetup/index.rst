.. _DevelopmentSetup:

FLINT Development Setup
=======================

This section guides first-time contributors through installing FLINT
development environment on Windows and Ubuntu.

The recommended method for installing the FLINT development environment
is on Windows using cmake, vcpkg and Visual Studio 2017 or 2019. In
order to setup FLINT on Linux based systems, Docker containers are
preferred. This method creates containers which are a simple way to
build FLINT and all required dependencies.

Before Setting Up FLINT
----------------------------

-  Please make sure that all the prerequisites required have been
   installed and configured correctly.
-  The `FLINT core repository`_ has been forked and cloned following the
   Git and Github guide `here`_.

Datasets for FLINT
----------------------------

After setting up FLINT, the next step can be to explore and run FLINT on
different datasets. We have a collection of publicly available
Opensource datasets for you to choose from and run on FLINT
`here <https://github.com/moja-global/Land_Sector_Datasets>`__.

These datasets have been used by many countries and are effective in
real-world scenarios. For each dataset information is provided on
content and license. Proper permissions have been cited for all the
datasets and we urge you to follow the license for every dataset before
proceeding to work with it.

If you have another dataset on your mind that would be beneficial for
FLINT, please feel free to reach out to us on info@moja.global to share
details about this dataset.

.. _FLINT core repository: https://github.com/moja-global/FLINT
.. _here: https://docs.moja.global/en/latest/DevelopmentSetup/git_and_github_guide.html#make-a-contribution

Build guides
----------------------------

moja global also hosts guides that are living documents which would be
updated form time to time. If you have any feedback or corrections,
please use the Google Docs below to leave your suggestions so they will
be included in the next version.

The guides are:

-  `Building moja base libraries`_
-  `Building moja FLINT libraries`_
-  `Building moja FLINT implementation`_

A guide on `moja FLINT implementations`_ is also under development

.. _Building moja base libraries: https://docs.google.com/document/d/1i6S0X0nTyxfJwn6KhGo9AahXOH1gBnTdwYdAxGchHsI/edit?usp=sharing
.. _Building moja FLINT libraries: https://docs.google.com/document/d/1jceIX1E7HOmzmLW6C-E6GDbMz9sxM-nIy90CbY463Lw/edit?usp=sharing
.. _Building moja FLINT implementation: https://docs.google.com/document/d/139-1Nc5AR0yhN--Jb0W_jIfzUasoItkt4dyYM3m19N4/edit?usp=sharing
.. _moja FLINT implementations: https://docs.google.com/document/d/185DrAQ9Tpg0XqwMt26ouzIDRKihJU0MZ2VUYX0L5Bys/edit?usp=sharing

Contents:

.. toctree::
  :maxdepth: 1

  git_and_github_guide
  windows_installation
  docker_installation
  FLINT.example_installation
