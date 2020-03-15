// import produce from 'immer';
import { debugForm } from '../../helpers/index';

export const reducer = (state) => {
     return {
        //Only curry functions:::::
        handleSubmit: ({save, event, formRef}) => {
            event.preventDefault();
            const form = new FormData(formRef.current);
            save(form, state.user.id);
            debugForm(form);
            return { show : false }
        },
        handleDelete: ({remove,id})=>{
            const resp = window.confirm("¿Está seguro?");
            if (resp) {
                remove(id);
            }
            
        },
        handleClose : () => ({ show: false }),
        handleShow : (user) => {
            console.log(user)
            return { show : true, user}
        },
        set: (key, value) => ({ [key]: value }),
    };
};

export const initialState = () => {
    return {
        show: false,
        user:{
            id: 0,
            name:'',
            lastName: '',
            email: '',
            state: '',
            password: ''
        }
    };
};
