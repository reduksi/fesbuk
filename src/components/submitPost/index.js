import './style.css'

export default function submitPost({placeholder, button, withTitle, onSubmit = () => {}}){

    function submitForm(e){
        e.preventDefault()
        const {title, body} = e.target
        onSubmit(title.value, body.value)
        e.target.reset()
    }

    return (
    <div className="submit-post">
        <form onSubmit={submitForm}>
            {withTitle &&
                <input name="title" placeholder={"Title"} rows="2" className="form-control input-lg p-text-area"/>}
            <textarea name="body" placeholder={placeholder} rows="2" className="form-control input-lg p-text-area"/>
            <footer className="panel-footer">
                <button type="submit">{button}</button>
            </footer>
        </form>
    </div>
    )
}