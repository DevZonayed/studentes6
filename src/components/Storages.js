class Storages {



    has(key){
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key));
        }else{
            return false;
        }
    }
    send(key , data){

        let All_data = [];
        if(this.has(key)){
            All_data = this.has(key);
        }
        All_data.push(data)
        localStorage.setItem(key , JSON.stringify(All_data))
    }
}

export default Storages;