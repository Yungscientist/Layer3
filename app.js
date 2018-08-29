var console, window;
window.onload = function () {
//    "use strict";

 

    // var html = document.querySelector('html'), body = document.querySelector("body");

    let cart = document.querySelector("#cart");
    cart.style.cursor = "pointer";
    const buy = document.querySelectorAll("#buy");
    let cartItem = document.createElement('div');
        

        var span = document.createElement('span');
        let num = span.textContent;
        let containerDiv = this.document.createElement('div');
        containerDiv.classList = 'pt-1 pr-3 pb-1 pl-0';
    
        
    buy.forEach( card => {
        
        

    var addToCart = e => {
        if(cart.textContent){
            if( e.target.textContent){
                num = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.childElementCount+1;

                var order = e.target.parentElement.parentElement.children[2].firstElementChild.children[2].firstElementChild.firstElementChild;

                 order.textContent = (Number(order.textContent) + 1);
               
               
                span.textContent = ' '.concat(num);
                span.style.color = 'limegreen';
                
                cart.appendChild(span);

                var targets = e.target.parentElement.parentElement.firstElementChild.firstElementChild;
                // console.log(targets);

                // create & add element to cart for each clicked item
                var div = document.createElement('div'), img = document.createElement('img'), del = document.createElement('span');
                
                let details, ul = document.createElement('ul'); 
        var price = e.target.parentElement.parentElement.children[2].firstElementChild.firstElementChild.firstElementChild.textContent;
        // console.log(price);
        

                details = //html
                `
                    <li class='mr-5'><i class='fa fa-map-marker'></i> Law School</li>
                    <li><i class='fa fa-money text-danger'> ${price} </i></li>
                `;
                ul.innerHTML = details;
                ul.classList = ' d-flex  flex-row mt-4 text-secondary';
                
                div.classList = 'd-flex flex-row';
                img.src = targets.src;
                img.alt = targets.alt;
                img.style.width = '18%';
                img.style.height = '20%';
                img.style.borderRadius = "90%";
                del.classList = 'fa fa-remove ml-lg-5 pl-5 mt-lg-4';
                
                div.append(img);
                div.append(del);                
                var div_style = div.style;
                
                div_style.background = '#bbb';
                div_style.marginBottom = '5px';
                div.insertBefore(ul, del);
                
                // cartIte m.style.display = 'none';
                cartItem.classList.replace("show","hide");
                containerDiv.style.marginBottom = '20px';
                containerDiv.append(div);
                
                del.addEventListener('click', e => {
                    
                    if(e.target.className.includes('fa')){
                        let div = e.target.parentElement.parentElement.removeChild(e.target.parentElement);
                            div.remove();
                        console.log(div);
                        var up;
                        up = (Number(span.textContent) -1);
                        console.log(up);
                        span.textContent = ' '.concat(up);
                        
                        order.innerText = (Number(order.innerText) -1);
                        // console.log(e.target.parentElement);
                    }
                });

            }
            else{
                alert('error');
            }
        }
        else{ 
            // console.log(typeof cart.textContent);
            cart.textContent = 1;
        }
        
        };
        card.addEventListener("click", addToCart);    

        
    });
    
    cartItem.appendChild(containerDiv);
        // show/hide cart items when user clicks the cart icon
        
        cartItem.style.width = '100%';
        cartItem.style.marginTop = '1em';

        cartItem.classList = 'bg-secondary';
        
    
    var page2 = document.querySelector("#page2"); 

    page1.classList = 'hide position-fixed';
    console.log(document.querySelector("#page1"));
    page1.appendChild(cartItem);

            var showCart = () => {
                // tweaking pages
                if(page1.className.includes('hide')){
                    page1.classList.replace("hide","show");
                    
                    page2.classList = ' clap-in';
                    
                }else if(page1.className.includes('show')){
                    page1.classList.replace("show", "hide");
                    page2.classList = ' clap-out';
                
                }
                const footer = document.querySelector("footer");
                if(window.innerWidth <= 550 && page1.classList.contains('show')){
                    
                        footer.classList.replace('footer', 'hide');
                        console.log(footer);
                       
                }
                else if(window.innerWidth <= 550 && page1.classList.contains('hide')){
                    
                    page2.style.borderBottomRightRadius = '0';
                    page2.style.borderBottomLeftRadius = '0';

                    footer.classList.replace('hide', 'footer');
                    console.log(footer);
                }
            
            };
        cart.addEventListener('click', showCart);



/////////////////////////
var arr = [];
        var order = document.querySelectorAll('#order');
        amount = order.textContent;        

};
