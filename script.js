const form = document.querySelector('.quiz-form');
const correctAns = ['A', 'A', 'A', 'A', 'A'];

const result = document.querySelector('.result');
const question = document.querySelectorAll('.question');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log();
    let score = 0;

    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAns.forEach((answer, index) => {
        if (answer === correctAns[index]) {
            score += 1
            question[index].classList.remove('question');
            question[index].classList.add('right');
        }
        else{
            question[index].classList.remove('question');
            question[index].classList.add('wrong');
        }
    })
    scrollTo(0,0);
    result.classList.remove('hide');
    result.querySelector('p').textContent = `You Scored ${score}/5`
    
})