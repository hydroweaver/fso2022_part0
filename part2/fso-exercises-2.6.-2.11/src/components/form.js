function Form(props) {
  const {onSubmit, nameInputValue, nameChangeHandler, phoneInputValue, phoneChaneHandler} = props
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={nameInputValue} onChange={nameChangeHandler} />
      </div>
      <div>
        phone: <input value={phoneInputValue} onChange={phoneChaneHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default Form;
