import React from 'react';

interface IState
{
  width: number;
  height: number;
}

export class App extends React.Component<{}, IState>
{
  state = {
    width: window.innerWidth,
    height: 0,
  };

  div: HTMLDivElement | null = null;

  constructor(props:{})
  {
    super(props);
    this.onResize = this.onResize.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount()
  {
    window.addEventListener('resize', this.onResize)
    if(this.div) this.setState({height: this.div.clientHeight})
    console.log(this.div?.clientHeight);
  }
  componentWillUnmount()
  {
    window.removeEventListener('resize', this.onResize)
  }
  onResize()
  {
    this.setState({width: window.innerWidth});
  }
  onChange(event:React.ChangeEvent<HTMLInputElement>)
  {
    let height = parseInt(event.target.value) || null;
    if(height == null) return;
    this.setState({height});
  }
  render()
  {
    let style = {};
    let {width, height} = this.state;
    if(height) style = {height: height};
    return <div style={{border: '1px solid #000', ...style}} ref={(ref)=> this.div = ref } >
      <input type="text" onChange={this.onChange}/>
      <span>{width}</span>
    </div>
  }
}