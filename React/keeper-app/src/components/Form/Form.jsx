import './Form.css'

function Form() {

    return (
        <form className='note-form'>
            <div className='note-header'>
                Add a note
                <i className="fa fa-times note-form-icon--cancel" aria-hidden="true"></i>
                <i className="fa fa-check note-form-icon--confirm" aria-hidden="true"></i>
            </div>
            <input className='note-input' 
                id='note-input__title' 
                type='text'
                placeholder='Title'
                autoComplete='false'/>
            <input className='note-input' 
                id='note-input__content' 
                type='text'
                placeholder='Take a note...'
                autoComplete='false'/>
        </form>
    );
}

export default Form;