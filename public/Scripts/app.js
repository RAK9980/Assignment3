/* SPA -> Single Page Application */
/* Client Side */
//IIFE -> Immediately Invoked Function Expression
(function(){
    function Start()
    {
        console.log("App Started")
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/order-data');
                }
            });
        }
    }
    window.addEventListener("load", Start);   
})();