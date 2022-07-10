Input Tables
============

In the input_database, there are 41 tables in total

The following represents the schemas of the tables

1. classifier_value
-------------------

.. list-table::
   :widths: 25 25 25 25
   :align: left

   * - ID
     - classifier_id
     - value
     - description

2. classifier
-------------
.. list-table::
   :widths: 50 50
   :align: left

   * - ID
     - name

3. spatial_unit
---------------
.. list-table::
   :widths: 25 25 25 25
   :align: left

   * - ID
     - admin_boundary_id
     - eco_boundary_id
     - spinup_parameter_id

4. admin_boundary
-----------------
.. list-table::
   :widths: 25 25 25 25
   :align: left

   * - ID
     - name
     - admin_region_id
     - stump_parameter_id

5. eco_boundary
---------------
.. list-table::
   :widths: 33 33 33
   :align: left

   * - ID
     - name
     - eco_region_id

6. disturbance_matrix
---------------------
.. list-table::
    :widths: 50 50
    :align: left

    * - ID
      - name

7. disturbance_matrix_value
---------------------------
.. list-table::
    :widths: 25 25 25 25
    :align: left

    * - DISTURBANCE_MATRIX_ID
      - source_pool_id
      - sink_pool_id
      - proportion

8. pool
-------
.. list-table::
   :widths: 50 50
   :align: left

   * - ID
     - name

9. decay_parameter
------------------
.. list-table::
   :widths: 17 17 17 17 17 17
   :align: left

   * - DOM_POOL_ID
     - base_decay_rate
     - reference_temp
     - q10
     - prop_to_atmosphere
     - max_rate

10. spinup_parameter
--------------------
.. list-table::
   :widths: 20 20 20 20 20
   :align: left

   * - ID
     - historic_disturbance_type_id
     - return_interval
     - max_rotations
     - mean_annual_temperature

11. dom_pool
------------
.. list-table::
   :widths: 50 50
   :align: left

   * - ID
     - pool_id

12. transition
--------------
.. list-table::
   :widths: 20 20 20 20 20
   :align: left

   * - ID
     - transition_type_id
     - age
     - regen_delay
     - description

13. transition_classifier_value
-------------------------------
.. list-table::
    :widths: 50 50
    :align: left

    * - TRANSITION_ID
      - classifier_value_id

14. land_class
--------------
.. list-table::
    :widths: 20 20 20 20 20
    :align: left

    * - ID
      - code
      - description
      - is_forest
      - years_to_permanent

15. admin_region
----------------
.. list-table::
    :widths: 50 50
    :align: left

    * - ID
      - name

16. eco_region
--------------
.. list-table::
    :widths: 50 50
    :align: left

    * - ID
      - name

17. disturbance_type
--------------------
.. list-table::
    :widths: 20 20 20 20 20
    :align: left

    * - ID
      - disturbance_category_id
      - transition_land_class_id
      - name
      - code

18. disturbance_matrix_association
----------------------------------
.. list-table::
    :widths: 33 33 33
    :align: left

    * - SPATIAL_UNIT_ID
      - disturbance_type_id
      - disturbance_matrix_id

19. forest_type
---------------
.. list-table::
    :widths: 50 50
    :align: left

    * - ID
      - name

20. genus
---------
.. list-table::
    :widths: 50 50
    :align: left

    * - ID
      - name

21. species
-----------
.. list-table::
    :widths: 25 25 25 25
    :align: left

    * - ID
      - name
      - forest_type_id
      - genus_id

22. vol_to_bio_factor
---------------------
.. list-table::
    :widths: 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    :align: left

    * - ID
      - a
      - b
      - a_nonmerch
      - b_nonmerch
      - k_nonmerch
      - cap_nonmerch
      - a_sap
      - b_sap
      - k_sap
      - cap_sap
      - a1
      - a2
      - a3
      - b1
      - b2
      - b3
      - c1
      - c2
      - c3
      - min_volume
      - max_volume
      - low_stemwood_prop
      - high_stemwood_prop
      - low_stembark_prop
      - high_stembark_prop
      - low_branches_prop
      - high_branches_prop
      - low_foliage_prop
      - high_foliage_prop

23. vol_to_bio_factor_association
---------------------------------
.. list-table::
    :widths: 25 25 25 25
    :align: left

    * - SPATIAL_UNIT_ID
      - species_id
      - vol_to_bio_factor_id
      - root_parameter_id

24. growth_curve
----------------
.. list-table::
    :widths: 50 50
    :align: left

    * - ID
      - description

25. growth_curve_component
--------------------------
.. list-table::
    :widths: 33 33 33
    :align: left

    * - ID
      - growth_curve_id
      - species_id

26. growth_curve_component_value
--------------------------------
.. list-table::
    :widths: 33 33 33
    :align: left

    * - GROWTH_CURVE_COMPONENT_ID
      - age
      - merchantable_volume

27. growth_curve_classifier_value
---------------------------------
.. list-table::
    :widths: 50 50
    :align: left

    * - GROWTH_CURVE_ID
      - classifier_value_id

28. root_parameter
------------------
.. list-table::
    :widths: 14 14 14 14 14 14 14
    :align: left

    * - ID
      - hw_a
      - sw_a
      - hw_b
      - frp_a
      - frp_b
      - frp_c

29. growth_multiplier_series
----------------------------
.. list-table::
    :widths: 50 50
    :align: left

    * - ID
      - description

30. growth_multiplier_value
---------------------------
.. list-table::
    :widths: 25 25 25 25
    :align: left

    * - GROWTH_MULTIPLIER_SERIES_ID
      - forest_type_id
      - time_step
      - value

31. growth_multiplier_series_association
----------------------------------------
.. list-table::
    :widths: 50 50
    :align: left

    * - DISTURBANCE_TYPE_ID
      - growth_multiplier_series_id

32. stump_parameter
-------------------
.. list-table::
    :widths: 20 20 20 20 20
    :align: left

    * - ID
      - sw_top_proportion
      - sw_stump_proportion
      - hw_top_proportion
      - hw_stump_proportion

33. turnover_parameter
----------------------
.. list-table::
    :widths: 9 9 9 9 9 9 9 9 9 9 9
    :align: left

    * - ID
      - foliage
      - stem
      - branch
      - stem_snag
      - branch_snag
      - coarse_root
      - fine_root
      - branch_snag_split
      - coarse_ag_split
      - fine_ag_split

34. transition_type
-------------------
.. list-table::
    :widths: 50 50
    :align: left

    * - ID
      - name

35. transition_rule
-------------------
.. list-table::
    :widths: 33 33 33
    :align: left

    * - ID
      - transition_id
      - disturbance_type_id

36. transition_rule_classifier_value
------------------------------------
.. list-table::
    :widths: 50 50
    :align: left

    * - TRANSITION_RULE_ID
      - classifier_value_id

37. disturbance_category
------------------------
.. list-table::
    :widths: 33 33 33
    :align: left

    * - ID
      - code
      - description

38. accounting_rule_set
-----------------------
.. list-table::
    :widths: 33 33 33
    :align: left

    * - ID
      - disturbance_type_id
      - spatial_unit_id

39. accounting_rule_type
------------------------
.. list-table::
    :widths: 33 33 33
    :align: left

    * - ID
      - name
      - spinup

40. accounting_rule
-------------------
.. list-table::
    :widths: 33 33 33
    :align: left

    * - ACCOUNTING_RULE_SET_ID
      - accounting_rule_type_id
      - value

41. turnover_parameter_association
----------------------------------
.. list-table::
    :widths: 33 33 33
    :align: left

    * - GENUS_ID
      - eco_boundary_id
      - turnover_parameter_id

.. include:: ../../../section-feedback.rst
