const changeModalState = (state) => {
    const size = document.querySelectorAll('#size'),
        material = document.querySelectorAll('#material'),
        options = document.querySelectorAll('#options'),
        result = document.querySelector('.calc-price'),
        promocode = document.querySelectorAll('.promocode');



    function bindActionToElems(elem, prop) {
        elem.forEach((item) => {

            item.addEventListener('change', () => {
                switch(item.nodeName) {
                    case 'INPUT':
                        state[prop] = item.value; 
                        state.sum = result.textContent;
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        state.sum = result.textContent;
                        break;
                }
            });
        });
        
    }

    bindActionToElems(size, 'size');
    bindActionToElems(material, 'material');
    bindActionToElems(options, 'options');
    bindActionToElems(promocode, 'promocode');
};

export default changeModalState;