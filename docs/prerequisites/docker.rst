.. _prerequisites:

Setup Docker (for Linux based variants only)
############################################

In-order to setup FLINT by using docker containers, please follow the instructions below:

* Open a terminal window (ctrl+alt+T) and type the following to update the default repositories:
::

    sudo apt-get update

* Now inorder to install docker, type the following command:
::

    sudo apt install docker.io

* The Docker service needs to be setup to run at startup. To do so, type in each command followed by enter:
::

    sudo systemctl start docker
    sudo systemctl enable docker

* Verify if the docker installation is successful by running the following command. If the following command does not return the version of the docker, your installation has been unsuccesful please try again.
::

    docker --version
