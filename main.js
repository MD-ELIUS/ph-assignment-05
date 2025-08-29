// Love btn Function

document.querySelectorAll('.love-btn').forEach(function(loveBtn) {
  
 loveBtn.addEventListener('click', function() {
  let loveCount = document.getElementById('love-count').innerText
  
  let loveCountNumber = parseInt(loveCount);
  document.getElementById('love-count').innerText = loveCountNumber + 1
})
} )

//Call button Function

document.querySelectorAll('.call-btn').forEach(function(callBtn) {
  
callBtn.addEventListener('click', function(event) {

event.preventDefault()
const availableCoin = document.getElementById('coin-count').innerText
const availableCoinNumber = parseInt(availableCoin)

if (availableCoinNumber < 20) {
  alert('You have not sufficient balance')
  return
}

 document.getElementById('coin-count').innerText = availableCoinNumber - 20 ;

 const card = event.target.closest('.card')

 const serviceName = card.querySelector('.name').innerText

  const serviceNumber = card.querySelector('.number').innerText

  alert(` 📞 Calling ${serviceName} ${serviceNumber}....`)

  const newDate = new Date().toLocaleTimeString() ;

    const data = {
     name: serviceName,
     number : serviceNumber,
     date: newDate ,
   }
   
   
   
      const callHistoryContainer = document.getElementById('call-history-container')


     const div = document.createElement('div');
     div.innerHTML = `
     
         <div class="flex justify-between items-center p-[10px] sm:p-[12px] md:p-[15px] xl:p-[14px] 2xl:p-[16px] rounded-[8px] bg-[#FAFAFA] mb-2">
           <div class="left-column ">
             <h3 class="name text-[#111111] font-semibold text-[12px] sm:text-[14px] md:text-[16px] xl:text-[14px]  2xl:text-[18px]">${data.name}</h3>
             <h2 class="text-[#5C5C5C] text-[12px] sm:text-[14px] md:text-[16px] xl:text-[14px]  2xl:text-[18px]">${data.number}</h2>
           </div>
           <p class="time text-[12px] sm:text-[14px] md:text-[16px] xl:text-[14px] 2xl:text-[18px] text-[#111111]">${data.date}</p>
       </div>

     `

     callHistoryContainer.prepend(div);
     

  } )
  
})



//Copy Button Function

document.querySelectorAll('.copy-btn').forEach(function(copyBtn) {
  
  copyBtn.addEventListener('click', function(event) {
   
    const copyCount = document.getElementById('copy-count').innerText
    
    const copyCountNumber = parseInt(copyCount);

    const card = event.target.closest('.card')
     const serviceNumber = card.querySelector('.number').innerText

    alert(`Number is copied ${serviceNumber}`)
    document.getElementById('copy-count').innerText = copyCountNumber + 1

    navigator.clipboard.writeText(serviceNumber)

   
  })
})


// Clear button Function

document.getElementById('clear-btn').addEventListener('click', function() {

   const callHistoryContainer = document.getElementById('call-history-container') ;

   callHistoryContainer.innerHTML =''

} )

