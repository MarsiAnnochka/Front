import './App.css'

const Form = (props)=>(
    <form method="get" action={props.path}>
        <p>
            <b>Имя пользователя: </b>
            <input required="true" type="text" name="username" /><br />
            <b>Пароль: </b>
            <input autoComplete="off" required="true" type="password" name="password" /><br />
            <input type="submit" value="Ready" id="ready" />
        </p>
    </form>
);

export default Form