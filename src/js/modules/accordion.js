const accordion = (triggerSelector, contentSelector) => {
    const btns = document.querySelectorAll(triggerSelector);


    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            this.classList.toggle('active');
            if(this.classList.contains('active')) {
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.classList.remove('active-content');
                this.nextElementSibling.style.maxHeight = '0px';
            }
            
        });
    });
    // blocks = document.querySelectorAll(contentSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if(!this.classList.contains('active')){
                
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active');
    //             });
    //             this.classList.add('active');
    //         }
    //     });
    // });
};

export default accordion;