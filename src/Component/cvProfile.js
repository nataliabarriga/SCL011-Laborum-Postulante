import React, { useState, useEffect } from 'react';
import db from '../ConfigFirebase/FirebaseInit';
import './cvProfile.css';

function Jobs() {
  let [jobs, setJobs] = useState([]);
  useEffect(() => {
    db
      .collection('profilePostulante')
      .onSnapshot((snapshot) => {
        const newJobs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setJobs(jobs = newJobs);
      });
  }, []);
  return jobs;
}
const JobsView = () => {
  const jobs = Jobs();
  return (
    <div>
      <div id="headerCv">
        <div className="button">
          <button type="submit" className="buttonback">Volver</button>
        </div>
        <div className="viewDowload">
          <p className="view">
            <svg className="svgView" width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z" fill="#335453" />
            </svg> Así se muestra tu perfil a las empresas
          </p>
          <button type="submit" className="download">
            <svg className="svgDowload" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.375 0H2.625C1.18125 0 0 1.18125 0 2.625V18.375C0 19.8187 1.18125 21 2.625 21H18.375C19.8187 21 21 19.8187 21 18.375V2.625C21 1.18125 19.8187 0 18.375 0ZM7.21875 9.84375C7.21875 10.9331 6.33937 11.8125 5.25 11.8125H3.9375V14.4375H1.96875V6.5625H5.25C6.33937 6.5625 7.21875 7.44187 7.21875 8.53125V9.84375ZM13.7812 12.4687C13.7812 13.5581 12.9019 14.4375 11.8125 14.4375H8.53125V6.5625H11.8125C12.9019 6.5625 13.7812 7.44187 13.7812 8.53125V12.4687ZM19.0312 8.53125H17.0625V9.84375H19.0312V11.8125H17.0625V14.4375H15.0937V6.5625H19.0312V8.53125ZM3.9375 9.84375H5.25V8.53125H3.9375V9.84375ZM10.5 12.4687H11.8125V8.53125H10.5V12.4687Z" fill="white" />
            </svg>
            Descargar
          </button>
        </div>
      </div>
      {jobs.map((Jobs) => <div className="containerCv">
        <div className="headboard">
          <p className="nameUser">
            {Jobs.nameUser}
            {Jobs.lastName}
          </p>
        </div>
        <div className="containerInfo">
          <div id="containerLeft" className="col-4">
            <div className="email">
              <svg className="svg" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.49462 0H15.5063C15.7364 0 15.9519 0.0532812 16.1467 0.141062L10.1739 5.76222L10.1737 5.76234L10.1735 5.76256L8.46727 7.30591L0.854492 0.140938C1.04929 0.0532188 1.26462 0 1.49462 0ZM0 1.40618C0 1.18971 0.0565449 0.987055 0.149746 0.803711L5.77034 6.09368L0.149613 11.3835C0.0564785 11.2002 0 10.9975 0 10.7812V1.40618ZM8.81868 8.29994L10.5252 6.75641L16.1457 12.0463C15.9509 12.134 15.7356 12.1872 15.5056 12.1872H1.49387C1.26381 12.1872 1.04835 12.134 0.853516 12.0462L6.47434 6.75635L8.11444 8.29994C8.21169 8.3915 8.33916 8.43728 8.46656 8.43728C8.59396 8.43728 8.72139 8.3915 8.81868 8.29994ZM16.8502 0.803711L11.2295 6.09352L16.85 11.3834C16.9432 11.2001 16.9998 10.9974 16.9998 10.781V1.40596C16.9998 1.18962 16.9433 0.986992 16.8502 0.803711Z" fill="#00BCA0" />
              </svg>
              <p className="emailUser">martcamila1@gmail.com</p>
            </div>
            <div className="containerInfo">
              <svg className="svg" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.13788 0.323587L4.62927 1.93962C5.04084 2.38474 5.0422 3.10797 4.62927 3.5553L4.38067 3.82464L1.39746 0.593006L1.64616 0.323587C2.04473 -0.10823 2.73996 -0.107494 3.13788 0.323587ZM7.94801 8.76913C7.63418 9.0325 7.18648 9.02199 6.89972 8.71065L3.95089 5.51388C3.66348 5.20251 3.6538 4.71715 3.89692 4.37801L0.920572 1.15381C-0.35984 2.77068 -0.309778 5.20698 1.10338 6.73791L5.76985 11.7955C7.12594 13.2645 9.34723 13.4594 10.9245 11.9934L7.94801 8.76913ZM11.6908 9.59197L10.1994 7.97593C9.80148 7.54485 9.10626 7.54411 8.70768 7.97593L8.45898 8.24535L11.4422 11.477L11.6908 11.2077C12.1037 10.7603 12.1024 10.0371 11.6908 9.59197Z" fill="#00BCA0" />
              </svg>
              <p className="phone">+56974241696</p>
            </div>

            <div className="containerInfo">
              <svg className="svg" width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 0C2.45929 0 0 2.504 0 5.6C0 8.84674 3.28668 13.2886 4.77863 15.1377C5.15511 15.6043 5.84489 15.6043 6.22138 15.1377C7.71332 13.2886 11 8.84673 11 5.6C11 2.504 8.54071 0 5.5 0ZM5.5 7.6C4.41571 7.6 3.53571 6.704 3.53571 5.6C3.53571 4.496 4.41571 3.6 5.5 3.6C6.58429 3.6 7.46429 4.496 7.46429 5.6C7.46429 6.704 6.58429 7.6 5.5 7.6Z" fill="#00BCA0" />
              </svg>

              <p className="city">{Jobs.city}</p>

            </div>
            <div className="containerInfo">

              <svg className="svg" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3 3.36842H11.9V1.68421C11.9 0.749474 11.1435 0 10.2 0H6.8C5.8565 0 5.1 0.749474 5.1 1.68421V3.36842H1.7C0.7565 3.36842 0.00849999 4.11789 0.00849999 5.05263L0 14.3158C0 15.2505 0.7565 16 1.7 16H15.3C16.2435 16 17 15.2505 17 14.3158V5.05263C17 4.11789 16.2435 3.36842 15.3 3.36842ZM10.2 3.36842H6.8V1.68421H10.2V3.36842Z" fill="#00BCA0" />
              </svg>
              <p className="dateOfBirth">{Jobs.dateOfBirth}</p>
            </div>
            <p className="titleAboutMe">Sobre Mí</p>
            <h3 className="aboutMe">{Jobs.abautMe}</h3>
          </div>

          <div id="containerExperience" className="col-6">
            <div className="containerInfo">
              <svg className="svgJob" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3 3.36842H11.9V1.68421C11.9 0.749474 11.1435 0 10.2 0H6.8C5.8565 0 5.1 0.749474 5.1 1.68421V3.36842H1.7C0.7565 3.36842 0.00849999 4.11789 0.00849999 5.05263L0 14.3158C0 15.2505 0.7565 16 1.7 16H15.3C16.2435 16 17 15.2505 17 14.3158V5.05263C17 4.11789 16.2435 3.36842 15.3 3.36842ZM10.2 3.36842H6.8V1.68421H10.2V3.36842Z" fill="#00BCA0" />
              </svg>
              <p className="titleGeneric">Experiencia Laboral </p>

            </div>

            <p className="nameWorkInstitution">{Jobs.nameWorkInstitution}</p>
            <div className="containerDataUser">
              <div className="sectionDate">
                <p id="workTitle">{Jobs.workTitle}</p>
                <p className="workSince">
                  {Jobs.workSince}
                  -
                  {Jobs.workUntil}
                </p>

              </div>
              <section className="sectionDescription">
                <h3 className="workDescription">
                  {Jobs.workDescription}
                </h3>

              </section>

            </div>
            <hr className="line" />


            <div>
              <div className="containerInfo">
                <svg className="svgEducation" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10.18V14.18L11 18L18 14.18V10.18L11 14L4 10.18ZM11 0L0 6L11 12L20 7.09V14H22V6L11 0Z" fill="#00BCA0" />
                </svg>
                <p className="titleGeneric">Educación</p>
              </div>
              <p className="nameInstitution">{Jobs.nameInstitution}</p>
              <div className="containerDataUser">
                <div className="sectionDate">
                  <p className="educationTitle">
                    {Jobs.educationTitle}
                  </p>
                  <p className="educationSince">
                    {Jobs.educationSince}
                    -
                    {Jobs.educationUntil}
                  </p>
                </div>
                <section className="sectionDescription">
                  <p className="educationDescription">
                    {Jobs.educationDescription}
                  </p>
                  {/* <p className="educationArea">{Jobs.educationArea}</p> */}
                </section>

              </div>
              <hr className="line"/>
            </div>
          </div>
        </div>
      </div>

      )}
    </div>
  );
};
export default JobsView;
