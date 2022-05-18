Modules
======================

What is a module?
-----------------

A module is a self-contained set of operations that determine the state
of, or change in, variables across a specified period for a single
Simulation Unit in direct response to event notifications from the FLINT
core system (Unit Controller). For example, the empirical forest growth
module includes all the operations required to simulate biomass
accumulation.

How do modules operate?
-----------------------

Each module reads (or is provided with – see Unit Controller)
information about the current state variables and the data required to
update the state variables, such as climate data or information about
disturbances to simulate. Each module then performs the required
calculations and returns information about the updates to apply to each
state variable and C pools. For state variables such as age or height,
modules can return the updated value, but for all carbon pools and other
fluxes, the module returns the proposed operations' array (sparse
matrix). This array will include information about the source pool, the
sink pool, and the amount (Mg ha-1 per time step) of the flux.
Module-specific metadata regarding units and time step size is also
required. This information is all returned to the Unit Controller.

In terms of the FLINT programming framework, there are internal and
external modules. The internal modules tend to be generic utility
modules, for example, for producing output tables. At the same time,
external modules are regionally or nationally specific. By using modules
and separating the generic and specific, FLINT's framework remains
highly flexible, and new modules can be 'plugged in' as they are
developed. Standard modules in FLINT

The FLINT includes six standard modules for simulating changes in forest
and crop systems, including changes in soil carbon. These modules each
run for all simulations at a monthly step interval (see Temporal
Distribution) and include:

-  Empirical forest growth module
-  Hybrid forest growth module
-  WOFOST crop growth module
-  Turnover module
-  Decomposition module
-  RothC soil carbon module

Modules for disturbance events
------------------------------

Disturbance events occur intermittently (rather than for every step in a
simulation) and affect carbon stocks. Disturbance events include natural
and anthropogenic events, including fire, harvesting, plowing, and
fertilizer application (Table 2). While disturbance events are modules
within FLINT, they are referred to separately as they are not run on
every simulation, as are the modules mentioned above. FLINT can use
tabular or spatial data to account for disturbance events as a minimum
FLINT needs the date of the disturbance and the disturbance type. Where
tabular data is used, information is also needed for the amount (or
proportion) affected, the units the disturbance event is reported in
(area, carbon, etc.), and any eligibility criteria (i.e., Simulation
Unit characteristics that the event is allowed to affect). We can use
this information to attribute the disturbance event to Simulation Units
using pre-determined criteria (e.g., randomly, weighted, or based on a
unit characteristic).

The following are disturbance events included in FLINT. Carbon pool
events directly affect one or more carbon pools, while non-carbon pool
events indirectly affect one or more non-carbon pools.

Carbon pool events
~~~~~~~~~~~~~~~~~~

-  Fire
-  Harvest
-  Herbicide
-  Plough
-  Debris mulching
-  Grazing
-  Organic matter additions
-  Planting

Non-Carbon Events
~~~~~~~~~~~~~~~~~

-  Irrigation
-  Fertilizer application
-  Compaction
