Data preparation
======================

Input data from the FLINT
-------------------------

A key component of the FLINT is its Variable system. Variables have 2
types; Internal or External, and each can return one of the four data
types -– static, time series, object and table. Internal Variables are
kept within the system and can be used to share information between
Modules. External Variables can access 4 categories of external Data
Providers; Raster, Vector, SQL and NoSQL.

The difference between Internal and External Variables will be
transparent to the Module writers (this is defined in the FLINT
configuration for each system), each returns 1 of the 4 data types.

The FLINT can be extended with new Data Providers (in much the same way
Modules can be provided in external libraries) as long as they match 1
of the defined external data categories (Raster, Vector, etc.). Through
this functionality, modules can remain independent from the core of the
FLINT, significantly increasing the flexibility of the FLINT. This also
allows the modules to easily use what is available, and run spatially
without reference to a specific location or time. This will allow the
FLINT to run spatially without having to set individual modules up to do
so.

Types of data
-------------

There are four data types for variables defined in the FLINT. A module
may use any combination of these data depending on its requirements

-  Static variables: single values:
-  Examples are model parameters

   -  true/false
   -  value (integer or double precision)

-  These variables can be internal or come from databases, vector or
   raster files
-  Time series are variables that change through time
-  These are typically integer or doubles, but may be Boolean (for
   example, forest/non-forest).
-  Time step may be different for different variables

   -  For example, climate may be monthly, forest cover annual or
      between set dates

-  The time series may require extrapolation or interpolation to:

   -  Project forward
   -  fill in gaps in the time series
   -  change the length of the time step depending on module (e.g. a
      module may need annual data, and therefore sum monthly to annual)

-  Time series can be internal or come from databases or stacks of
   rasters/vectors
-  Object: a useful container of data (either static or time series)
   that relates to a single unit, for example soil type or species
-  Objects are built up from various data that the system needs to use
   and allow for bulk loading of variables in one go
-  for example, ask for soil ID, get all soil parameters.
-  Table

   -  A table is effectively a database that can be looked up. For
      example, in the CBM, get table functions are used for:

      -  hardwood volume to biomass parameter
      -  softwood merchantable volume
      -  hardwood merchantable volume

Data Provider types
-------------------

Using External Variables these four data types can also be sourced
through:

Raster
~~~~~~

Rasters are a format of spatial files where data is divided evenly into
individual pixels. For the FLINT the raster files must be able to be
queried through two means – through specific coordinates as well as
through an index.

Coordinates refer to the latitude and longitudes that the pixel
references. As pixels are spatial (e.g. 625m2), they will always contain
more than one specific latitude and longitude. On querying a set of
coordinates, the raster will return one or more attributes.

Indexing refers to a hierarchical structure of a raster, where one large
data-set is divided into smaller parcels. This is done to ensure that
processing the raster can be carried out across multiple servers.

For indexing, the raster of a country can be broken up into tiles, which
can then be divided into blocks, which are divided into cells. For the
FLINT, rasters are divided into 1-degree tiles, 0.1-degree blocks, and
pixel resolution cells (depending on the data source). The 1-degree tile
is the most efficient size, as they contain a large amount of data,
without compromising the processing capacity.

Vector
~~~~~~

Vectors are also a format of spatial files for GIS, however, unlike
rasters, the information relates to points, lines or polygons, rather
than pixels. For the FLINT, as a minimum, vector files must…..[TBC]

SQL Database (Relational) Structured Query Language (SQL) database is a
relational database, meaning that the data is in tabular format, where
attributes are listed against a related to each record (row).

NoSQL Database
~~~~~~~~~~~~~~

NoSQL (Not only SQL) Databases represent all other databases, not only
relational databases. This includes graphs, documents, as well as
relational databases.

Data transforms
~~~~~~~~~~~~~~~

To have an efficient system, a module should only be provided with the
minimum data it requires to run. For the FLINT, this means having
modules ‘pull’ only the information it requires to function. This means
that other information and transforms are not part of the module itself.
For example, there is no spatial awareness of modules, and all
transforms of data happen externally to the module.

As an example, a module may need annual rainfall to operate, however,
the information is held within a SQL database as monthly. In this case,
the Module calls on the Local Domain for the annual rainfall, the FLINT
requests the monthly data from the SQL database, which is then summed
through a transform, and passed back to the module to operate annually.

As a result of this function, modules only ever need to be configured to
pull data from the Local Domain; however, the FLINT also needs to be
configured to identify the appropriate data source and transformation
for each module. The configuration of the FLINT is a relatively
straightforward exercise.
