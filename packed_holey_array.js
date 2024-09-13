const array = [1, 2, 3];
//PACKED_SMI_ELEMENTS
array.push(4.56);
// PACKED_DOUBLE_ELEMENTS
array.push('x');
//PACKED_ELEMENTS

const array2 = [1, 2, 3, 4.56, 'x'];
// elements kind: PACKED_ELEMENTS
array2.length; // 5
array2[9] = 1; // array[5] until array[8] are now holes
// HOLEY_ELEMENTS