import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      currIndex: 0,
      isPrevImageVisible: false,
      isNextImageVisible: props.images.length > 1 ? true : false
    };
  }

  onPrevClick = () => {
    if (this.state.currIndex > 0) {
      this.setState({
        currIndex: this.state.currIndex - 1,
        isPrevImageVisible: this.state.currIndex - 1 === 0 ? false : true,
        isNextImageVisible: true
      });
    }
  };

  onNextClick = () => {
    const { images, currIndex } = this.state;
    if (currIndex < images.length - 1) {
      this.setState({
        currIndex: this.state.currIndex + 1,
        isPrevImageVisible: true,
        isNextImageVisible:
          this.state.currIndex + 1 === images.length - 1 ? false : true
      });
    }
  };

  render() {
    const { pxs } = this.props;
    const squareSide = pxs + 'px';
    const topPos = (-1 * (pxs * 0.125)).toString() + 'px';
    const color = '#C4C4C4';

    const {
      images,
      currIndex,
      isPrevImageVisible,
      isNextImageVisible
    } = this.state;
    const imageSquare =
      images.length > 0 ? (
        <div className="item active">
          <img src={images[currIndex].url} />
        </div>
      ) : (
        <div style={{ background: color }} />
      );

    return (
      <table>
        <tbody>
          <tr>
            <td
              style={{
                verticalAlign: 'middle',
                cursor: 'pointer',
                position: 'relative',
                top: topPos
              }}
            >
              <i
                className="fa fa-angle-left"
                style={
                  isPrevImageVisible === true
                    ? { color: '#0088a9', fontSize: '18px' }
                    : { color: color, fontSize: '18px' }
                }
                aria-hidden="true"
                onClick={this.onPrevClick}
              />
            </td>
            <td style={{ width: '10px' }}>&nbsp;</td>

            <td style={{ width: squareSide }}>
              <div style={{ height: squareSide }}>
                <div className="carousel slide">
                  <div className="carousel-inner" role="listbox">
                    {imageSquare}
                  </div>
                </div>
              </div>
            </td>
            <td style={{ width: '10px' }}>&nbsp;</td>
            <td
              style={{
                verticalAlign: 'middle',
                cursor: 'pointer',
                position: 'relative',
                top: topPos
              }}
            >
              <i
                className="fa fa-angle-right"
                style={
                  isNextImageVisible === true
                    ? { color: '#0088a9', fontSize: '18px' }
                    : { color: color, fontSize: '18px' }
                }
                aria-hidden="true"
                onClick={this.onNextClick}
              />
            </td>
            <td style={{ width: '10px' }}>&nbsp;</td>
            <td
              style={{
                color: color,
                fontSize: '15px',
                position: 'relative',
                top: topPos,
                verticalAlign: 'middle'
              }}
            >
              {images.length}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Carousel;
