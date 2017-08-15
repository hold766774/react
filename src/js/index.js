import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

class Me extends React.Component
{
    constructor(props)
    {
        super(props);
        this.loading=[];
        this.state={
            users:[],
            leader:""
        }
    }
    showLoading(isshow)
    {

        let display=isshow?"block":"none";
        this.loading.forEach((item)=>{
            item.style.display=display;

        })
    }
    componentWillMount()
    {
        this.showLoading(true);
        axios.get("http://localhost/users.php")
            .then((res)=>{
                this.setState({
                    leader:res.data.leader,
                    users:res.data.users
                })
                this.showLoading(false);
            })
    }
    render()
    {
        return <div>
            <span ref={(span)=>{this.loading.push(span)}}>正在加载……</span>
            {this.state.users.map(
                (item)=>{
                    return <h2>{item.name}_{item.age}</h2>
                    }
                )
            }
<h1>项目经理:{this.state.leader}<span ref={(span)=>{this.loading.push(span)}}>正在加载……</span></h1>
            <div>
                <input type="button" value="改变" onClick={()=>{

                }
                }/>
            </div>
        </div>
    }
}

ReactDOM.render(
    <Me />,
    document.getElementById('root')
);