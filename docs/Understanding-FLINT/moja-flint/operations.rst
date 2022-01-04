Operations
======================

What is an operation?
---------------------

An operation is a process within the FLINT that moves carbon stock
between pools. Operations can reflect ongoing natural processes, such as
growth, or specific events, natural or human-induced; for example, a
harvest moves plant material to products and debris pools, wildfire
moves plant material to debris and atmosphere pools. The amount of stock
moved during an operation is called a 'flux.' Operations allows the
FLINT to track changes in carbon stock through time, including fluxes
into and out of pools.

How are operations used in FLINT?
---------------------------------

FLINT uses operations to update simulation units values and record flux
values in a flux table. For example, an operation reflecting plant
growth can be applied to aboveground biomass pools to estimate the
growth flux. FLINT has been designed to ensure the conservation of mass
and area throughout the calculation process. This means that FLINT
will only transfer carbon stock from one pool to another, ensuring the
system is balanced so that the sum of the fluxes is equal to the sum of
the stock changes.

Suppose there is a violation in this principle, for example, that the
system is unbalanced. In that case, FLINT will report this violation and
take the appropriate action (e.g., flag the outputs as unreliable).
FLINT tracks each operation and the resulting fluxes and depending on
which pools the flux relates to, it is classified differently in the
flux table and the resulting carbon stock tables. For example, the
output will be 'aboveground biomass.' We can then use the resulting
information to calculate different characteristics of the Simulation
Unit. For example, by summing all stock change in the aboveground,
belowground biomass, we can calculate net litter turnover, the Net
Primary Production (NPP).

Similarly, all fluxes from dead organic matter and soil C pools to the
atmosphere pools resulting from decay processes are considered
heterotrophic respiration (Rh). By subtracting Rh from NPP, We can
calculate net Ecosystem Productivity (NEP).

While fluxes from any pool to the atmosphere related to disturbances
also need to be tracked by disturbance type to account for the impacts.
NEP minus losses from disturbances equal Net Biome Production (NBP).
Operations could be developed into FLINT to provide the output of such
calculations (e.g., NPP, NEP, and NBP). However, by only providing the
input values, there is increased system transparency, which in turn
increases integrity.

In addition to moving carbon stocks between different pools, operations
are used in the Unit Controller in FLINT to manage data on different
temporal scales to ensure comparable outputs are produced. The outputs
can be reported at varying temporal scales (See Unit Controller and
Temporal Distribution).
