.. _DeveloperWorkflow:

Temporal Distribution
===========================
Carbon stock change reports require tracking interactions between carbon
pools over time, which inherently includes a temporal component. The
carbon pools must share a comparable temporal scale to study such
interactions. interactions. In general, tracking changes across multiple
pools, over time, is relatively straightforward, but also complicated by
the need to design modules with appropriate timeframes to match those of
the pools that are being modeled. The temporal scale in FLINT is
referred to as time-steps.

Time-steps are lengths of time measured for reporting operations. It is
only at the end of a time-step that carbon can be moved from one pool to
another. Time-steps are used to reduce the processing requirements of
the model. If the step is finer (i.e. shorter), simulation requires more
processing. Because of time-steps, rather than continuous changes, there
is a ‘graininess’ in the output data of FLINT.

