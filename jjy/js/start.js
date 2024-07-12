const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const thanks = document.querySelector("#thanks");
const mobileSlider = document.getElementById('mobileSlider');
const mobileValueDisplay = document.getElementById('mobileValueDisplay');
const napSlider = document.getElementById('napSlider');
const napValueDisplay = document.getElementById('napValueDisplay');
const foodSlider = document.getElementById('foodSlider');
const foodValueDisplay = document.getElementById('foodValueDisplay');
const tempSlider = document.getElementById('tempSlider');
const tempValueDisplay = document.getElementById('tempValueDisplay');
const coffeeSlider = document.getElementById('coffeeSlider');
const coffeeValueDisplay = document.getElementById('coffeeValueDisplay');
const resultButton = document.getElementById('resultButton');
const resultCount = document.getElementById('resultCount');
const resultDisplay = document.getElementById('resultDisplay');

document.getElementById('shareButton').addEventListener('click', function() {
    const url = 'https://www.google.com';

    navigator.clipboard.writeText(url).catch(function(err) {
        console.error('URL 복사 실패: ', err);
    });
});


resultButton.addEventListener('click', function() {
    const mobileIntake = parseInt(mobileSlider.value, 10);
    const napIntake = parseInt(napSlider.value, 10);
    const foodIntake = parseInt(foodSlider.value, 10);
    const tempIntake = parseInt(tempSlider.value, 10);
    const coffeeIntake = parseInt(coffeeSlider.value, 10);
    
    const maxMobile = 180;
    const bestMobile = 0;
    const maxNap = 120;
    const bestNap = 0;
    const maxFood = 100;
    const bestFood = 100;
    const maxTemp = 40;
    const bestTemp = 20;
    const maxCoffee = 300;
    const bestCoffee = 0;
    
    const mobileScore = (maxMobile - mobileIntake) / maxMobile * 20;
    const napScore = (maxNap - napIntake) / maxNap * 20;
    const foodScore = foodIntake / maxFood * 30;
    const tempScore =  (bestTemp - Math.abs(bestTemp - tempIntake))/ bestTemp * 10;
    const coffeeScore = (maxCoffee - coffeeIntake) / maxCoffee * 20;
    
    const totalScore = Math.round(mobileScore + napScore + foodScore + tempScore + coffeeScore);
    resultCount.textContent = `${totalScore} 점`;
    
    let resultText ='';
    
    if ( ( bestMobile - mobileIntake )> 20) {
        resultText += `전자기기 사용시간을 더 늘려야 해요.<br>`;
    } else if (( bestMobile - mobileIntake )< -20) {
        resultText += `전자기기 사용시간을 더 줄여야 해요.<br>`;
    }
    if ( ( bestNap - napIntake )> 20) {
        resultText += `낮잠 시간을 더 늘려야 해요.<br>`;
    } else if (( bestNap - napIntake )< -20) {
        resultText += `낮잠 시간을 더 줄여야 해요.<br>`;
    }
    if ( ( bestFood - foodIntake )> 10) {
        resultText += `야식 섭취량을 더 늘려야 해요.<br>`;
    } else if (( bestFood - foodIntake )< -10) {
        resultText += `야식 섭취량을 더 줄여야 해요.<br>`;
    }
    if ( ( bestTemp - tempIntake )> 3) {
        resultText += `실내 온도를 더 높여야 해요.<br>`;
    } else if (( bestTemp - tempIntake )< -3) {
        resultText += `실내 온도를 더 낮춰야 해요.<br>`;
    }
    if ( ( bestCoffee - coffeeIntake )> 50) {
        resultText += `카페인 섭취량을 더 늘려야 해요.<br>`;
    } else if (( bestCoffee - coffeeIntake )< -50) {
        resultText += `카페인 섭취량을 더 줄여야 해요.<br>`;
    }
    
    resultDisplay.innerHTML = resultText;
});
mobileSlider.addEventListener('input', function() { 
    mobileValueDisplay.textContent = `${mobileSlider.value} 분`;
});
napSlider.addEventListener('input', function() { 
    napValueDisplay.textContent = `${napSlider.value} 분`;
});
foodSlider.addEventListener('input', function() { 
    foodValueDisplay.textContent = `${foodSlider.value} 만큼`;
});
tempSlider.addEventListener('input', function() { 
    tempValueDisplay.textContent = `${tempSlider.value} °C`;
});
coffeeSlider.addEventListener('input', function() { 
    coffeeValueDisplay.textContent = `${coffeeSlider.value} mg`;
});

function thxxx() {
    result.style.WebkitAnimation = "fadeOut 1s";
    result.style.animation = "fadeOut 1s";
    setTimeout(() => { 
      thanks.style.display ="block";
      thanks.style.WebkitAnimation = "fadeIn 1s";
      thanks.style.animation = "fadeIn 1s";
      setTimeout(() => { 
        result.style.display = "none"; 
      }, 450);
    }, 450);
}

function end() {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => { 
      result.style.display ="block";
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";
      setTimeout(() => { 
        qna.style.display = "none"; 
      }, 450);
    }, 450);
}
function begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => { 
      qna.style.display ="block";
      qna.style.WebkitAnimation = "fadeIn 1s";
      qna.style.animation = "fadeIn 1s";
      setTimeout(() => { 
        main.style.display = "none"; 
      }, 450);
    }, 450);
}
