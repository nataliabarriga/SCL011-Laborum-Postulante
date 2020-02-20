import React from 'react';
import { useMyContext } from '../Provider';
import './Forms.css';

const OtherProfiles = () => {

  const [myState, dispatch] = useMyContext();

  const onChange = (event) => {
    dispatch({
      type: 'ADD_INFORMATION',
      field: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <div className="icon-title">
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1679 10.3548H13.4674C13.0641 10.3548 12.8879 9.85233 13.1767 9.6078C14.6557 8.35244 15.5714 5.79868 15.5714 4.21053C15.5714 1.88881 13.6826 0 11.3608 0C10.2678 0 9.27082 0.418531 8.52167 1.10373C10.4023 1.52459 11.812 3.20724 11.812 5.21298C11.812 6.80113 11.5157 9.52643 10.0367 10.7818C9.74787 11.0263 9.92408 11.5288 10.3274 11.5288H11.0279C13.1582 11.9047 14.619 13.6591 14.619 15.5678V15.9688H17.9106C18.1691 15.9688 18.3784 15.7595 18.3784 15.501V14.5653C18.3784 12.2436 16.4896 10.3548 14.1679 10.3548ZM9.12406 11.8585H9.82457C12.1463 11.8585 14.0351 13.7473 14.0351 16.069V17.0047C14.0351 17.2632 13.8258 17.4725 13.5673 17.4725H0.467837C0.209279 17.4725 0 17.2632 0 17.0047V16.069C0 13.7473 1.8885 11.8585 4.21053 11.8585H4.91072C5.31494 11.8585 5.48959 11.3554 5.20141 11.1115C3.72242 9.85611 2.80702 7.30235 2.80702 5.7142C2.80702 3.39248 4.69552 1.50367 7.01755 1.50367C9.33927 1.50367 11.2281 3.39248 11.2281 5.7142C11.2281 7.30235 10.3124 9.85611 8.83338 11.1115C8.54457 11.356 8.72079 11.8585 9.12406 11.8585Z" fill="black"/>
        </svg>
        <p className="titleComponent">Otros perfiles</p>
      </div>

      <p className="labelComponent">URL Linkedin</p>
      <input
        type="text"
        name="urlLinkedin"
        className="input col-4"
        onChange={onChange}
      />

      <p className="labelComponent">URL Portafolio (Behance, Dribbble, etc.)</p>
      <input
        type="text"
        name="urlPortfolio"
        className="input col-4"
        onChange={onChange}
      />

      <p className="labelComponent">URL Redes sociales (Facebook, Twitter, Instagram, etc.)</p>
      <input
        type="text"
        name="urlRrss"
        className="input col-4"
        onChange={onChange}
      />
    </div>
  );
};

export default OtherProfiles;
