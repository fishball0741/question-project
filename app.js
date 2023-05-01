//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     });
// });

const questions = document.querySelectorAll('.question');

questions.forEach(function (question){
    //  console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function(){
        // use if statement to do, if 3 class lists are not the same, it will remove = means it will close the bar when another opened.
        questions.forEach(function(item){
            // when the article 'question' not match, it will remove.
            if (item !== question) {
                item.classList.remove('show-text');
            }
        
        });
        
        question.classList.toggle('show-text')
    })
})