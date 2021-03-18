const oneBtnFirst = document.getElementById('one__btn-1')
const oneBtnSecond = document.getElementById('one__btn-2')

const secondBtnFirst = document.getElementById('two__btn-1')
const secondBtnSecond = document.getElementById('two__btn-2')
const secondBtnThree = document.getElementById('two__btn-3')
const secondBtnFourth = document.getElementById('two__btn-4')

const threeBtn = document.getElementById('three__btn')
let day = document.getElementById('day')
let month= document.getElementById('month')
let year = document.getElementById('year')


const sectionFirst = document.getElementById('first')
const oneBlock = document.getElementById('one')
const twoBlock = document.getElementById('two')
const threeBlock = document.getElementById('three')
const fourBlock =  document.getElementById('four')

let optionSelected = document.querySelector('option', this)
let optionValue = this.value

let dayResult = day.addEventListener('change', (event)=>{
    let dayResult = event.target.value
    console.log(dayResult)
})
let monthResult = month.addEventListener('change', (event)=>{
    let monthResult = event.target.value
    console.log(monthResult)
})
let yearResult = year.addEventListener('change', (event)=>{
    let yearResultEvent = event.target.value
    console.log(yearResultEvent)

    let currentAge = 2021;
    
})

console.log(yearResult)





function loadQuiz(){
    oneBtnFirst.addEventListener('click', ()=>{

           oneBlock.style.display = 'none'
           twoBlock.style.display = 'block'
        console.log(quizCount)


    })
    oneBtnSecond.addEventListener('click', ()=>{
            oneBlock.style.display = 'none'
            twoBlock.style.display = 'block'
    })




secondBtns()
    function secondBtns(){
        secondBtnFirst.addEventListener('click', ()=>{
                oneBlock.style.display = 'none'
                twoBlock.style.display = 'none'
                threeBlock.style.display= 'block' 
        }) 

        secondBtnSecond.addEventListener('click', ()=>{

                oneBlock.style.display = 'none'
                twoBlock.style.display = 'none'
                threeBlock.style.display= 'block' 
        })
        secondBtnThree.addEventListener('click', ()=>{
                oneBlock.style.display = 'none'
                twoBlock.style.display = 'none'
                threeBlock.style.display= 'block' 
        }) 
        secondBtnFourth.addEventListener('click', ()=>{
                oneBlock.style.display = 'none'
                twoBlock.style.display = 'none'
                threeBlock.style.display= 'block' 
            console.log(quizCount)
        });    
    }
}





threeBtns()
function threeBtns(){
    threeBtn.addEventListener('click', ()=>{

        if(day == optionSelected && month !== Number && year !== Number ){         
                oneBlock.style.display = 'none'
                twoBlock.style.display = 'none'
                threeBlock.style.display= 'block' 
                fourBlock.style.display= 'none'
            
                day.style.borderColor="red"
                month.style.borderColor="red"
                year.style.borderColor="red"

        }if(day !== optionSelected && month == Number && year == Number){
            oneBlock.style.display = 'none'
            twoBlock.style.display = 'none'
            threeBlock.style.display= 'none' 
            fourBlock.style.display= 'block'
            }

        console.log(typeof day)
    })

}


loadQuiz()
