// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const side a = parseInt(document.getElementById('side a length').value)
  const side b = parseInt(document.getElementById('side b length').value)
  const base = parseInt(document.getElementById('height').value)

  // process
  const area = side a length + side b length / 2 * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}