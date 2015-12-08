import React, {PropTypes} from 'react';

export default class Showcase extends React.Component {
  static propTypes = {
    items: PropTypes.object.isRequired
  };

  render() {
    let {items} = this.props;

    items = items.toArray();

    return (
      <div className='col-md-9 showcase'>
        {items.map(item => (
          <div className='col-md-3 showcase-card' style={{background: 'url(' + item.image + ') center / cover'}}>
            <a className='showcase-card__link' href={item.link} target='_blank'></a>
            <div className='showcase-card-action'>
              <span className='showcase-card-action__name'>{item.name}</span>
              <span className='showcase-card-action__price'>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
