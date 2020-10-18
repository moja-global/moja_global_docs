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
    vcpkg.exe install boost-test:x64-windows boost-program-options:x64-windows boost-log:x64-windows turtle:x64-windows zipper:x64-windows poco:x64-windows libpq:x64-windows gdal:x64-windows sqlite3:x64-windows boost-ublas:x64-windows

Using cmake to build the project
--------------------------------

Once this has completed, start a command shell in your FLINT repository folder. Now use the following commands to create the Visual Studio solution:

::

    # Create a build folder under the Source folder
    cd Source
    mkdir build
    cd build

    # now create the Visual Studio Solution (2019)
    cmake -G "Visual Studio 16 2019" -DCMAKE_INSTALL_PREFIX=C:/Development/Software/moja -DVCPKG_TARGET_TRIPLET=x64-windows -DENABLE_TESTS=OFF -DENABLE_MOJA.MODULES.ZIPPER=OFF -DCMAKE_TOOLCHAIN_FILE=c:\Development\moja-global\vcpkg\scripts\buildsystems\vcpkg.cmake ..

    # OR Visual Studio Solution (2017)
    cmake -G "Visual Studio 15 2017" -DCMAKE_INSTALL_PREFIX=C:/Development/Software/moja -DVCPKG_TARGET_TRIPLET=x64-windows -DENABLE_TESTS=OFF -DENABLE_MOJA.MODULES.ZIPPER=OFF -DCMAKE_TOOLCHAIN_FILE=c:\Development\moja-global\vcpkg\scripts\buildsystems\vcpkg.cmake ..
