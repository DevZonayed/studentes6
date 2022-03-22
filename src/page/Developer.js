import Alert from "../components/Alert.js";
import Storages from "../components/Storages.js";

/**
 * Storager Class Initialize here // 
 */
let stor = new Storages;


class Developer extends Alert{

    constructor( devs_form , devs_penal ){
        super();

        this.form = devs_form ; 
        this.penal = devs_penal;
        this.formEvent(this.form)
        this.sendToDevs(stor.has('devs'))
    }

    sendToDevs(devs){
        if(devs){
            let showElement = ``;
            devs.map(data => {

                const {name , email , skill , gender , photo} = data ;
                
                showElement += `
                                <tr>
                                    <td>1</td>
                                    <td>${name}</td>
                                    <td>${email}</td>
                                    <td>${skill}</td>
                                    <td>${gender}</td>
                                    <td><img src="${photo}" alt=""></td>
                                    <td>
                                        <button class="btn btn-sm btn-info"><i class="fas fa-eye"></i></button>
                                        <button class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></button>
                                        <button class="btn btn-sm btn-danger"><i class="fas fa-times"></i></button>
                                    </td>
                                </tr>
                `
            })
            this.penal.innerHTML = showElement;
        }
    }

    formEvent(from){
        from.onsubmit = function(e){
            e.preventDefault();
            let {name , email , skill , gender , photo = '../.././assets/image/avater.jpg'} = Object.fromEntries(new FormData(e.target).entries());
            
            if(name == '' || email == '' || skill == '' || gender == ''){
                Alert.danger('All Fields are requered', this)
            }else{
                stor.send(
                    'devs' , {
                        'name'      : name,
                        'email'     : email,
                        'skill'     : skill,
                        'gender'    : gender,
                        'photo'     : (photo == "" || photo == "#")  ? '../.././assets/image/avater.jpg' : photo
                    }
                )
                from.reset();


                /**
                 * Send to devs area
                 */
                 if(stor.has('devs')){
                    let showElement = ``;
                    stor.has('devs').map(data => {
        
                        const {name , email , skill , gender , photo} = data ;
                        
                        showElement += `
                                        <tr>
                                            <td>1</td>
                                            <td>${name}</td>
                                            <td>${email}</td>
                                            <td>${skill}</td>
                                            <td>${gender}</td>
                                            <td><img src="${photo}" alt=""></td>
                                            <td>
                                                <button class="btn btn-sm btn-info"><i class="fas fa-eye"></i></button>
                                                <button class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></button>
                                                <button class="btn btn-sm btn-danger"><i class="fas fa-times"></i></button>
                                            </td>
                                        </tr>
                        `
                    })
                }
            }



        }
    }



}

export default Developer;