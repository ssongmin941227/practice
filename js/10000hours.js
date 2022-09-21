const starteButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function calculator(){
    const fieldValue = document.querySelector(".field_value");
    let timeValue = document.querySelector(".time_value");
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == ""){
        alert('입력되지 않았으니 확인해주세요^_^');
        fieldValue.focus();
        return false;
    } else if(timeValue.value == ""){
        alert('문자는 입력이 안됩니다. 확인해주세요^_^');
        timeValue.focus();
        return false;
    } else if(timeValue_int > 24){
        alert('하루는 24시간을 넘을 수 없어요 ㅎ_ㅎ');
        return false;
    }

    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function(){
        loading.style.display = "none";
        result.style.display = 'flex';
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
    }, 1800);
}

function openmodal(){
    modal.style.display = 'flex';
}

function closemodal(){
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if(event.target == modal) {
        closemodal();
    }
}

function copyUrl(){
    let url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
        alert("URL이 복사되었습니다.");
    });
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openmodal);
closeButton.addEventListener('click', closemodal);
starteButton.addEventListener('click', calculator);