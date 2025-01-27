// * Can you keep a secret? (433)

function createSecretHolder(secret) {

    class My {

        #secret;
    
        getSecret(){
            return this.#secret;
        }
        
        setSecret(val){
            this.#secret = val;
        }
    }

    const temp = new My();
    temp.setSecret(secret);

    return temp;
}