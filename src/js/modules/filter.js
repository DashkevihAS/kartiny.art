const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        all = wrapper.querySelectorAll('.all'),

        no = document.querySelector('.portfolio-no');



    const showFilterItems = (markedItems) => {
        all.forEach(item => {
            item.classList.remove('animated', 'fadeIn');
            item.style.display = 'none';
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        markedItems.forEach(item =>{
            item.classList.add('animated', 'fadeIn');
            item.style.display = 'block';
        });


        if(markedItems.length == 0) {
            no.classList.add('animated', 'fadeIn');
            no.style.display = 'block';
        }
        
    };

    menu.addEventListener('click', (e) => {
        let target = e.target;
        if (target&&target.tagName==='LI') {
            items.forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
        }
        

        let selectClass = e.target.classList[0],
            filterItems = wrapper.querySelectorAll(`.${selectClass}`);
            showFilterItems(filterItems);
    });  






};

export default filter;