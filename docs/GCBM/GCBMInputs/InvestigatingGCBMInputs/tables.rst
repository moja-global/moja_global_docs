Input Tables
============

In the input_database, there are 41 tables in total

The following represents the schemas of the tables 

.. list-table:: 1. classifier_value
   :widths: 25 25 25 25

   * - ID
     - classifier_id
     - value 
     - description

.. list-table:: 2. classifier
   :widths: 50 50 

   * - ID
     - name

.. list-table:: 3. spatial_unit
   :widths: 25 25 25 25 

   * - ID 
     - admin_boundary_id 
     - eco_boundary_id 
     - spinup_parameter_id

.. list-table:: 4. admin_boundary
   :widths: 25 25 25 25 

   * - ID 
     - name 
     - admin_region_id 
     - stump_parameter_id

.. list-table:: 5. eco_boundary
   :widths: 33 33 33

   * - ID 
     - name 
     - eco_region_id

.. include:: ../../../section-feedback.rst