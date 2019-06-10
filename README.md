# react-carousel-table

React component of Carousel inside a table styled in bootstrap 


## Example


![alt text](https://user-images.githubusercontent.com/24729891/59196519-93b10b00-8bac-11e9-9110-0f2f6bfd0df7.png)

```html
<!-- Put bootstrap cdn link (like below) in index.html of your React App -->
<!-- Latest compiled and minified CSS -->
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
  crossorigin="anonymous"
/>
```

```jsx
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Carousel from 'react-carousel-table';

const images = [
  {
    id: '1',
    url:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '2',
    url:
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <br />
          Carousel in a Table
          <br />
          <table className="table" style={{ width: '80%' }}>
            <tbody>
              <tr>
                <td>Demo</td>
                <td>
                  <Carousel images={images} pxs={100} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
```

## Install

```cli
npm install react-carousel-table
npm install font-awesome
```

## Props

##### `images`

An array of object with properties like 'id' and 'url'.
```js
const images = [
  {
    id: '1',
    url:
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '2',
    url:
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];
```

---

##### `pxs`

Sets the width and height of image box.


## License

MIT
