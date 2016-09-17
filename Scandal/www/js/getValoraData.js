USER = 'HackZurich';
PW = 'mKw%VY<7.Yb8D!G-';

function searchForProducts() {
  var jsonString = '{"store-id": "18406", "products": ["9002975301268", "7610469295645", "2050000719073", "5937", "2050000771606"],  "total": "20.53"}'; //as given to me by Emanuel / Scandit
  console.log(jsonString);

  getProductInfo("18406", "2050000771606");
}

function getProductInfo(storeId, productId) {
  document.getElementById("infoGoesHere").innerHTML = "wow this works";

  var request = new XMLHttpRequest();

  request.open("GET", "https://backend.scango.ch/api/v01/items/find-by-ean/?ean=" + productId + "&retail_store_id=" + storeId + "&format=json", true);

  request.onreadystatechange = function() {
    console.log("Response received, readyState: " + request.readyState + " status: " + request.status);
    if(request.readyState == 4) {
      if(request.status == 200 || request.status == 0) {
        document.getElementById("infoGoesHere").innerHTML = request.responseText;
      }
    }
  }

  request.setRequestHeader("Authorization", "Basic " + btoa(USER + ":" + PW));

  request.send();
  console.log("Request sent...")
}
