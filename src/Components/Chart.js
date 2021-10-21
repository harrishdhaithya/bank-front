import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
const Chart = ({data}) => {
    const ret=data();
    console.log(ret);
    return (
            
            <div className="container row" style={{height:"auto",backgroundColor:"#FEF5ED",padding:"10px"}}>
              <div className="col-12 fs-2 text-white text-center bg-primary rounded">Balance Analytics</div>
              <PieChart
                data={[
                  { title: 'Below 999$', value: ret[0], color: '#E38627' },
                  { title: '1000$ to 9999$', value: ret[1], color: '#C13C37' },
                  { title: '10000$ to 49999$', value: ret[2], color: '#6A2135' },
                  { title: 'Above 50000$', value: ret[3], color: '#FFC107' }
                ]}
                className="col-lg-6 col-md-12 mt-2"
                
              />
              <div className="col-lg-6 col-md-12 flex-col mt-2">
                <table className="border border-dark">
                  <thead>
                    <tr>
                      <th>Color</th>
                      <th>Account Balance</th>
                      <th>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{backgroundColor:"#E38627"}}></td>
                      <td>Below 999$</td>
                      <td>{ret[0]}</td>
                    </tr>
                    <tr>
                      <td style={{backgroundColor:"#C13C37"}}></td>
                      <td>1000$ to 9999$</td>
                      <td>{ret[1]}</td>
                    </tr>
                    <tr>
                      <td style={{backgroundColor:"#6A2135"}}></td>
                      <td>10000$ to 49999$</td>
                      <td>{ret[2]}</td>
                    </tr>
                    <tr>
                      <td style={{backgroundColor:"#FFC107"}}></td>
                      <td>50000$</td>
                      <td>{ret[3]}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            
          </div>
    );
}

export default Chart;
