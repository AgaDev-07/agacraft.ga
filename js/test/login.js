const download =()=>{
  try{
    let db = new XMLHttpRequest()
    db.open('GET','https://aga-db.herokuapp.com')
    db.send()
    document.querySelector('p').innerText+=
      "\nresponse: "+db.responseText
  }catch(e){
    document.querySelector('p').innerText+=e
  }
}
