import React, {PropTypes} from 'react';

export default class Showcase extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    unpin: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    const {items} = this.props;

    if (!items.length) {
      this.state = { items: [] };
    } else {
      this.state = {
        items: items.map(item => Object.assign(item, {
          preview: item.images[0],
          pinned: false
        }))
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    const {items} = nextProps;
    this.setState({
      items: items.map(item => Object.assign(item, {
        preview: item.images[0],
        pinned: false
      }))
    });
  }

  render() {
    const {items} = this.state;

    return (
      <div className='col-md-9 showcase'>
        {items.map((item, index) => {
          const pinLabel = this.renderSelect(item, index);
          return (
            <div className='col-md-3 showcase-card'
              onMouseEnter={this.hoverImage.bind(null, index)}
              onMouseLeave={this.hoverImage.bind(null, index)}
              style={{background: 'url(' + item.preview + ') center / cover'}}>
              {pinLabel}
              <a className='showcase-card__link' href={item.link} target='_blank'></a>
              <div className='showcase-card-action'>
                <span className='showcase-card-action__name'>{item.title}</span>
                <span className='showcase-card-action__price'>{item.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  hoverImage = (index) => {
    this.setState(previousState => {
      const {items} = previousState;
      const firstImage  = items[index].images[0];
      const secondImage = items[index].images[1] || firstImage;

      items[index].preview = items[index].preview === firstImage ? secondImage : firstImage;

      return {items};
    });
  }

  handleClick = (index) => {
    const {unpin} = this.props;
    unpin(this.state.items[index]);

    this.setState(previousState => {
      previousState.items.splice(index, 1);
      return previousState;
    });
  }

  renderSelect = (item, index) => {
    const imageStyle = {
      position: 'absolute',
      width: 100,
      transform: 'rotateZ(40deg)',
      right: -30,
    };
    return (<img style={imageStyle} onClick={this.handleClick.bind(null, index)} src='https://s3-ap-northeast-1.amazonaws.com/e-shopping/icon/label--blue.png'/>);
  }
}
