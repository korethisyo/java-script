var user_hand = prompt('ぐー、ちょき、ぱーから選んでください');

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptが選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand() {
  var js_hand_num = Math.floor(Math.random() * 3);
  var hand_name;

  if(js_hand_num == 0){
    hand_name =　'ぐー';
  } else if(js_hand_num == 1){
    hand_name = 'ちょき';
  } else if(js_hand_num == 2){
    hand_name = 'ぱー';
  }

  return hand_name;
}

function winLose(user, js){
  var winLoseStr;

  if(user == "ぐー"){
    if(js == "ぐー"){
      winLoseStr = "あいこ";
    }else if(js == "ちょき"){
      winLoseStr = "勝ち";
    }else if(js == "ぱー"){
      winLoseStr = "負け";
    }
  }else if(user == "ちょき"){
    if(js == "ぐー"){
      winLoseStr = "負け";
    }else if(js == "ちょき"){
      winLoseStr = "あいこ";
    }else if(js == "ぱー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "ぱー"){
    if(js == "ぐー"){
      winLoseStr = "勝ち";
    }else if(js == "ちょき"){
      winLoseStr = "負け";
    }else if(js == "ぱー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}