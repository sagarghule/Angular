function checkString(str : string, wrd:string) : boolean
{
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

    if(str.indexOf(wrd)!= -1)
    {
        return true;
    }
    else{
        return false;
    }
}

let s : string = "Pune Kothrud Marvellous Infosystems";
let word : string = "Pune K";

let wordPresent : boolean = checkString(s,word);

if(wordPresent)
{
    console.log(`String contains ${word} in it.`);
}
else
{
    console.log(`String does not contains ${word} in it.`);
}
