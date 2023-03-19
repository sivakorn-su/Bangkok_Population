import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom";

function Hearder() {

    return (
        <div className='header'>
            <div className="header-content">
                <h2>สถิติประชากรกรุงเทพฯ พ.ศ. 2550 - 2559</h2>
                <h4>ลักษณะพื้นที่</h4>
                <p>กรุงเทพฯ เป็นจังหวัดที่มีประชากรมากที่สุดใน ประเทศไทยหากรวมประชากรแฝงที่ไม่ปรากฏในทะเบียนและคนที่เดินทางมาทำงานในตอนกลางวันด้วยแล้ว
                    คาดว่าจะสูงถึงเกือบเท่าตัวของ ประชากรที่ปรากฏในทะเบียน เราจึงเรียก กรุงเทพฯ ว่าเป็น
                    <a href='https://en.wikipedia.org/wiki/Megacity'>“อภิมหานคร (megacity)”</a>

                    คือมีประชากรตั้งแต่ 10 ล้านคนขึ้นไป
                </p>
                <p>อัตราเพิ่มของประชากรกรุงเทพฯ อยู่ระดับเกือบ 1% และเริ่มลดลงในปี 2559 ดังแสดงในแผนภูมิ ต่อไปนี้</p>
            </div>


        </div>

    )
}

export default Hearder