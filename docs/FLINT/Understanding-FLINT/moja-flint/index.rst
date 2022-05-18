Moja FLINT
======================

The FLINT is a fully modular system that integrates carbon and other
models with remote sensing data to produce greenhouse gas accounts for
the land sector. It aims to support developers, early implementers, and
power users by providing a detailed description of system operation.

The overall framework will be based on the simulation of events and
processes. We can therefore accommodate modules with variable time
steps. Key elements of the framework will include the overall
integration module, a transaction service, and individual modules that
are easily exchanged and modified. Each serves key functions such as the
representation of growth, decomposition, disturbances, forest management
actions, and so on. We will further describe other key elements such as
the management of the events stream, the data platform, and results from
processing capabilities.

This document set provides a high-level overview of the FLINT system and
its core components. These include:

.. toctree::
  :maxdepth: 1

  pools
  operations
  modules
  simulation_units
  local_domain
  synchronized_events
  temporal_distribution
