function zigzagSequence(arr, n) {
  arr.sort((a, b) => a - b);
  let mid = parseInt((n + 1) / 2) - 1;
  let temp = arr[mid];
  arr[mid] = a[n - 1];
  arr[n - 1] = temp;
  let st = mid + 1;
  let ed = n - 2;
  while (st <= ed) {
    temp = arr[st];
    arr[st] = arr[ed];
    arr[ed] = temp;
    st = st + 1;
    ed = ed - 1;
  }
  for (let i = 0; i < n; i++) {
    if (i > 0) console.log(" ");
    console.log(arr[i]);
  }
  console.log();
}
let n=10;
let a=[715, 713, 896, 970, 386, 734, 183, 936, 473, 923, 1 ,365, 297, 380 ,658, 97, 620, 13, 557, 57, 561, 154, 241, 836, 81 ,942, 782, 831, 640 ,732 ,752, 745, 870, 935, 43, 211, 194, 939, 240, 323, 781, 155, 161, 545, 454, 99, 603, 307, 630, 526, 352, 60 ,894 ,400 ,872, 906, 219, 642, 101, 748 ,353, 229, 974, 993, 469, 758, 465, 45 ,813, 431, 342, 467, 519, 540 ,348, 718, 214, 460, 681, 532, 315, 426, 37, 903, 17, 289, 510, 295, 96 ,427 ,973, 146, 231, 357, 598, 180 ,252, 777, 904 ,410, 237, 605, 383, 952, 122, 192 ,321, 98, 525 ,329 ,355, 488, 30, 438, 159, 833, 572, 856 ,42 ,59 ,807, 597, 925 ,602, 705, 582, 937 ,930, 203, 845 ,724, 430, 806, 419 ,131 ,670, 862 ,9 ,794, 350, 580 ,574, 826, 41, 28, 5, 202, 652, 709 ,534 ,106 ,611, 885, 869, 179 ,168, 579 ,26]
zigzagSequence(a,n)