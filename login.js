
function check(){
    var i = 0
    var x = document.forms['login']['email'].value
    var y = document.forms['login']['password'].value



    /*if(y == ''){
        document.forms['login']['label2'].value='please enter your password'
    }else{
        document.forms['login']['label2'].value='amaliat ba mvafaghiat anjam shod'
    }*/

    if(x == '' || x == null){
        document.querySelector('.main>section>div:nth-of-type(2)>div>form>label:nth-of-type(1)').innerHTML='please enter your email'
        document.querySelector('.main>section>div:nth-of-type(2)>div>form>label:nth-of-type(1)').style.color='red'
        i++
    }else{
        document.querySelector('.main>section>div:nth-of-type(2)>div>form>label:nth-of-type(1)').innerHTML='amaliat ba mvafaghiat anjam shod'
        document.querySelector('.main>section>div:nth-of-type(2)>div>form>label:nth-of-type(1)').style.color='green'
    }
    // check password
    if(y == '' || y == null){
        document.querySelector('.main>section>div:nth-of-type(2)>div>form>label:nth-of-type(2)').innerHTML='please enter your password'
        document.querySelector('.main>section>div:nth-of-type(2)>div>form>label:nth-of-type(2)').style.color='red'
        i++
    }else{
        document.querySelector('.main>section>div:nth-of-type(2)>div>form>label:nth-of-type(2)').innerHTML='amaliat ba mvafaghiat anjam shod'
        document.querySelector('.main>section>div:nth-of-type(2)>div>form>label:nth-of-type(2)').style.color='green'
    }
    console.log(i)
    if(i>0){
        return false
    }
        
    

    

}