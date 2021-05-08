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

* Return to top level folder with ``cd ..``

.. figure:: ../images/installation_docker/step1_docker.png
  :width: 600
  :align: center
  :alt: Building the FLINT.example image using Docker

  Building the FLINT.example image using Docker

Commands to run using docker - stock result written to screen and results files create (./Run_Env/*.csv):
::

  # from repository root folder

  # For Linux
  docker run --rm -v $(pwd)/Run_Env:/usr/local/run_env -ti moja/flint.example:bionic bash -c "cd /usr/local/run_env/; moja.cli --config config/point_example.json --config config/libs.base.simple.json --logging_config logging.debug_on.conf"

  # For Windows
  docker run --rm -v %cd%/Run_Env:/usr/local/run_env -ti moja/flint.example:bionic bash -c "cd /usr/local/run_env/; moja.cli --config config/point_example.json --config config/libs.base.simple.json --logging_config logging.debug_on.conf"

For the RothC example, you may run this command:-

::

    # For Linux
    docker run --rm -v $(pwd)/Run_Env:/usr/local/run_env -ti moja/flint.example:bionic bash -c "cd /usr/local/run_env/; moja.cli --config config/point_rothc_example.json --config config/libs.base_rothc.simple.json --logging_config logging.debug_on.conf"

    # For Windows
    docker run --rm -v %cd%/Run_Env:/usr/local/run_env -ti moja/flint.example:bionic bash -c "cd /usr/local/run_env/; moja.cli --config config/point_rothc_example.json --config config/libs.base_rothc.simple.json --logging_config logging.debug_on.conf"

.. figure:: ../images/installation_docker/step2_docker.png
  :width: 600
  :align: center
  :alt: Running the examples using Docker

  Running the examples using Docker

Commands to run moja from within the docker - stock result written to screen and results files create (./Run_Env/*.csv):
::

    # For Linux
    docker run --rm -v $(pwd)/Run_Env:/usr/local/run_env -ti moja/flint.example:bionic bash

    # For Windows
    docker run --rm -v %cd%/Run_Env:/usr/local/run_env -ti moja/flint.example:bionic bash

Then inside the running container:
::

    cd /usr/local/run_env/
    moja.cli --config config/point_example.json --config config/libs.base.simple.json --logging_config logging.debug_on.conf
    moja.cli --config config/point_rothc_example.json --config config/libs.base_rothc.simple.json --logging_config logging.debug_on.conf


.. figure:: ../images/installation_docker/step2b_docker.png
  :width: 600
  :align: center
  :alt: Running the moja.cli within Docker

  Running the moja.cli within Docker

Outputs
=======

The runs above will create output files. While Stock values are output to the screen, there will also be some simplace CVS files created with both Stock and Flux values for the simulation.
::

  Example_Point_Flux.csv
  Example_Point_Stock.csv
  Example_Rothc_Point_Flux.csv
  Example_Rothc_Point_Stock.csv

The Output files created are visible in the below screenshot :-

.. figure:: ../images/installation_docker/step3a_docker.png
  :width: 600
  :align: center
  :alt: Output files created from runs

  Output files created from runs
