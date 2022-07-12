import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

let hierarchy = [{
  position_name: 'Fallout zone',
  position_id: '556AEC',
  sales_cycle: '1 Jan 2022 - 30 Apr 2022',
  user_group_id: '279',
  user_group_name: 'nameKLM|EC7|zone manager',
  position_level: 'Zone',
  position_role: 'zone manager',
  child: [{
    position_name: 'Strategic Account Management',
    position_id: '23E13F',
    sales_cycle: '1 Jan 2022 - 30 Apr 2022',
    user_group_id: '280',
    user_group_name: 'nameKLM|EC7|area manager',
    position_level: 'Area',
    position_role: 'area manager',
    child: [{
      position_name: 'East',
      position_id: '890387',
      sales_cycle: '1 Jan 2022 - 30 Apr 2022',
      user_group_id: '275',
      user_group_name: 'nameKLM|EC7|region manager',
      position_level: 'Region',
      position_role: 'region manager',
      child: [{
        position_name: 'Toledo',
        position_id: '199F13',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '2',
        user_group_name: 'ProfileRole_02',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Washington DC',
        position_id: '3FD965',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Louisville',
        position_id: '4B10CF',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'New York City',
        position_id: '74DF53',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Charlotte',
        position_id: 'EE4437',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, ],
    }, {
      position_name: 'Contract Services',
      position_id: '8D143D',
      sales_cycle: '1 Jan 2022 - 30 Apr 2022',
      user_group_id: '275',
      user_group_name: 'nameKLM|EC7|region manager',
      position_level: 'Region',
      position_role: 'region manager',
      child: [{
        position_name: 'SAM Special Assignment',
        position_id: '06F130',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Fallout Territory',
        position_id: '1F850A',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Contract Services Mgr 1',
        position_id: '546784',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Contract Services Mgr 3',
        position_id: '5770C7',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Contract Services Mgr 2',
        position_id: 'E42EBB',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, ],
    }, ],
  }, {
    position_name: 'Central - West',
    position_id: '23E13S',
    sales_cycle: '1 Jan 2022 - 30 Apr 2022',
    user_group_id: '280',
    user_group_name: 'nameKLM|EC7|area manager',
    position_level: 'Area',
    position_role: 'area manager',
    child: [{
      position_name: 'West',
      position_id: 'A38A9B',
      sales_cycle: '1 Jan 2022 - 30 Apr 2022',
      user_group_id: '275',
      user_group_name: 'nameKLM|EC7|region manager',
      position_level: 'Region',
      position_role: 'region manager',
      child: [{
        position_name: 'Northwest',
        position_id: '15D9FD',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'San Francisco',
        position_id: '5BBAE8',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'South Texas',
        position_id: 'A540B4',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Phoenix',
        position_id: 'EE4327',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'North & Central Texas',
        position_id: 'FDA65F',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'San Diego',
        position_id: 'FFC075',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, ],
    }, {
      position_name: 'Central',
      position_id: 'AD1DAC',
      sales_cycle: '1 Jan 2022 - 30 Apr 2022',
      user_group_id: '275',
      user_group_name: 'nameKLM|EC7|region manager',
      position_level: 'Region',
      position_role: 'region manager',
      child: [{
        position_name: 'Des Moines',
        position_id: '17F592',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Omaha',
        position_id: '439B87',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Sioux Falls',
        position_id: 'C461E1',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Kansas City',
        position_id: 'CFD4DE',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, {
        position_name: 'Denver',
        position_id: 'FA8167',
        sales_cycle: '1 Jan 2022 - 30 Apr 2022',
        user_group_id: '278',
        user_group_name: 'nameKLM|EC7|field rep',
        position_level: 'Territory',
        position_role: 'field rep',
        child: [],
      }, ],
    }, ],
  }, ],
}, ];

export default class FbLogin extends Component {
  
  state = {
    ele:<div></div>,
    num:0
  }

  keep = (value,i) => {
    value.map((item,index)=>{
      console.log(index);
      console.log(i,item);
      if(item.child!=[]){
        this.keep(item.child,index+1)
      }
      return(<div>{item}</div>)
    })
  }

  componentDidMount(){
    this.setState({
      ele:this.keep(hierarchy,0)
    })
  }

  render() {
    return (
      <div>
        <div>JSON</div>
        {this.state.ele}
      </div>
    )
  }
}
