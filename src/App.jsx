import './App.css';
import { useState } from 'react';

const App = () => {
  const [front, setFront] = useState('Start!');
  const [back, setBack] = useState('Press the → button to start the flashcards!');
  const [cardStatus, setCardStatus] = useState('');
  const [cardIndex, setCardIndex] = useState(0);

  const hiraganaCharacters = [
    {front: 'あ', back: 'a'},
    {front: 'い', back: 'i'},
    {front: 'う', back: 'u'},
    {front: 'え', back: 'e'},
    {front: 'お', back: 'o'},
    {front: 'か', back: 'ka'},
    {front: 'き', back: 'ki'},
    {front: 'く', back: 'ku'},
    {front: 'け', back: 'ke'},
    {front: 'こ', back: 'ko'},
    {front: 'さ', back: 'sa'},
    {front: 'し', back: 'shi'},
    {front: 'す', back: 'su'},
    {front: 'せ', back: 'se'},
    {front: 'そ', back: 'so'},
    {front: 'た', back: 'ta'},
    {front: 'ち', back: 'chi'},
    {front: 'つ', back: 'tsu'},
    {front: 'て', back: 'te'},
    {front: 'と', back: 'to'},
    {front: 'な', back: 'na'},
    {front: 'に', back: 'ni'},
    {front: 'ぬ', back: 'nu'},
    {front: 'ね', back: 'ne'},
    {front: 'の', back: 'no'},
    {front: 'は', back: 'ha'},
    {front: 'ひ', back: 'hi'},
    {front: 'ふ', back: 'fu'},
    {front: 'へ', back: 'he'},
    {front: 'ほ', back: 'ho'},
    {front: 'ま', back: 'ma'},
    {front: 'み', back: 'mi'},
    {front: 'む', back: 'mu'},
    {front: 'め', back: 'me'},
    {front: 'も', back: 'mo'},
    {front: 'や', back: 'ya'},
    {front: 'ゆ', back: 'yu'},
    {front: 'よ', back: 'yo'},
    {front: 'ら', back: 'ra'},
    {front: 'り', back: 'ri'},
    {front: 'る', back: 'ru'},
    {front: 'れ', back: 're'},
    {front: 'ろ', back: 'ro'},
    {front: 'わ', back: 'wa'},
    {front: 'を', back: 'wo'},
    {front: 'ん', back: 'n'},
  ];

  const handleCardClick = () => {
    if (cardStatus == '') {
      setCardStatus('flipped');
    } else {
      setCardStatus('');
    }
  };

  const checkAnswer = () => {
    if (cardStatus === '' && back !== 'Press the → button to start the flashcards!') {
      const guess = document.getElementById('guess').value;
      if (guess === hiraganaCharacters[cardIndex].back) {
        document.getElementById('guess').style.boxShadow = '0 0 5px 5px #00FF00';
      } else {
        document.getElementById('guess').style.boxShadow = '0 0 5px 5px #FF0000';
      }
    }
  };

  const handleNextClick = () => {
    if (cardIndex === 0){
      setFront(hiraganaCharacters[cardIndex].front);
      setBack(hiraganaCharacters[cardIndex].back);
    } else {
      setFront(hiraganaCharacters[cardIndex+1].front);
      setBack(hiraganaCharacters[cardIndex+1].back);
    }
    document.getElementById('guess').style.boxShadow = 'none';
    setCardIndex((cardIndex + 1) % hiraganaCharacters.length);
    setCardStatus('');
  };

  const handleBackClick = () => {
    setFront(hiraganaCharacters[cardIndex-1].front);
    setBack(hiraganaCharacters[cardIndex-1].back);
    setCardIndex((cardIndex - 1 + hiraganaCharacters.length) % hiraganaCharacters.length);
    setCardStatus('');
  };

  return (
    <div className="App">
      <div className='header'>
        <h3>Hiragana Practice 「ひらがなの練習」</h3>
        <h4>Let's study all the hiragana characters and start out Japanese learning journey!</h4>
        <h5>Number of Cards: 46</h5>
      </div>

      <div className={`card${cardStatus}`} onClick={handleCardClick}>
        <div class="front">{front}</div>
        <div class="back">{back}</div>
      </div>
      <div className="answerBox">
        <h3>Guess the pronunciation here: </h3>
        <input type="text" id="guess" name="guess"/>
        <button type="submit" onClick={checkAnswer} id="submitGuess">Submit</button>
      </div>

      <button type="next" id="backCard" onClick={handleBackClick}>←</button>
      <button type="next" id="nextCard" onClick={handleNextClick}>→</button>
    </div>
  )
}

export default App