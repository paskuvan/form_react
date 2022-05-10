const BasicForm = (props) => {
  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>Nombre</label>
          <input type='text' id='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Apellido</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>Correo electrónico</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
