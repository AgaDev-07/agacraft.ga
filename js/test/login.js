const download = async ()=>{
  try{
    let db = await fetch('https://aga-db.herokuapp.com')
    console.log(db)
    document.querySelector('p').innerText+=
      "\nresponse: "+db.status+"\n"
  }catch(e){
    document.querySelector('p').innerText+=e
  }
}
