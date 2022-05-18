.. _prerequisites:

Vcpkg Installation
==================

Finally, we need a C++ package manager to acquire and install
third-party C++ libraries used by FLINT. Vcpkg maintains a catalog of
more than 1,900 libraries that have been tested against Visual Studio
2019 and 2017, and builds these libraries during compilation to ensure
compatibility with the FLINT source code. A fork of the original Vcpkg
package has been created under moja global for the FLINT required
libraries.

To build the libraries please follow the following steps:

* Clone the Vcpkg repository in the moja-global folder from `here <https://github.com/moja-global/vcpkg>`__.

* Start ``cmd`` in the vcpkg repository folder and run the following commands:

::

    # bootstrap
    bootstrap-vcpkg.bat

    # install packages
    vcpkg.exe install boost-test:x64-windows boost-program-options:x64-windows boost-log:x64-windows turtle:x64-windows zipper:x64-windows poco:x64-windows libpq:x64-windows gdal:x64-windows sqlite3:x64-windows boost-ublas:x64-windows fmt:x64-windows libpqxx:x64-windows

  
Note: The process may take one to two hours, depending on the specifications of your system.
