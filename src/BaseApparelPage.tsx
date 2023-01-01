import { useValidateEmail, useValidateEmailType} from "./useValidateEmail"

function BaseApparelPage() {
  const [input, inputError, setInput, handleForm]:useValidateEmailType = useValidateEmail()
  return (
    <div className="BaseApparelPage">
      <div className="logo"><img src="./logo.svg" alt="Logo" /></div>
      <div className="hero">
        <picture>
          <source media="(min-width: 750px)" srcSet="./hero-desktop.jpg" />
          <source media="(min-width: 375px)" srcSet="./hero-mobile.jpg" />
          <img src="./hero-mobile.jpg" alt="hero" />
        </picture>
      </div>
      <div className="content">
        <img className="desktop-background" src="./bg-pattern-desktop.svg" alt="Background Pattern" />
        <h1><span>We're </span>coming soon</h1>
        <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        <form onSubmit={(e) => {handleForm(e);}}>
          <input
            className={inputError? 'error' : ''} 
            type="text" 
            placeholder="Email Address"
            onChange={(e) => setInput(e.target.value)}
            value = {input} />
            <p className={inputError? 'error' : ''}>Please provide a valid email</p>
            <img 
              className={inputError? 'error' : ''}
              src="./icon-error.svg" 
              alt="Error" />
          <button><img src="./icon-arrow.svg" alt="submit button" /></button>
        </form>
      </div>
    </div>

  )
}

export default BaseApparelPage