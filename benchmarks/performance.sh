#!/bin/bash
if [ ${PWD##*/} != "benchmarks" ]
then
    	cd benchmarks
fi
npx lighthouse https://docs.moja.global --output json --output html
