export const validate = values => {
    const errors = {};

    if(!values.title){
        errors.title = 'Required';
    }
    if(!values.year){
        errors.year = 'Required';
    }
    if(!values.description){
        errors.description = 'Required';
    }
    if(!values.author){
        errors.author = 'Required';
    }
    if(!values.genre){
        errors.genre = 'Required';
    }
    if(!values.price){
        errors.price = 'Required';
    }
    if(!values.quantity){
        errors.quantity = 'Required';
    }
    if(!values.isbn){
        errors.isbn = 'Required';
    }

    return errors;
}