.. _DevelopmentSetup:

Environment: Docker
###################

In the Docker environment option for setting up FLINT.example, only the run option is available.
In case you want to develop or debug the repository code, please switch to the Visual Studio environments.

Prerequisites
=============
* `Docker <../prerequisites/docker.html>`_

Building the docker
===================

::

      # from repository root folder
      cd Docker
      docker build --build-arg NUM_CPU=8 -t moja/flint.example:bionic .

Commands to run using docker - stock result written to screen and results files create (./Run_Env/*.csv):
::

    # from repository root folder
    docker run --rm -v $(pwd)/Run_Env:/usr/local/run_env -ti moja/flint.example:bionic bash -c "cd /usr/local/run_env/; moja.cli --config config/point_example.json --config config/libs.base.simple.json --logging_config logging.debug_on.conf"
    docker run --rm -v $(pwd)/Run_Env:/usr/local/run_env -ti moja/flint.example:bionic bash -c "cd /usr/local/run_env/; moja.cli --config config/point_rothc_example.json --config config/libs.base_rothc.simple.json --logging_config logging.debug_on.conf"

Commands to run moja from within the docker - stock result written to screen and results files create (./Run_Env/*.csv):
::

    docker run --rm -v $(pwd)/Run_Env:/usr/local/run_env -ti moja/flint.example:bionic bash

Then inside the running container:
::

    cd /usr/local/run_env/
    moja.cli --config config/point_example.json --config config/libs.base.simple.json --logging_config logging.debug_on.conf
    moja.cli --config config/point_rothc_example.json --config config/libs.base_rothc.simple.json --logging_config logging.debug_on.conf

Outputs
=======

The runs above will create output files. While Stock values are output to the screen, there will also be some simplace CVS files created with both Stock and Flux values for the simulation.
::

  Example_Point_Flux.csv
  Example_Point_Stock.csv
  Example_Rothc_Point_Flux.csv
  Example_Rothc_Point_Stock.csv
