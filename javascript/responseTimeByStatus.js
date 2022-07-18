let arrayFullResponseTimeByStatus = [
  100, 112, 102, 100, 105, 104, 116, 120, 110, 127, 139, 145, 160, 180, 170,
  160, 150, 140, 130, 120, 110, 100, 100, 100,
];

function healthCheckByResponseTime(responseTimeByStatus) {
  let clone = [...responseTimeByStatus];
  let clone2 = [...responseTimeByStatus];
  let avg3 = 0;
  let avg10 = 0;
  if (responseTimeByStatus.length >= 3) {
    let r = responseTimeByStatus.splice(-3, 3);
    let acum = 0;
    for (const iterator of r) {
      acum += iterator;
    }
    avg3 = acum / 3;
  }
  if (clone.length >= 10) {
    let r = clone.splice(-10, 10);

    let acum = 0;
    for (const iterator of r) {
      acum += iterator;
    }
    avg10 = acum / 10;
  }
  console.log("promedio 3 ", avg3);
  console.log("promedio 10 ", avg10);
  if (avg3 > avg10) {
    console.log("Down", clone2.length);
  } else if (avg3 < avg10) {
    console.log("Up", clone2.length);
  }
}

function arrayForMinutes(arrayFullResponseTimeByStatus) {
  let i = 1;

  while (i <= arrayFullResponseTimeByStatus.length) {
    let aux = arrayFullResponseTimeByStatus.slice(0, i);
    i++;
    healthCheckByResponseTime(aux);
  }
}
arrayForMinutes(arrayFullResponseTimeByStatus);
