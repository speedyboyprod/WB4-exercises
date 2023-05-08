"use strict";

const partCode1 = "ABC:1234-L";

const part1 = parsePartCode(partCode1);
console.log(part1);
console.log(part1.supplierCode);
console.log(part1.productNumber);
console.log(part1.size);

function parsePartCode(partCode) {
  const colonPos = partCode.indexOf(":");
  const dashPos = partCode.indexOf("-");

  const partSupplierCode = partCode.substring(0, colonPos);
  const partProductNum = partCode.substring(colonPos + 1, dashPos);
  const partSize = partCode.substring(dashPos + 1);

  return {
    supplierCode: partSupplierCode,
    productNumber: partProductNum,
    size: partSize,
  };
}
