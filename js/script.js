// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: 
// Created on: Sep 2020
// This file contains the JS functions for index.html
'use strict'
/**
 * This function calculates area of a trapezoid.
 */
function calculate () {
  // input
  const sideA = parseInt(document.getElementById('side-a-length').value)
  const sideB = parseInt(document.getElementById('side-b-length').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  const area = (sideA + sideB) / 2 * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}