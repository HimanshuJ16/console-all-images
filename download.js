//STEPS

// 1. Go to the website.
// 2. Right-click and go to inspect.
// 3. Go to the network tab.
// 4. Right-click on the image you want.
// 5. Copy all as HAR.
// 6. Go to the console tab.
// 7. Now write the following code.
//    var har = Ctrl+v (paste the HARs you copied earlier.)  
// 8. Wait a few seconds & then write.
//    har()
// 9. Then paste the code given below.
// 10. Hence you will get the link of all the image on the website.

//CODE
var imageUrls = [];
har.log.entries.forEach(function (entry) {
  if (entry.response.content.mimeType.indexOf("image/") !== 0) return;
  imageUrls.push(entry.request.url);
});
console.log(imageUrls.join('\n'));
