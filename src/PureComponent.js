import React, {  PureComponent } from 'react'
class PureComp extends PureComponent {
  render() {
    console.log("%c render() du PureComponent ", "color:green;")
    return (
        <p>

            <span className="green">PureComponent : </span>
            {this.props.name}

        </p>
    )
  }
}
export default PureComp ;