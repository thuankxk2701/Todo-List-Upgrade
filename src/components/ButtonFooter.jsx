import React from 'react';
import { Link } from 'react-router-dom';
function ButtonFooter() {
  return (
    <div>
      <Link title='Add New' to='/' className='button add'>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <Link title='Search' to='/search' className='button search'>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
    </div>
  );
}

export default ButtonFooter;
