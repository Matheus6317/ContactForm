document.getElementById('form').addEventListener('submit',(event)=>{

    event.preventDefault();

    var cont = 0; 
    
    var name01 = document.querySelector('.name01');
    var name02 = document.querySelector('.name02');
    var email = document.querySelector('.email');
    var mess = document.querySelector('.mess');
    var block01 = document.querySelector('.block01');
    var firstone = document.querySelector('.firstone');

    if(document.getElementById('name').value == ''){
        document.getElementById('error01').textContent = 'This field is required'
        name01.style.borderColor = 'red';  
    }else{
        document.getElementById('error01').textContent = ''
        name01.style.borderColor = 'black';
        cont += 1
    }
    
    if(document.getElementById('famName').value == ''){
        document.getElementById('error02').textContent = 'This field is required'
        name02.style.borderColor = 'red';      
    }else{
        document.getElementById('error02').textContent = ''
        name02.style.borderColor = 'black';
        cont += 1
    }
    
    if(document.getElementById('email').value == ''){
        document.getElementById('error03').textContent = 'Please enter a valid email address'
        email.style.borderColor = 'red';      
    }else{
        document.getElementById('error03').textContent = ''
        email.style.borderColor = 'black';
        cont += 1
    }
    
    if(document.getElementById('type01').checked == false && document.getElementById('type02').checked == false){
        document.getElementById('error04').textContent = 'Please select a query type'
    }else{
        document.getElementById('error04').textContent = ''
        cont += 1
    }
    
    if(document.getElementById('message').value == ''){
        document.getElementById('error05').textContent = 'This field is required'
        mess.style.borderColor = 'red';      
    }else{
        document.getElementById('error05').textContent = ''
        mess.style.borderColor = 'black';
        cont += 1
    }
    
    if(document.getElementById('autorize').checked){
        document.getElementById('error06').textContent = ''
        cont += 1
    }else{
        document.getElementById('error06').textContent = 'To submit this form, please consent to being contacted'
    }
    
    if(cont >= 6){
        block01.style.opacity = 1;

        document.getElementById('name').value = ''
        document.getElementById('famName').value = ''
        document.getElementById('email').value = ''
        document.getElementById('type01').checked = false 
        document.getElementById('type02').checked = false
        document.getElementById('message').value = ''
        document.getElementById('autorize').checked = false

        cont = 0;
    }
    

})