exports.checkLength = (url) => {
    const regex = /^[a-zA-Z0-9]*\.[a-zA-Z0-9]*$/;
    let success = false;
    if (!regex.test(url)) {
      return success;

  
      }else{
          success = true;
        return success;
      }
}

exports.checkSuffix = (url) => {
    let success = false;

    if(url.length > 3 && url.substr(1)==="."){
        success = true;
        return success;
    }
    else{
        return success;

    }

}