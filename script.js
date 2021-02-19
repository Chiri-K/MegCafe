/*
外部JavaScriptファイル 
*/
'use strict';

//年・月・日・時・分　を個別に取得 日時を表示

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();

const output = `${year}/${month + 1}/${date} ${hour}:${min}`;
document.getElementById('time').textContent = output;


//ドリンクメニューを表示
let drinkMenus = ["緑　　茶","紅　　茶","コーヒー"];
for(let i = 0;i < drinkMenus.length;i++){
    const li = `<li>${drinkMenus[i]}</li>`;
    document.getElementById('list').insertAdjacentHTML('beforeend',li);
  }
