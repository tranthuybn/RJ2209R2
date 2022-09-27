class Validation{
    constructor(idForm){
        this.idForm = idForm;
        this.validation = {
            username: ['required', 'minLength'],
            email: ['isEmail'],
            phone: ['required', 'isPhone'],
            password: ['required', 'minLength','maxLength'],
            confirmPassword: ['required','confirmPassword']
        };
        this.validate = {
            required(value) {
                return value? 0 : '*Vui lòng nhập trường này'
            },
            isEmail(value) {
                const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                return value.match(regex) ? 0 : 'Email ko tồn tại'
            },
            isPhone(value) {
                const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
                return value.match(regex) ? 0 : 'Số điện thoại ko tồn tại'
            },
            minLength(value, min ='6') {
                return value.length >= min ? 0 : `Nhập tối thiểu ${min} ký tự`
            },
            maxLength(value, max ='12') {
                return value.length <= max ? 0 : `Nhập tối đa ${max} ký tự`
            },
            confirmPassword(value){
                const passwordValue = document.querySelector(`${idForm} input[type='password']`).value
                return value == passwordValue ? 0 : 'Mật khẩu nhập lại k đúng' 
            }
        }
    }
    handleSubmitForm(){
        const form = document.querySelector(this.idForm)
        const fields = form.querySelectorAll('.field')
        form.onsubmit = (e) => {
            let isValid = true
            const data = {}
            e.preventDefault()
            fields.forEach(input => {
                const errorMess = input.closest('.form-control').querySelector('.errorMess')
                for(let i = 0; i < this.validation[input.name].length; i++){
                    const rule = this.validation[input.name][i]
                    const temp = this.validate[rule](input.value)
                    if(temp){
                        errorMess.innerText = temp
                        isValid = false
                        break
                    }
                }
            })
            if(isValid){
                fields.forEach(input=>{
                    data[input.name] = input.value
                })
                this.getData(data)
            }
        }
    };
    getData(data){
        console.log(data)
    }
    handleEvent(){
        const form = document.querySelector(this.idForm)
        const fields = form.querySelectorAll('.field')
        fields.forEach(input=>{
            const errorMess = input.closest('.form-control').querySelector('.errorMess')
            input.oninput = () =>{
                errorMess.innerText = ''
            }
        })
    };
    start(){
        this.handleSubmitForm()
        this.handleEvent()
    }
}
const formSignUp = new Validation('#form-signUp')
formSignUp.start()
