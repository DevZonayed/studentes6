
class Alert {

    static danger(message , parent , direction = 'top'){
        if( direction == 'top'){
            parent.insertAdjacentHTML("afterbegin" , `<div class="alert alert-danger alert-dismissible fade show"> ${message} </div>`);

            let alertwait =  setTimeout(() => {
                parent.removeChild(parent.childNodes[0])
                clearTimeout(alertwait)
            }, 2000);

        }else if( direction == 'bottom'){
            parent.insertAdjacentHTML("afterend" , `<div class="alert alert-danger alert-dismissible fade show"> ${message}</div>`)
            
            let alertwait =  setTimeout(() => {
                parent.removeChild(parent.childNodes[parent.childNodes.length-1])
                clearTimeout(alertwait)
            }, 2000);
        }
    }
    static success(message , parent , direction = 'top'){
        if( direction == 'top'){
            parent.insertAdjacentHTML("afterbegin" , `<div class="alert alert-success alert-dismissible fade show"> ${message} </div>`)

            
            let alertwait =  setTimeout(() => {
                parent.removeChild(parent.childNodes[0])
                clearTimeout(alertwait)
            }, 2000);
        }else if( direction == 'bottom'){
            parent.insertAdjacentHTML("afterend" , `<div class="alert alert-success alert-dismissible fade show"> ${message} </div>`)
            
            let alertwait =  setTimeout(() => {
                parent.removeChild(parent.childNodes[0])
                clearTimeout(alertwait)
            }, 2000);
        }
    }
    static warning(message , parent , direction = 'top'){
        if( direction == 'top'){
            parent.insertAdjacentHTML("afterbegin" , `<div class="alert alert-warning alert-dismissible fade show"> ${message} </div>`)
            
            let alertwait =  setTimeout(() => {
                parent.removeChild(parent.childNodes[0])
                clearTimeout(alertwait)
            }, 2000);
        }else if( direction == 'bottom'){
            parent.insertAdjacentHTML("afterend" , `<div class="alert alert-warning alert-dismissible fade show"> ${message} </div>`)
            
            let alertwait =  setTimeout(() => {
                parent.removeChild(parent.childNodes[0])
                clearTimeout(alertwait)
            }, 2000);
        }
    }
    static info(message , parent , direction = 'top'){
        if( direction == 'top'){
            parent.insertAdjacentHTML("afterbegin" , `<div class="alert alert-info alert-dismissible fade show"> ${message} </div>`)
            
            let alertwait =  setTimeout(() => {
                parent.removeChild(parent.childNodes[0])
                clearTimeout(alertwait)
            }, 2000);
        }else if( direction == 'bottom'){
            parent.insertAdjacentHTML("afterend" , `<div class="alert alert-info alert-dismissible fade show"> ${message}</div>`)
            
            let alertwait =  setTimeout(() => {
                parent.removeChild(parent.childNodes[0])
                clearTimeout(alertwait)
            }, 2000);
        }
    }

}
export default Alert;