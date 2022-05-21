Temporal Distribution
======================

Why is timing important?
------------------------

Reporting on carbon stock change has an inherent temporal component, as
it requires tracking the interactions between carbon pools through time.
To track the interactions between carbon pools, they must be on a
comparable temporal scale. While tracking changes through multiple
pools, from multiple modules through time is a relatively simple
concept, it is made more difficult as modules must be built and
calibrated for timeframes that are appropriate for the pools that are
being modelled.

For example, an empirical forest growth module may provide annual growth
data while the debris module may operate monthly and the soil carbon
module daily. The temporal scale in FLINT is referred to as time-steps.

Time-steps are lengths of time over which operations are reported. It is
only at the end of a time-step that carbon can be moved from one pool to
another. For example, for carbon to move from pool A to B, to C, it will
take two time-steps. Time-steps are used to reduce the processing
requirements of the model. The finer the step (i.e. the shorter it is),
the more processing is required for simulations. Because of time-steps,
rather than continuous changes, there is a ‘graininess’ in the output
data of FLINT.

How is the timing of modules handled in the FLINT?
--------------------------------------------------

As a balance between the graininess of output data and processing, the
standard time-step in the FLINT is one month. However, it can be varied
by the user. One month is the recommended time-step for modelling
carbon; however daily steps are recommended for modelling nitrogen.
With a standard time-step of one month, the FLINT automatically adjusts
the output of each module through the unit controller.

The ability of FLINT to control the timing and flow of inputs and
outputs from modules that operate at different time steps without
adjusting the modules themselves is one of its key features. To achieve
this, modules are run at the time step that they have been built and
calibrated for. This minimises the graininess of the results without
exacerbating the error. Simply running an annual model at daily time
steps can lead to significant errors.

During a simulation, the FLINT will run at the finest time step of any
input module or the output module. For example, if the soil module runs
at a daily time step, then the FLINT will run daily. The other modules
will run at their native temporal resolution. The FLINT will handle the
interpolation of low temporal resolution data to high-resolution data by
proportionally allocating module output. For example, if running at a
daily time step the annual module will have the total results divided
between the number of days in the year. The allocation does not need to
be linear and it can take other forms, for example, exponential. The
operations in the FLINT will ensure that any sub-time step information
is reported as such in the flux summary tables and that FLINT calculates
the appropriate summary statistics. What if a disturbance occurs partway
through a time-step?

Depending on the temporal resolution that the system is running at,
disturbances may occur partway through a time step. The FLINT is
designed to simulate this. For example, a forest harvest is expected to
occur at a point in time during a year. A harvest operation will likely
occur over many weeks, but for an individual small area, the harvest
operation is likely to occur on a single day. In this example, the
forest growth module attached to the FLINT is an annual growth model. A
clearfell harvest occurs on day 200 of a growth year.

In this case, the FLINT has the growth data for the entire year. It
multiplies the growth by 200/365 and applies this to the pools before
the harvest. The harvest event then occurs. The FLINT then sends the
growth module the new data for the year: updates to the pools (in this
case all 0) and age (again, reset to 0 as this is a clearfell). Using
this data the model then provides a new data point. This is then grown
on for a full year from the new data point, and the growth data is then
proportioned back to the end of the original year using the same process
described previously.
