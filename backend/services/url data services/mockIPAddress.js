

exports.mockIPAddressGenerate = () => {
var arrayOfIps = ["59.199.40.136",
    "46.114.82.148",
    "32.29.170.96",
    "237.167.123.167",
    "49.67.148.189",
    "103.71.164.223",
    "45.236.48.18",
   "123.178.76.153",
    "27.255.30.137",
    "30.193.43.207"]

    //randomly select an ip address from the array and return it
    var randomIp = arrayOfIps[Math.floor(Math.random() * arrayOfIps.length)];
    return randomIp;


}