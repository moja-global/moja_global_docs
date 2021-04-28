.. _DevelopmentSetup:

Windows Installation
####################

This section guides first-time contributors through installing FLINT development environment.

Before proceeding further, make sure you have setup the project using Git by following our guide `Git and GitHub Guide <git_and_github_guide.html>`_.
Also make sure you have the following prerequisites setup -

Prerequisites
-------------
* `Cmake <../prerequisites/cmake.html>`_
* `Visual Studio <../prerequisites/visual_studio.html>`_
* `Vcpkg <../prerequisites/vcpkg.html>`_

Now that you have all the necessary prerequisites, you can proceed with the Installation.

Using vcpkg to install required libraries
-----------------------------------------

Start a command shell in the Vcpkg repository folder (that you had cloned earlier) and use the following commands:

::

    # bootstrap
    bootstrap-vcpkg.bat

    # install packages
    vcpkg.exe install boost-test:x64-windows boost-program-options:x64-windows boost-log:x64-windows turtle:x64-windows zipper:x64-windows poco:x64-windows libpq:x64-windows gdal:x64-windows sqlite3:x64-windows boost-ublas:x64-windows fmt:x64-windows libpqxx:x64-windows

.. figure:: ../images/installation_vs2019_flint.example/Step1b.png
  :width: 600
  :align: center
  :alt: Installing required packages using vcpkg in Command Prompt

  Installing required packages using vcpkg in Command Prompt

Using cmake to build the project
--------------------------------

.. note::
   Please make sure that you have checked out to the ``Develop`` Branch for the FLINT Installation. You may refer to our `Git and GitHub Guide <git_and_github_guide.html#make-a-contribution>`_ for instructions on how to switch to develop branch.
Once this has completed, start a command shell in your FLINT repository folder. Now use the following commands to create the Visual Studio solution:

::

    # Create a build folder under the Source folder
    cd Source
    mkdir build
    cd build

    # from ..\moja\FLINT\source\build
    # now create the Visual Studio Solution (2019)
    cmake -G "Visual Studio 16 2019" -DCMAKE_INSTALL_PREFIX=..\..\.. -DVCPKG_TARGET_TRIPLET=x64-windows -DENABLE_TESTS=OFF -DENABLE_MOJA.MODULES.ZIPPER=OFF -DCMAKE_TOOLCHAIN_FILE=..\..\..\vcpkg\scripts\buildsystems\vcpkg.cmake ..

    # OR Visual Studio Solution (2017)
    cmake -G "Visual Studio 15 2017" -DCMAKE_INSTALL_PREFIX=..\..\.. -DVCPKG_TARGET_TRIPLET=x64-windows -DENABLE_TESTS=OFF -DENABLE_MOJA.MODULES.ZIPPER=OFF -DCMAKE_TOOLCHAIN_FILE=..\..\..\vcpkg\scripts\buildsystems\vcpkg.cmake ..

.. note::
   All paths used below with ``C:\Development\moja-global`` will need to be modified to match your system build location of the moja project.

Running the project
-------------------

.. figure:: ../images/installation_vs2019_flint.example/Step4.png
  :width: 600
  :align: center
  :alt: Running ``moja.cli.exe`` in Visual Studio Debugging All properties page

  Running ``moja.cli.exe`` in Visual Studio Debugging All properties page

We are running the ``moja.cli.exe`` from the moja.FLINT project here. In order to make edits to the Visual Studio Solution we can use the CMake GUI.

Edit solution using CMake GUI
-----------------------------

* Launch the CMake GUI
* In the ``Where to build the binaries`` field click ``Browse Build…`` and select the folder you created above (i.e. ``C:\Development\moja-global\FLINT\Source\build``). The ``Where is the source code:`` field should update, if not, set it correctly.
* You should be able to edit any CMake setting now (i.e. ENABLE flags like ``ENABLE_TESTS``), then click ``Configure`` – assuming all libraries and required software has been installed you should have no errors. Now click ``Generate`` and the Solution with adjustments should be ready to load into Visual Studio.


FLINT Core Installation Video Tutorial
--------------------------------------

The above steps for installation of FLINT on Windows with Visual Studio can also be followed along with the video tutorial:

.. raw:: html 

  <div
  style="padding-bottom:56.25%; position:relative; margin-bottom: 2em; display:block; width: 100%">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BmHltWrxCTY" title="FLINT Core on Visual Studio 2019" frameborder="0" allowfullscreen="" style="position:absolute; top:0; left: 0"></iframe>
  </div>