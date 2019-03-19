import React, { PureComponent } from 'react'
import '../style/item.css'

class Item extends PureComponent {

  render() {
    const { url, name, price } = this.props

    return (
      <React.Fragment class="item">
        <img
          className="item_image"
          style = {{width:200+"px",height:200+"px"}}
          src={url}
          alt="image loading failed"
        />
        <div className="item__name">{name}</div>
        <div className="val">
          <small>$</small>
          <b>{price}</b>
        </div>
        <br></br>
      </React.Fragment>
    )
  }
}

export default Item