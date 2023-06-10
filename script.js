// Los requerimientos son
//Reemplazar "e" por "enter"
//Reemplazar "i" por "imes"
//Reemplazar "a" por "ai"
//Reemplazar "o" por "ober"
//Reemplazar "u" por "ufat"

//--------Definiendo las variables----------

const TextArea= document.querySelector(".TextArea");
const Message=document.querySelector(".TextEncrypted");
const encryption_key=[["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];


//-------- Creando funciones---------------//


// Función para remover tildes
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 


// Funcion de encriptación .................
/*
function encrypt(Text_2_Encrypt){
    console.log(Text_2_Encrypt)
    Text_2_Encrypt=removeAccents(Text_2_Encrypt);
    console.log(Text_2_Encrypt)
    Text_2_Encrypt=Text_2_Encrypt.toLowerCase();
    console.log(Text_2_Encrypt)
    
    for(let i=0; i<encryption_key.length;i++){
        console.log(Text_2_Encrypt)
        console.log(encryption_key.length)
        if(Text_2_Encrypt.includes(encryption_key[i][0])){
            Text_2_Encrypt=Text_2_Encrypt.replaceAll(encryption_key[i][0],encryption_key[i][1]);
        }
    }
    return Text_2_Encrypt;
}
*/
function encrypt(Text_2_Encrypt){
    console.log(Text_2_Encrypt)     
    Text_2_Encrypt=Text_2_Encrypt.toLowerCase();
    let encryptionResult="";
    for(let i=0;i<Text_2_Encrypt.length;i++){
        
        console.log(Text_2_Encrypt[i]);
        switch(Text_2_Encrypt[i]){
            case 'a':
                encryption="ai";
                break;
            case 'e':
                encryption="enter";
                break;
            case 'i':
                encryption="imes";
                break;
            case 'o':
                encryption="ober";
                break;
            case 'u':
                encryption="ufat";
                break;
            default:
                encryption=Text_2_Encrypt[i];
                break;
        }

        encryptionResult +=encryption;
    }
    
        
    return encryptionResult;
}


// Funcion de desencriptación .................

function decrypt(Text_2_Decrypt){
    Text_2_Decrypt=removeAccents(Text_2_Decrypt);
    Text_2_Decrypt=Text_2_Decrypt.toLowerCase();
    
    for(let i=0; i<encryption_key.length;i++){
        if(Text_2_Decrypt.includes(encryption_key[i][1])){
            Text_2_Decrypt=Text_2_Decrypt.replaceAll(encryption_key[i][1],encryption_key[i][0]);
        }
    }
    return Text_2_Decrypt;
}

// Funciones para botones

function btnEncrypt () {
    const Text_2_Encrypt= encrypt(TextArea.value);
    Message.value= Text_2_Encrypt;
    Message.style.backgroundImage="none"; 

}

function btnDecrypt () {
    const Text_2_Decrypt= decrypt(TextArea.value);
    Message.value= Text_2_Decrypt;
    Message.style.backgroundImage="none"; 
}

// Funcion para el botón de copiado
function CopyText(textAreaClass) {
    // Obtener el elemento textarea
    const textArea = document.querySelector(`textarea.${textAreaClass}`);

    // Seleccionar el texto dentro del textarea
    textArea.select();

    // Copiar el texto al portapapeles
    document.execCommand('copy');

    // Deseleccionar el texto
    textArea.setSelectionRange(0, 0);
  }

