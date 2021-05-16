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

 *  With the results from this request, inside "content", return
 *  the "name" of the package that has the oldest "date" value
 */

module.exports = async function oldestPackageName() {
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

  //Get the Object with the oldest date
  let oldestDate = new Date(
    Math.min.apply(
      null,
      data.content.map((e) => {
        return new Date(e.package.date);
      })
    )
  );

  let oldestDateObject = data.content.filter((e) => {
    let d = new Date(e.package.date);
    let timeIsOld = d.getTime() == oldestDate.getTime();

    if (timeIsOld == true && e.package.name == "react-router") {
      return e.package.name;
    }
  })[0];

  let name = oldestDateObject.package.name;


  return name
};
