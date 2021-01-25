// /* eslint-disable no-return-assign */
// /* eslint-disable max-len */
// /* eslint-disable no-plusplus */
// /* eslint-disable eqeqeq */
// /* eslint-disable linebreak-style */
// import * as React from 'react';
// // import { render } from 'react-dom';
// import '../styles/Game.scss';
// // import { createChart, CrosshairMode } from 'lightweight-charts';
// // const { createChart, CrosshairMode } = require('lightweight-charts');

// // eslint-disable-next-line react/prefer-stateless-function
// class Game extends React.Component {
//   // currency: string[];

//   // eslint-disable-next-line @typescript-eslint/no-useless-constructor
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     jsonGrath: '',
//   //   };
//   // }

//   render() {
//     function gem() {
//       let sizePuzzles;
//       let countPuzzles;
//       let selectSize;
//       let toneX;
//       let min;
//       let sec;
//       let move;
//       let records;
//       let recordsMove;
//       let movesArrayReverse = [];
//       let movesArray;
//       let shuffleN;

//       // localStorage.removeItem('recordsStore')
//       if (localStorage.getItem('recordsStore') == null || localStorage.getItem('recordsStore') == 'undefined'
//               || localStorage.getItem('recordsStore') == 'NaN' || localStorage.getItem('recordsStore') == '') {
//         records = new Array(6);
//         for (let i = 0; i < 6; i++) {
//           records[i] = new Array(10).fill(Infinity);
//         }
//         recordsMove = new Array(6);
//         for (let i = 0; i < 6; i++) {
//           recordsMove[i] = new Array(10).fill('-------');
//         }
//       } else {
//         records = localStorage.getItem('recordsStore').split('|').map((itemSize) => itemSize.split(','));
//         recordsMove = localStorage.getItem('recordsStoreMove').split('|').map((itemSize) => itemSize.split(','));
//       }
//       const checkState = (field, sideSize) => {
//         let N = 0;
//         let e = 0;
//         for (let i = 0; i < field.length; i++) {
//           if (+field[i] == 0 && field.length % 2 === 0) {
//             e = (i / sideSize) + 1;
//             e = Math.floor(e);
//           }
//           for (let j = i + 1; j < field.length; j++) {
//             if (field[j] != 0 && +field[j] < +field[i]) {
//               N++;
//             }
//           }
//         }
//         N += e;
//         if (N % 2 != 0) {
//           field.sort(() => Math.random() - 0.5);
//           // eslint-disable-next-line @typescript-eslint/no-unused-vars
//           checkState(field, sideSize);
//         }
//         return field;
//       };

//       let numEmptyCell;
//       let puzzlesWidth;
//       const init = () => {
//         const storageGame = localStorage.getItem('saveGame');
//         if (storageGame != undefined && storageGame != null && storageGame != '') {
//           document.querySelector('body').innerHTML = storageGame;
//           selectSize = document.querySelector('.select-size');
//           sizePuzzles = localStorage.getItem('saveSelect');
//           selectSize.selectedIndex = sizePuzzles - 3;
//           countPuzzles = sizePuzzles * sizePuzzles;
//           const savePuzzles = document.querySelectorAll('.puzzle');
//           // eslint-disable-next-line no-restricted-syntax
//           for (const i in savePuzzles) {
//             if (savePuzzles[i].innerText == 0) {
//               numEmptyCell = i;
//             }
//           }
//           movesArrayReverse = localStorage.getItem('movesArrayReverse').split(',');
//           localStorage.removeItem('saveGame');
//         } else {
//           document.querySelector('body').innerHTML = '';
//           localStorage.removeItem('saveGame');
//           const game = document.createElement('div');
//           document.body.appendChild(game);
//           game.classList.add('game');
//           const dashBoard = document.createElement('div');
//           game.appendChild(dashBoard);
//           dashBoard.classList.add('dashboard');
//           const selectCreate = document.createElement('select');
//           dashBoard.appendChild(selectCreate);
//           selectCreate.classList.add('select-size');
//           for (let i = 3; i < 9; i++) {
//             const optionSize = document.createElement('option');
//             selectCreate.appendChild(optionSize);
//             optionSize.innerText = `SIZE: ${i}x${i}`;
//           }
//           selectSize = document.querySelector('.select-size');
//           const saveSelect = localStorage.getItem('saveSelect');
//           sizePuzzles = (saveSelect != undefined && saveSelect != null && saveSelect != '') ? saveSelect : 4;
//           selectSize.selectedIndex = sizePuzzles - 3;
//           countPuzzles = sizePuzzles * sizePuzzles;
//           const listNumbersPuzzles = new Array(countPuzzles).fill(0).map((x, i) => (i != countPuzzles - 1 ? x = i + 1 : 0));
//           let indexZero = listNumbersPuzzles.indexOf(0);
//           const leftMove = () => {
//             if (indexZero % +sizePuzzles != 0 && (indexZero - 1) >= 0) {
//               movesArrayReverse.push(indexZero);
//               localStorage.setItem('movesArrayReverse', movesArrayReverse);
//               [listNumbersPuzzles[+indexZero], listNumbersPuzzles[indexZero - 1]] = [listNumbersPuzzles[indexZero - 1], listNumbersPuzzles[+indexZero]];
//               indexZero = listNumbersPuzzles.indexOf(0);
//             }
//           };
//           const upMove = () => {
//             if ((indexZero - +sizePuzzles) >= 0) {
//               movesArrayReverse.push(indexZero);
//               localStorage.setItem('movesArrayReverse', movesArrayReverse);
//               [listNumbersPuzzles[+indexZero], listNumbersPuzzles[indexZero - +sizePuzzles]] = [listNumbersPuzzles[indexZero - +sizePuzzles], listNumbersPuzzles[+indexZero]];
//               indexZero = listNumbersPuzzles.indexOf(0);
//             }
//           };
//           const rightMove = () => {
//             if ((indexZero + 1) % +sizePuzzles != 0 && (indexZero + 1) < +countPuzzles) {
//               movesArrayReverse.push(indexZero);
//               localStorage.setItem('movesArrayReverse', movesArrayReverse);
//               [listNumbersPuzzles[+indexZero], listNumbersPuzzles[indexZero + 1]] = [listNumbersPuzzles[indexZero + 1], listNumbersPuzzles[+indexZero]];
//               indexZero = listNumbersPuzzles.indexOf(0);
//             }
//           };
//           const downMove = () => {
//             if ((indexZero + +sizePuzzles) < +countPuzzles) {
//               movesArrayReverse.push(indexZero);
//               localStorage.setItem('movesArrayReverse', movesArrayReverse);
//               [listNumbersPuzzles[+indexZero], listNumbersPuzzles[indexZero + +sizePuzzles]] = [listNumbersPuzzles[indexZero + +sizePuzzles], listNumbersPuzzles[+indexZero]];
//               indexZero = listNumbersPuzzles.indexOf(0);
//             }
//           };
//           const shuffleMoveArray = [];
//           switch (+sizePuzzles) {
//             case 3:
//               shuffleN = 15 + Math.ceil((Math.random() - 0.5) * 5);
//               break;
//             case 4:
//               shuffleN = 35 + Math.ceil((Math.random() - 0.5) * 5);
//               break;
//             case 5:
//               shuffleN = 60 + Math.ceil((Math.random() - 0.5) * 10);
//               break;
//             case 6:
//               shuffleN = 100 + Math.ceil((Math.random() - 0.5) * 20);
//               break;
//             case 7:
//               shuffleN = 200 + Math.ceil((Math.random() - 0.5) * 40);
//               break;
//             case 8:
//               shuffleN = 400 + Math.ceil((Math.random() - 0.5) * 80);
//               break;
//           }

//           for (let i = 0; i < shuffleN; i++) {
//             shuffleMoveArray.push(1, 2, 3, 4);
//           }

//           shuffleMoveArray.sort(() => Math.random() - 0.5);
//           const iterJ = shuffleMoveArray.length * 100;
//           for (let j = 0; j < iterJ; j++) {
//             if (j != 0 && shuffleMoveArray[j] == 1 && shuffleMoveArray[j - 1] == 2) {
//               shuffleMoveArray[j] = 2;
//             }

//             if (j != 0 && shuffleMoveArray[j] == 2 && shuffleMoveArray[j - 1] == 1) {
//               shuffleMoveArray[j] = 1;
//             }
//             if (j != 0 && shuffleMoveArray[j] == 3 && shuffleMoveArray[j - 1] == 4) {
//               shuffleMoveArray[j] = 4;
//             }

//             if (j != 0 && shuffleMoveArray[j] == 4 && shuffleMoveArray[j - 1] == 3) {
//               shuffleMoveArray[j] = 3;
//             }
//           }
//           shuffleMoveArray.forEach((move) => {
//             switch (move) {
//               case 1:
//                 rightMove();
//                 break;
//               case 2:
//                 leftMove();
//                 break;
//               case 3:
//                 upMove();
//                 break;
//               case 4:
//                 downMove();
//                 break;
//             }
//           });
//           const imageRandom = Math.ceil(Math.random() * 10);

//           const puzzles = document.createElement('div');
//           game.appendChild(puzzles);
//           puzzles.classList.add('puzzles');
//           for (let i = 0; i < countPuzzles; i++) {
//             const puzzle = document.createElement('button');
//             puzzles.appendChild(puzzle);
//             puzzle.setAttribute('type', 'button');
//             puzzle.classList.add('puzzle');
//             puzzle.innerText = listNumbersPuzzles[i];
//             if (+listNumbersPuzzles[i] == 0) {
//               numEmptyCell = i;
//             }
//             puzzlesWidth = document.querySelector('.puzzles').clientWidth;
//             puzzle.style.background = `url(./src/images/${imageRandom}.jpg) top -${Math.floor((+listNumbersPuzzles[i] === 0 ? (countPuzzles - 1) : (listNumbersPuzzles[i] - 1)) / sizePuzzles) * puzzlesWidth
//                           / sizePuzzles}px left -${((+listNumbersPuzzles[i] === 0 ? (countPuzzles - 1) : (listNumbersPuzzles[i] - 1)) % sizePuzzles) * puzzlesWidth / sizePuzzles}px/${puzzlesWidth}px no-repeat`;
//           }
//           document.querySelector('.puzzles').style = `--sizePuzzles: ${sizePuzzles}`;

//           const time = document.createElement('div');
//           dashBoard.appendChild(time);
//           time.classList.add('time');
//           time.innerHTML = '<span class="min">00</span>:<span class="sec">00</span>';
//           const move = document.createElement('div');
//           dashBoard.appendChild(move);
//           move.classList.add('move');
//           move.innerText = 0;
//           const reset = document.createElement('button');
//           dashBoard.appendChild(reset);
//           reset.classList.add('reset');
//           reset.innerText = 'reset';
//           const records = document.createElement('select');
//           dashBoard.appendChild(records);
//           records.classList.add('records');
//           records.selectedIndex = 0;
//           const label = document.createElement('option');
//           records.appendChild(label);
//           label.classList.add('label');
//           label.innerText = 'RECORDS';
//           const labelPos = document.createElement('option');
//           records.appendChild(labelPos);
//           labelPos.classList.add('label');
//           labelPos.innerText = 'TIME - -1- -,- -2- -,- -3- -,- -4- -,- -5- -,- -6- -,- -7- -,- -8- -,- -9- -,- -10- -';
//           for (let i = 3; i < 9; i++) {
//             const recordsSize = document.createElement('option');
//             records.appendChild(recordsSize);
//             recordsSize.classList.add('records-option');
//             recordsSize.innerText = `${i}x${i}|`;
//             const spanRecords = document.createElement('span');
//             recordsSize.appendChild(spanRecords);
//             const recordsSizeMove = document.createElement('option');
//             records.appendChild(recordsSizeMove);
//             recordsSizeMove.classList.add('records-option');
//             recordsSizeMove.innerText = '-----|';
//             const spanRecordsMove = document.createElement('span');
//             recordsSizeMove.appendChild(spanRecordsMove);
//           }

//           const save = document.createElement('button');
//           dashBoard.appendChild(save);
//           save.classList.add('save');
//           save.innerText = 'save';
//           const tone = document.createElement('button');
//           dashBoard.appendChild(tone);
//           tone.classList.add('tone');
//           tone.innerText = 'tone';
//           const solve = document.createElement('button');
//           dashBoard.appendChild(solve);
//           solve.classList.add('solve');
//           solve.innerText = 'solve';
//         }
//         document.querySelectorAll('.records option span').forEach((item, i) => {
//           i % 2 === 0 ? item.innerText = records[i / 2].map((x) => (x == Infinity
//             ? ' - -:- -'
//             : `${addZero(Math.floor(x / 60))}:${addZero(x % 60)}`))
//             : item.innerText = recordsMove[(i - 1) / 2].map((x, j) => (x == '-------'
//               ? '-------'
//               : `-${(+recordsMove[(i - 1) / 2][j] / 10000).toFixed(4).replace('0.', '')}`));
//         });
//         selectSize = document.querySelector('.select-size');
//         selectSize.addEventListener('change', () => {
//           localStorage.removeItem('saveSelect');
//           localStorage.removeItem('saveGame');
//           sizePuzzles = (+selectSize.options[selectSize.selectedIndex].text[6]);
//           localStorage.setItem('saveSelect', sizePuzzles);
//           init();
//         });
//         dragClick();
//         document.querySelector('.save').addEventListener('click', saveGame);
//       };

//       init();

//       function dragClick() {
//         let flagClick = 0;
//         const objPuzzles = document.querySelectorAll('.puzzles .puzzle');
//         objPuzzles[numEmptyCell].classList.add('empty-puzzle');
//         for (let i = 0; i < countPuzzles; i++) {
//           objPuzzles[i].addEventListener('click', () => {
//             tone(toneX ? 'a1b8ee375e9cc23.mp3' : '');
//             if (Math.abs(i - numEmptyCell) == 1 && Math.floor(i / sizePuzzles) == Math.floor(numEmptyCell / sizePuzzles) || Math.abs(i - numEmptyCell) == sizePuzzles) {
//               objPuzzles[numEmptyCell].classList.remove('empty-puzzle');
//               if (flagClick != 1) {
//                 movesArrayReverse.push(numEmptyCell);
//                 localStorage.setItem('movesArrayReverse', movesArrayReverse);
//               }

//               [objPuzzles[i].innerHTML, objPuzzles[numEmptyCell].innerHTML] = [objPuzzles[numEmptyCell].innerHTML, objPuzzles[i].innerHTML];
//               [objPuzzles[i].style.backgroundPosition, objPuzzles[numEmptyCell].style.backgroundPosition] = [objPuzzles[numEmptyCell].style.backgroundPosition, objPuzzles[i].style.backgroundPosition];
//               numEmptyCell = i;
//               move = document.querySelector('.move');
//               move.innerText++;
//               objPuzzles[numEmptyCell].classList.add('empty-puzzle');
//             }
//             let flagWin = 1;
//             for (let i = 0; i < countPuzzles; i++) {
//               objPuzzles[i].draggable = false;
//               if (Math.abs(i - numEmptyCell) == 1 && Math.floor(i / sizePuzzles) == Math.floor(numEmptyCell / sizePuzzles)
//                                       || Math.abs(i - numEmptyCell) == sizePuzzles) {
//                 objPuzzles[i].draggable = true;
//               }
//               if (flagWin === 1 && (i !== countPuzzles - 1 ? (+items[i].innerText - i) !== 1
//                 : (+items[i].innerText) !== 0)) {
//                 flagWin = 0;
//               }
//             }
//             if (flagWin === 1) {
//               document.querySelector('.puzzles').classList.add('win');
//               document.querySelector('.win').innerHTML += `<span>Ура! Вы решили головоломку за 
//                               ${min.innerText}:${sec.innerText} 
//                               и ${move.innerText} ходов</span>`;
//               document.querySelector('.empty-puzzle').style.border = 'none';
//               document.querySelector('.empty-puzzle').style.borderRadius = '0';
//               document.querySelectorAll('.puzzle').forEach((item) => item.style.color = 'transparent');

//               for (let i = 0; i < 6; i++) {
//                 if (i === sizePuzzles - 3 && (+min.innerText * 60 + (+sec.innerText)) < Math.max(...records[i])) {
//                   records[i][9] = +min.innerText * 60 + (+sec.innerText);
//                   recordsMove[i][9] = move.innerText;
//                   const recordsTimeMove = {};
//                   records[i].forEach((item, j) => recordsTimeMove[records[i][j]] = recordsMove[i][j]);
//                   records[i].sort((a, b) => (a - b));
//                   records[i].forEach((item, j) => recordsMove[i][j] = recordsTimeMove[item]);
//                 }
//               }
//               document.querySelectorAll('.records option span').forEach((item, i) => {
//                 i % 2 === 0 ? item.innerText = records[i / 2].map((x) => (x == Infinity
//                   ? ' - -:- -'
//                   : `${addZero(Math.floor(x / 60))}:${addZero(x % 60)}`))
//                   : item.innerText = recordsMove[(i - 1) / 2].map((x, j) => (x == '-------'
//                     ? '-------'
//                     : `-${(+recordsMove[(i - 1) / 2][j] / 10000).toFixed(4).replace('0.', '')}`));
//               });
//               localStorage.setItem('recordsStore', records.join('|'));
//               localStorage.setItem('recordsStoreMove', recordsMove.join('|'));
//             }
//           });
//         }

//         let dragSrcEl = null;

//         function handleDragStart(e) {
//           tone(toneX ? 'cb08c3923b42e5c.mp3' : '');
//           this.style.opacity = '0.4';

//           dragSrcEl = this;

//           e.dataTransfer.effectAllowed = 'move';
//           e.dataTransfer.setData('text/html', this.innerHTML);
//           e.dataTransfer.setData('text/css', this.style.backgroundPosition);
//         }

//         function handleDragOver(e) {
//           if (e.preventDefault) {
//             e.preventDefault();
//           }

//           e.dataTransfer.dropEffect = 'move';

//           return false;
//         }

//         function handleDragEnter() {
//           if (this.innerText == 0) {
//             this.classList.add('over');
//           }
//         }

//         function handleDragLeave() {
//           if (this.innerText == 0) {
//             return false;
//           }
//           this.classList.remove('over');
//         }

//         function handleDrop(e) {
//           tone(toneX ? 'a1b8ee375e9cc23.mp3' : '');
//           this.classList.remove('empty-puzzle');

//           if (this.innerText != 0) {
//             return false;
//           }

//           if (e.stopPropagation) {
//             move = document.querySelector('.move');
//             move.innerText++;
//             movesArrayReverse.push(numEmptyCell);
//             localStorage.setItem('movesArrayReverse', movesArrayReverse);
//             e.stopPropagation();
//           }

//           if (dragSrcEl != this) {
//             dragSrcEl.innerHTML = this.innerHTML;
//             dragSrcEl.style.backgroundPosition = this.style.backgroundPosition;
//             this.innerHTML = e.dataTransfer.getData('text/html');
//             this.style.backgroundPosition = e.dataTransfer.getData('text/css');
//           }

//           let flagWin = 1;
//           for (let i = 0; i < countPuzzles; i++) {
//             items[i].draggable = false;
//             if (items[i].innerText == 0) {
//               numEmptyCell = i;
//             }
//             if (flagWin === 1 && (i !== countPuzzles - 1 ? (+items[i].innerText - i) !== 1
//               : (+items[i].innerText) !== 0)) {
//               flagWin = 0;
//             }
//           }

//           if (flagWin === 1) {
//             min = document.querySelector('.min').innerText;
//             document.querySelector('.puzzles').classList.add('win');
//             document.querySelector('.win').innerHTML += `<span>Ура! Вы решили головоломку за 
//                               ${min.innerText}:${sec.innerText} 
//                               и ${move.innerText} ходов</span>`;
//             document.querySelector('.empty-puzzle').style.border = 'none';
//             document.querySelector('.empty-puzzle').style.borderRadius = '0';
//             document.querySelectorAll('.puzzle').forEach((item) => item.style.color = 'transparent');
//           }

//           for (let i = 0; i < countPuzzles; i++) {
//             if (Math.abs(i - numEmptyCell) == 1 && Math.floor(i / sizePuzzles) == Math.floor(numEmptyCell / sizePuzzles)
//                                   || Math.abs(i - numEmptyCell) == sizePuzzles) {
//               items[i].draggable = true;
//               items[numEmptyCell].classList.add('empty-puzzle');
//             }
//           }

//           return false;
//         }

//         function handleDragEnd() {
//           this.style.opacity = '1';
//           items.forEach((item) => {
//             item.classList.remove('over');
//           });
//         }

//         let items = document.querySelectorAll('.puzzles .puzzle');
//         for (let i = 0; i < countPuzzles; i++) {
//           if (Math.abs(i - numEmptyCell) == 1 && Math.floor(i / sizePuzzles) == Math.floor(numEmptyCell / sizePuzzles)
//                               || Math.abs(i - numEmptyCell) == sizePuzzles) {
//             items[i].draggable = true;
//           }
//         }

//         items.forEach((item) => {
//           item.addEventListener('dragstart', handleDragStart, false);
//           item.addEventListener('dragenter', handleDragEnter, false);
//           item.addEventListener('dragover', handleDragOver, false);
//           item.addEventListener('dragleave', handleDragLeave, false);
//           item.addEventListener('drop', handleDrop, false);
//           item.addEventListener('dragend', handleDragEnd, false);
//         });

//         document.querySelector('.tone').classList.add('tone--active');
//         document.querySelector('.tone').classList.toggle('tone--active', toneX);
//         function tone(pathtone = toneX ? 'openhat.wav' : '') {
//           const audio = new Audio();
//           audio.src = `./src/sounds/${pathtone}`;
//           audio.autoplay = true;
//         }

//         document.querySelector('.tone').addEventListener('click', () => {
//           toneX = !toneX;
//           document.querySelector('.tone').classList.toggle('tone--active', toneX);
//           tone();
//         });

//         let i = 0;
//         const element = window.document.querySelectorAll('.puzzle');
//         function solveGame() {
//           flagClick = 1;
//           movesArray = localStorage.getItem('movesArrayReverse').split(',').reverse();
//           const len = movesArray.length;
//           if (element[movesArray[i]] != 'undefined') {
//             element[movesArray[i]].click();
//           }

//           i += 1;
//           if (i < len) {
//             const zxc = setTimeout(solveGame, '700');
//             if (document.querySelector('.empty-puzzle').style.border == 'none') {
//               clearTimeout(zxc);
//             }
//           }
//         }

//         document.querySelector('.reset').addEventListener('click', init);
//         document.querySelector('.solve').addEventListener('click', solveGame);
//       }

//       function start() {
//         setInterval(timer, 1000);
//       }

//       function timer() {
//         sec = document.querySelector('.sec');
//         min = document.querySelector('.min');
//         sec.innerText = addZero((parseInt(sec.innerText) + 1) % 60);
//         min.innerText = sec.innerText == 0 ? addZero(parseInt(min.innerText) + 1) : addZero(parseInt(min.innerText));
//       }

//       function addZero(n) {
//         return (parseInt(n, 10) < 10 ? '0' : '') + n;
//       }
//       start();

//       function saveGame() {
//         localStorage.removeItem('saveGame');
//         localStorage.setItem('movesArrayReverse', movesArrayReverse);
//         localStorage.setItem('saveGame', document.querySelector('body').innerHTML);
//       }

//       window.addEventListener('resize', init);
//     };
//     return (
//       <div className="game">
//         { gem() }
//       </div>
//     );
//   }
// }

// export default Game;
