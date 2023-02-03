import './style.css';
import getScore from './modules/show.js';
import print from './modules/print.js';

const createGame = () => {
    const create = async () => {
      const get = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
        {
          method: 'post',
          body: JSON.stringify({ name: 'uche' }),
          headers: { 'Content-type': 'application/json' },
        });
      const res = await get.json();
      return res;
    };
    create();
  };
createGame()
const gamer = () => {
    const name = document.querySelector('#name');
    const score = document.querySelector('#score');
    const add = document.querySelector('#add');
    const reload = document.querySelector('#reload');

    add.addEventListener('submit', (e) => {
      e.preventDefault();
      getScore(name.value, score.value);
      name.value = '';
      score.value = '';
    });
    reload.addEventListener('click', () => {
      location.reload();
    });
};
gamer()

print()