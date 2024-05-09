import React, { useState, useEffect } from 'react';
import Col from './Col';

export default function Row({ rowname }) {
  const [className, setClassName] = useState('');

  useEffect(() => {
    if (rowname === 1) {
      setClassName('v_row2');
    } else {
      setClassName('v_row1');
    }
  }, [rowname]);

  return (
    <div className={`row ${className} d-flex`}>
          {
            rowname!==1 &&
            Array.from({ length: 3 }).map((_, i) => (
              <Col coltype={(i!==1)?"corner-col":"center-col"} color={(rowname===0)?(i===0)?"red":"green":(i===0)?"blue":"yellow"}/>
            ))
          }
          {
            rowname===1&&
            Array.from({ length: 3 }).map((_, i) => (
             <Col coltype={(i===1)?"main-col":"rowcenter-col"} ></Col>
            ))
          }
    </div>
  );
}
