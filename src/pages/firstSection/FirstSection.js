import React from 'react'
import DropDown from '../../component/dropDown/DropDown'
import Information from '../../component/information/Information'
import Informationpart2 from '../../component/informationPart2/InformationPart2'
import Rule from '../../component/rule/Rule'
import SideBar from '../../component/sideBar/SideBar'
import TopBar from '../../component/topBar/TopBar'
import { data, data1, data2 } from '../../constants/Constant'
import styles from './FirstSectionStyle'
import Graph from '../../component/graph/Graph'
import Graph2 from '../../component/graph/Graph2'




function FirstSection() {
  return (
    <>

      <div style={{ display: 'flex', width: '100vw', }}>
        <div style={{ width: '5%' }}>
          <SideBar />
        </div>
        <style>{`
::-webkit-scrollbar {
  width: 10px;
  height:10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #2C2F33; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background:  #7740FF;
  border-radius: 10px;
}
    `}</style>
        <div style={{ width: '95%', }}>
          <TopBar />
          <div style={styles.scrollbar}>
            <div style={styles.flex}>
              {
                data.map((item, index) => {
                  return <div key={index}><Rule data={item} /></div>
                })}
            </div>
          </div>
          <div className='mr-10 mb-5' style={styles.flex1}>
            <div style={{width:'50%'}}>
              <div style={styles.flex}>
                <div>
                  <div style={styles.flex1} className='mt-8  mb-3'>
                    <h3 className='text-white text-xl pl-4'> Listing (893)</h3>
                    <div style={styles.flex}>
                      <DropDown title="Rank" />
                      <DropDown title="Price" />
                      <DropDown title="Date" />
                    </div>
                  </div>
                  <div style={styles.scroll}>
                    {
                      data1.map((item, index) => {
                        return <Information data1={item} />
                      })}
                  </div>
                  <div style={styles.flex1} className='mt-8  mb-3'>
                    <h3 className='text-white text-xl pl-4'> Trades <span>(2500)</span></h3>
                    <div style={styles.flex1}>
                      <DropDown title="Rank" />
                      <DropDown title="Price" />
                    </div>
                  </div>
                  <div style={styles.scroll}>
                      {
                        data2.map((item, index) => {
                          return <div key={index}><Informationpart2 data2={item} /></div>
                        })}
                  </div>
                </div>
              </div>
            </div>
            <div style={{width:'40%'}}>
              <Graph2 />
              <Graph />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default FirstSection



