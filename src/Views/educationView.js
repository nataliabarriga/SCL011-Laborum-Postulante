import React from 'react';
import Education from '../Component/education';
import './educationView.css';

/* function educacionView() {

  const [previewForm, setPreviewForm ] = useState('');
  const addEducation = <Education />

  let form;
  if (previewForm) {
    return (
      <Educationtwo />
      <button onClick={addEducation}>Agregar nueva Educación</button>
      )

  }else {
    form =
    <form>
    <Education />
    </form>
  }

  return (
    <div>
      {form}
    </div>
  );
}

export default educacionView; */


function educacionView() {
  return (
    <div className="view col-7">
      <Education />
    </div>
  );
}

export default educacionView;
