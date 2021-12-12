Local Domain
======================

What is a Local Domain?
-----------------------

Sitting above Simulation Units is the Local Domain. The Local Domain is
the collective of Simulation Units bound for a specific purpose. This
can be, for example, to report on the changes in carbon stocks for a
particular region.

How are Local Domains used in the FLINT?
----------------------------------------

Within FLINT, Local Domains have three main functions:

-  They are used to ‘house’ the variable values for all the simulation
   units they represent.
-  A local domain controller assigns these values to the simulation
   units during a simulation.
-  They receive the outputs simulation units and update the domain
   characteristics.

As an example, they are using the latter scenario. As discussed above
(see Simulation Units), the FLINT applies modules to individual
Simulation Units to determine the stock and fluxes for individual pools.
However, given the scale of these Simulation Units, they are often too
high resolution for reporting purposes and need to be aggregated.
Depending on the user’s requirements, the outputs of these processes are
then summed at different spatial scales to provide information that can
be used as part of national and international reporting obligations.

As an example, if the user wishes to determine the carbon stock change
over a specified period for a region where the Simulation Unit is
represented by a pixel (25m x 25m), the FLINT would use pool-specific
modules to draw on the current values of each variable associated with
each pixel within the given region. The module would then apply
operations to each variable at the pixel level and associate the outputs
with the pixel. In terms of user output, the FLINT sums the new values
for each pixel by module and produces a database of carbon stocks and
fluxes for each pool overtime for the region. The movement and the pools
are recorded for fluxes (e.g., X t CO2-e from pool A to pool B).
