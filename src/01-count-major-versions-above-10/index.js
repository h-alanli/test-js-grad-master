/**
 * Make the following POST request with either axios or node-fetch:

POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
}

 *******

The results should have this structure:
{
    "status": 200.0,
    "location": [
      ...
    ],
    "from": "CACHE",
    "content": [
      ...
    ]
}

 ******

 *  With the results from this request, inside "content", count
 *  the number of packages that have a MAJOR semver version 
 *  greater than 10.x.x
 */

module.exports = async function countMajorVersionsAbove10() {
  // TODO
  
  //POST with axios
  const axios = require("axios");

  let body = {
    url: "https://api.npms.io/v2/search/suggestions?q=react",
    method: "GET",
    return_payload: true,
  };

  let result = await axios.post(
    "http://ambush-api.inyourarea.co.uk/ambush/intercept",
    body
  );
  let data = result.data;
  
  //count the number of packages that have a MAJOR semver version greater than 10.x.x
  let count = 0;

  for (let i = 0; i < data.content.length; i++) {
    let obj = data.content[i];
    if (parseInt(obj.package.version) > 10) {
      count++;
    }
  }

  return count
};
