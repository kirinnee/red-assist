"use strict";

setInterval(function () {
   var toolbar = document.getElementById("toolbar");
   if (toolbar != null) toolbar.style.display = "none";
   var watermark = document.querySelectorAll("#resizer > div:nth-child(16)");
   if (watermark != null && watermark[0] != null) watermark[0].style.display = "none";
}, 1);