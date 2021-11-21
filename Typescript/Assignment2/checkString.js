function checkString(str, wrd) {
    // let strArray : string[] = [];
    // strArray = str.split(" ");
    // for(let i=0;i<strArray.length;i++)
    // {
    //     if(strArray[i] == wrd)
    //     {
    //         return true;
    //     }
    // }
    // return false;
    if (str.indexOf(wrd) != -1) {
        return true;
    }
    else {
        return false;
    }
}
var s = "Pune Kothrud Marvellous Infosystems";
var word = "Pune K";
var wordPresent = checkString(s, word);
if (wordPresent) {
    console.log("String contains " + word + " in it.");
}
else {
    console.log("String does not contains " + word + " in it.");
}
console.log(s.indexOf(word));
