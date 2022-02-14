.. _DevelopmentSetup:

Environment: Visual Studio (Remote Containers)
==============================================

In the Visual Studio environment using Remote Containers option for
setting up FLINT.example, the options to run, develop and debug the
repository code are available. Here remote containers are available in
Visual Studio as an extension and can be installed with the help of the
link mentioned in the prerequisites section.

Prerequisites
-------------

-  `Visual Studio`_
-  `Remote - Container (VS Extension)`_

Others extensions may be required, please follow instructions during VS
Code startup. Extensions required during development will be installed
in the container (listed below).

Building the Project
--------------------

With these extensions installed, on startup, VS Code should ask if you
want to open the project in a Container - OR you can press ``F1`` and
select ``Remote-Containers: Open folder in Container...``

The VS Code project has some ``launch.json`` settings in place (in the
``.vscode`` folder), these can run both the base and rothc samples. It
is possible to debug into the moja.flint libraries by loading on of the
``.cpp/.h`` files and setting a breakpoint - OR stepping into a method
using the debugger

To build the project the cmake and C++ extensions will be required.
These have been specified in the ``devcontainer.json`` file. To build
the library use Cmake Configure, Build and Install.

::

   "extensions": [
       "ms-vscode.cpptools",
       "austin.code-gnu-global",
       "twxs.cmake",
       "ms-vscode.cmake-tools"
   ]

Once the project opens the folder in the dev container, use the cmake
commands to configure and build the project. Once this is done you
should be ready to run/debug one of the samples.

**NOTE** : The libraries require a slightly different paths to work
inside the dev-container, so there is a new version of the library
configs for VS Code. These commands will work from the terminal in the
running container after cmake has been successful.

::

   # start in the correct folder
   cd /workspaces/FLINT.example/Run_Env

   # sample
   moja.cli --config config/point_example.json --config config/libs.base.vscode.json  --logging_config logging.debug_on.conf

   # rothc
   moja.cli --config config/point_rothc_example.json --config config/libs.base_rothc.vscode.json  --logging_config logging.debug_on.conf

   # Chapman Richards - forest point
   moja.cli --config config/point_forest_config.json --config config/libs.gdal.chaprich.vscode.json

   # Chapman Richards - forest spatial
   moja.cli --config config/forest_config.json --config config/libs.gdal.chaprich.vscode.json --config_provider config/forest_provider.json

.. _Visual Studio: https://docs.moja.global/en/latest/prerequisites/visual_studio.html
.. _Remote - Container (VS Extension): https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
