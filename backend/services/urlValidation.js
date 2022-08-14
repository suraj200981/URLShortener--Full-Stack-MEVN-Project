exports.checkLength = (url) => {
    const regex = /^[a-zA-Z0-9]*\.[a-zA-Z0-9]*$/;
    if (!regex.test(url)) {
      console.log("invaild url");
  
      }else{
        console.log(url, "is vaild");
      }
}