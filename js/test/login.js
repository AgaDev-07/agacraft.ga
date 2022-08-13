const download = async ()=>{
  try{
    let db = new XMLHttpRequest()
    await db.open('GET','https://aga-db.herokuapp.com')
    await db.send()
    console.log(db)
    document.querySelector('p').innerText+=
      "\nresponse: "+db.responseText
  }catch(e){
    document.querySelector('p').innerText+=e
  }
}
