import React from "react";
import { useState } from "react";
class DisplayTable extends React.Component{
    
    constructor(props){
        super(props)
        this.state={list:[]
        }
        this.callAPI=this.callAPI.bind(this)
        this.callAPI();
    }
    callAPI(){
        fetch("http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03",
        ).then(
            (response)=>response.json()
        ).then((data_date)=>{
            // console.log(data_date)
            this.setState({
                list:data_date.data
            })
        }
        )

        fetch("http://go-dev.greedygame.com/v3/dummy/apps").then(
            (response)=>response.json()
        ).then((data_app)=>{
            // console.log(data_app)
            this.setState({
                list:data_app.data
            })
        }
        )
    }
    render(){
        let tb_data=this.state.list.map((item)=>{
            return(
                <tr key={item.app_id}>
                <td>{item.app_id}</td>   
                <td>{item.date}</td>
                <td>{item.requests}</td>
                <td>{item.responses}</td>
                <td>{item.impressions}</td>
                <td>{item.clicks}</td>
                <td>{item.revenue}</td>
                </tr>
        )
    })
    return(
        <div>
            <table>
                <tbody>
                    {tb_data}
                </tbody>
            </table>
        </div>
    )

}}
export default DisplayTable;
