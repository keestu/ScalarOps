/*
    Scalar 3D operations
    Copyright (C) 2014  Tappali Ekanathan Keestu (keestu@gmail.com)
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
Purpose of the js file?
    There is an array with a simulated X,Y,Z coordinate. [X,Y,Z]
    There comes a time in life when one needs to perform mathematical operations to the so called X, Y and Z.

    Function name = scalar<<operation>><<coordinate>>()

    Operation                CodeName            Parameter
    Addition                 Add                 <<array>>,value
    Subtraction              Sub                 <<array>>,value
    Multiplication           Mult                <<array>>,value
    Division                 Div                 <<array>>,value
    Array Addition           AddArr              <<array>>,<<array>>
    Array Subtraction        SubArr              <<array>>,<<array>>
    Array Multiplication     MultArr             <<array>>,<<array>>
    Array Division           DivArr              <<array>>,<<array>>
*/

/* Value Based                                     */
/* Add                                             */
function scalarAddX(array,value) {
    array[0] = array[0] + value;
    }

function scalarAddY(array,value) {
    array[1] = array[1] + value;
    }

function scalarAddZ(array,value) {
    array[2] = array[2] + value;
    }

function scalarAddXY(array,value) {
    array[0] = array[0] + value;
    array[1] = array[1] + value;
    }

function scalarAddYZ(array,value) {
    array[1] = array[1] + value;
    array[2] = array[2] + value;
    }

function scalarAddXZ(array,value) {
    array[0] = array[0] + value;
    array[2] = array[2] + value;
    }

function scalarAddXYZ(array,value) {
    array[0] = array[0] + value;
    array[1] = array[1] + value;
    array[2] = array[2] + value;
    }

/* Subtract                                        */
function scalarSubX(array,value) {
    array[0] = array[0] - value;
    }

function scalarSubY(array,value) {
    array[1] = array[1] - value;
    }

function scalarSubZ(array,value) {
    array[2] = array[2] - value;
    }

function scalarSubXY(array,value) {
    array[0] = array[0] - value;
    array[1] = array[1] - value;
    }

function scalarSubYZ(array,value) {
    array[1] = array[1] - value;
    array[2] = array[2] - value;
    }

function scalarSubXZ(array,value) {
    array[0] = array[0] - value;
    array[2] = array[2] - value;
    }

function scalarSubXYZ(array,value) {
    array[0] = array[0] - value;
    array[1] = array[1] - value;
    array[2] = array[2] - value;
    }

/* Multiply                                        */
function scalarMultX(array,value) {
    array[0] = array[0] * value;
    }

function scalarMultY(array,value) {
    array[1] = array[1] * value;
    }

function scalarMultZ(array,value) {
    array[2] = array[2] * value;
    }

function scalarMultXY(array,value) {
    array[0] = array[0] * value;
    array[1] = array[1] * value;
    }

function scalarMultYZ(array,value) {
    array[1] = array[1] * value;
    array[2] = array[2] * value;
    }

function scalarMultXZ(array,value) {
    array[0] = array[0] * value;
    array[2] = array[2] * value;
    }

function scalarMultXYZ(array,value) {
    array[0] = array[0] * value;
    array[1] = array[1] * value;
    array[2] = array[2] * value;
    }

/* Divide                                          */
function scalarDivX(array,value) {
    array[0] = array[0] / value;
    }

function scalarDivY(array,value) {
    array[1] = array[1] / value;
    }

function scalarDivZ(array,value) {
    array[2] = array[2] / value;
    }

function scalarDivXY(array,value) {
    array[0] = array[0] / value;
    array[1] = array[1] / value;
    }

function scalarDivYZ(array,value) {
    array[1] = array[1] / value;
    array[2] = array[2] / value;
    }

function scalarDivXZ(array,value) {
    array[0] = array[0] / value;
    array[2] = array[2] / value;
    }

function scalarDivXYZ(array,value) {
    array[0] = array[0] / value;
    array[1] = array[1] / value;
    array[2] = array[2] / value;
    }

/* Array Based                                     */
/* Add                                             */
function scalarAddArrX(array,array2) {
    array[0] = array[0] + array2[0];
    }

function scalarAddArrY(array,array2) {
    array[1] = array[1] + array2[1];
    }

function scalarAddArrZ(array,array2) {
    array[2] = array[2] + array2[2];
    }

function scalarAddArrXY(array,array2) {
    array[0] = array[0] + array2[0];
    array[1] = array[1] + array2[1];
    }

function scalarAddArrYZ(array,array2) {
    array[1] = array[1] + array2[1];
    array[2] = array[2] + array2[2];
    }

function scalarAddArrXZ(array,array2) {
    array[0] = array[0] + array2[0];
    array[2] = array[2] + array2[2];
    }

function scalarAddArrXYZ(array,array2) {
    var tempArr = [0,0,0];
    tempArr[0] = array[0] + array2[0];
    tempArr[1] = array[1] + array2[1];
    tempArr[2] = array[2] + array2[2];
    return tempArr;
    }

/* Subtract                                        */
function scalarSubArrX(array,array2) {
    array[0] = array[0] - array2[0];
    }

function scalarSubArrY(array,array2) {
    array[1] = array[1] - array2[1];
    }

function scalarSubArrZ(array,array2) {
    array[2] = array[2] - array2[2];
    }

function scalarSubArrXY(array,array2) {
    array[0] = array[0] - array2[0];
    array[1] = array[1] - array2[1];
    }

function scalarSubArrYZ(array,array2) {
    array[1] = array[1] - array2[1];
    array[2] = array[2] - array2[2];
    }

function scalarSubArrXZ(array,array2) {
    array[0] = array[0] - array2[0];
    array[2] = array[2] - array2[2];
    }

function scalarSubArrXYZ(array,array2) {
    array[0] = array[0] - array2[0];
    array[1] = array[1] - array2[1];
    array[2] = array[2] - array2[2];
    }

/* Multiply                                        */
function scalarMultArrX(array,array2) {
    array[0] = array[0] * array2[0];
    }

function scalarMultArrY(array,array2) {
    array[1] = array[1] * array2[1];
    }

function scalarMultArrZ(array,array2) {
    array[2] = array[2] * array2[2];
    }

function scalarMultArrXY(array,array2) {
    array[0] = array[0] * array2[0];
    array[1] = array[1] * array2[1];
    }

function scalarMultArrYZ(array,array2) {
    array[1] = array[1] * array2[1];
    array[2] = array[2] * array2[2];
    }

function scalarMultArrXZ(array,array2) {
    array[0] = array[0] * array2[0];
    array[2] = array[2] * array2[2];
    }

function scalarMultArrXYZ(array,array2) {
    array[0] = array[0] * array2[0];
    array[1] = array[1] * array2[1];
    array[2] = array[2] * array2[2];
    }

/* Divide                                          */
function scalarDivArrX(array,array2) {
    array[0] = array[0] / array2[0];
    }

function scalarDivArrY(array,array2) {
    array[1] = array[1] / array2[1];
    }

function scalarDivArrZ(array,array2) {
    array[2] = array[2] / array2[2];
    }

function scalarDivArrXY(array,array2) {
    array[0] = array[0] / array2[0];
    array[1] = array[1] / array2[1];
    }

function scalarDivArrYZ(array,array2) {
    array[1] = array[1] / array2[1];
    array[2] = array[2] / array2[2];
    }

function scalarDivArrXZ(array,array2) {
    array[0] = array[0] / array2[0];
    array[2] = array[2] / array2[2];
    }

function scalarDivArrXYZ(array,array2) {
    array[0] = array[0] / array2[0];
    array[1] = array[1] / array2[1];
    array[2] = array[2] / array2[2];
    }
