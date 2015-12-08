import React  from 'react';
import {Link} from 'react-router';

export default class Aside extends React.Component {

  render() {
    return (
      <div className='col-md-2'>
        <ul className='aside'>
          <li className='aside__item'><Link to='/'>NEW</Link></li>
          <li className='aside__item'><Link to='/discount'>DISCOUNT</Link></li>
          <li className='aside__item'><Link to='/wishlist'>WISHLIST</Link></li>
        </ul>
      </div>
    );
  }
}
