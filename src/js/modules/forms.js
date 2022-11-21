import { postData } from "../services/requests";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        textarea = document.querySelector('textarea'),
        selects = document.querySelectorAll('select'),
        resultBlock = document.querySelector('.calc-price'),
        upload = document.querySelectorAll('[name="upload"]');

    const mes = {
        loading:  'Загрузка ...',
        success: 'Спасибо! Скоро с вами свяжемся',
        failure: 'Что-то пошло не так...',
        valid: 'Введите все данные',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
        load: 'assets/img/spinner.gif'
    };

    const path = {
        design: 'assets/server.php',
        question: 'assets/questions.php'
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        textarea.value = '';
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
        selects.forEach(select => {
            select.value = '';
        });
        resultBlock.textContent = 'Пожалуйста, выберите размер и материал';
    };

    upload.forEach(item => {
        item.addEventListener('input', ()=> {
            const arr = item.files[0].name.split('.');
            let dots;
            arr[0].length > 6 ? dots = '...' : dots = '.';
            let name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(()=> {
                item.style.display = 'none';
            },400);

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', mes.load);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let statusText = document.createElement('div');
            statusText.textContent = mes.loading;
            statusMessage.appendChild(statusText);



            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.design : api = path.question;
            console.log(api);

            if (item.classList.contains('calc_form')) {
                console.log(state);
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            console.log(formData);

            postData(api, formData)
            .then(res => {
                console.log(res);
                statusImg.setAttribute('src', mes.ok);
                statusText.textContent = mes.success;
            })
            .catch(() => {
                statusImg.setAttribute('src', mes.fail);
                statusText.textContent = mes.failure;
            })
            .finally(()=> {
                clearInputs();
                setTimeout(()=> {
                    statusMessage.remove();
                    item.classList.remove('fadeOutUp');
                    item.classList.add('fadeInUp');
                    item.style.display = 'block';
                }, 5000);
            });
        });
    });
};

export default forms;