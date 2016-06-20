var Counter = React.createClass({
    getInitialState:function(){
        return {count:0};
    },
    handleClick: function () {
        this.setState({
            count:this.state.count + 1
        });
    },
    render:function(){
        //返回dom
        return(
            <button onClick = {this.handleClick}>
                点击次数:{this.state.count}
            </button>
        );
    }
});

ReactDOM.render(
    <Counter />,document.getElementById("container"));