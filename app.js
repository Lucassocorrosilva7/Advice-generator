const url = 'https://api.adviceslip.com/advice';
const result = document.getElementById('result');
const btn = document.querySelector(".btn");
const resultId = document.querySelector('.id')


btn.addEventListener('click', () => {
  fetchAdvice();
})


const fetchAdvice = async () => {
 try {
  const response  = await fetch(url);
  const data = await response.json();
  resultId.textContent = data.slip.id;
  result.textContent = `"${data.slip.advice}"`;
 } catch (error) {
  console.log(error)
 }
}


