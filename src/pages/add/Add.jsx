import React, { useState } from 'react';
import './add.scss';
import Navigation from '../../components/layouts/navigation/Navigation';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import { FiUpload } from 'react-icons/fi';

function Add({ inputs, title }) {
  const [file, setFile] = useState("");

  console.log("file", file);

  return (
    <div className='add__new__page'>
      <Sidebar />
      <div className="add__new__container">
        <Navigation />
        <div className="add__content__top">
          <h1>{title}</h1>
        </div>
        <div className="add__content__bottom">
          <div className="content__bottom__left">
            <img src={ file ? URL.createObjectURL(file) : "https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png"} alt="user__avatar" />
          </div>
          <div className="content__bottom__right">
            <form>
              <div className="form-control">
                <label htmlFor='file'>
                  Image: <FiUpload className='upload__icon' />
                </label>
                <input type="file" id='file' onChange={e=> setFile(e.target.files[0])} style={{ display: 'none' }}/>
              </div>
              {
                inputs.map((input) => (
                  <div className="form-control" key={input.id} >
                  <label>{input.label}:</label>
                  <input type={input.type} placeholder={input.placeholder}/>
                </div>
                ))
              }
              <div className="form-control">
                <button className='btn__submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add;