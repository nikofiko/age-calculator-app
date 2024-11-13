const years = document.querySelector("#years")
const months = document.querySelector("#months")
const days = document.querySelector("#days")

const button = document.querySelector("hr")

const currentDate = new Date();
const currentYear = currentDate.getFullYear() 
const currentMonth = currentDate.getMonth() + 1
const currentDay = currentDate.getDate()

// console.log(currentYear)
// console.log(currentMonth)
// console.log(currentDay)

button.addEventListener('click', () => {
    let yearInput = document.querySelector("#year-input")
    let monthInput = document.querySelector("#month-input")
    let dayInput = document.querySelector("#day-input")

    //checking inputs
    if(parseInt(dayInput.value) > 31 || parseInt(dayInput.value) < 0){
        dayInput.style.borderColor = "red";
        dayInput.style.marginBottom = "5px";
        const error = document.querySelector("#day-error")
        error.style.display = "block"
        error.style.backgroundColor = "white"
        const h3 = document.querySelector("#h3-day")
        h3.style.color = "red"      
    }else{
        dayInput.style.borderColor = "hsl(0, 0%, 80%)";
        dayInput.style.marginBottom = "25px";
        const error = document.querySelector("#day-error")
        error.style.display = "none";
        const h3 = document.querySelector("#h3-day")
        h3.style.color = "hsl(0, 1%, 44%)"
    }

    if(parseInt(monthInput.value) > 12 || parseInt(monthInput.value) < 0){
        monthInput.style.borderColor = "red";
        monthInput.style.marginBottom = "5px";
        const error = document.querySelector("#month-error")
        error.style.display = "block"
        error.style.backgroundColor = "white"
        const h3 = document.querySelector("#h3-month")
        h3.style.color = "red"
    }else{
        monthInput.style.borderColor = "hsl(0, 0%, 80%)";
        monthInput.style.marginBottom = "25px";
        const error = document.querySelector("#month-error")
        error.style.display = "none";
        const h3 = document.querySelector("#h3-month")
        h3.style.color = "hsl(0, 1%, 44%)"
    }

    if(parseInt(yearInput.value) > currentYear){
        yearInput.style.borderColor = "red";
        yearInput.style.marginBottom = "5px";
        const error = document.querySelector("#year-error")
        error.style.display = "block"
        error.style.backgroundColor = "white"
        const h3 = document.querySelector("#h3-year")
        h3.style.color = "red"
    }else{
        yearInput.style.borderColor = "hsl(0, 0%, 80%)";
        yearInput.style.marginBottom = "25px";
        const error = document.querySelector("#year-error")
        error.style.display = "none";
        const h3 = document.querySelector("#h3-year")
        h3.style.color = "hsl(0, 1%, 44%)"
    }

    //lata git tak naprawde juz git nie klamie
    let readyYear = 0
    let readyMonth = 0
    let readyDay = 0

    if(parseInt(monthInput.value) < currentMonth){
        readyYear = (currentYear - parseInt(yearInput.value))
    }else if(parseInt(monthInput.value) > currentMonth){
        readyYear = (currentYear - parseInt(yearInput.value)) - 1
    }


    const monthDays = {
        1: 31,
        2: 29,  
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };
    
    if (parseInt(monthInput.value) <= currentMonth) {
        let difference = monthDays[parseInt(monthInput.value)] -parseInt(dayInput.value);
        difference += currentDay;
        readyDay = difference;
        
        if (parseInt(monthInput.value) === currentMonth) {
            readyMonth = parseInt(monthInput.value);
        } else {
            let i = parseInt(monthInput.value) + 1;
            while (i < currentMonth) {
            readyMonth += 1;
            i += 1;
            }
        }
        
        if (readyDay === 30) {
            readyMonth += 1;
            readyDay = 0;
        } else if (readyDay > 30) {
            readyMonth += 1;
            readyDay -= 30;
        }
        
    } else if (parseInt(monthInput.value) > currentMonth) {
        let difference = monthDays[parseInt(monthInput.value)] - parseInt(dayInput.value);
        difference += currentDay;
        readyDay = difference;
        
        readyMonth = currentMonth - 1;
        
        if (readyDay === 30) {
            readyMonth += 1;
            readyDay = 0;
        } else if (readyDay > 30) {
            readyMonth += 1;
            readyDay -= 30;
        }
        }

    years.innerHTML = readyYear
    months.innerHTML = readyMonth
    if(parseInt(monthInput.value) == 2){
        readyDay += 1
    }
    days.innerHTML = readyDay
})